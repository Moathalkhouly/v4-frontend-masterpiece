import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";
import { SwipeListView } from "react-native-swipe-list-view";
import CartItem from "./CartItem";

var { height, width } = Dimensions.get("window");

const Cart = (props) => {
  var total = 0;
  props.cartItem.forEach((cart) => {
    return (total += cart.product.price);
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      {props.cartItem.length ? (
        <View style={styles.cartContainer}>
          <SwipeListView
            data={props.cartItem}
            renderItem={({ item }) => <CartItem item={item} />}
            renderHiddenItem={({ item }) => (
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => props.removeFromCart(item)}
              >
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
            disableRightSwipe={true}
          />
        </View>
      ) : (
        <View style={styles.emptyCart}>
          <Text>Your cart is empty.</Text>
        </View>
      )}
      {props.cartItem.length ? (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => props.navigation.navigate("Checkout")}
          >
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItem: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
  };
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cartContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  emptyCart: {
    alignItems: "center",
    marginTop: 50,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#2685FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 25,
    height: "100%",
  },
  removeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
