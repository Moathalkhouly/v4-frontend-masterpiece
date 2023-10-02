import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";

const CartItem = (props) => {
  const item = props.item;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.product.image
            ? item.product.image
            : "https://i.pinimg.com/474x/47/32/eb/4732eb1592b116443340917e51eed478.jpg",
        }}
        style={styles.thumbnail}
      />
      <View style={styles.body}>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.price}>${item.product.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => props.removeFromCart(item)}
      >
        <Icon name="trash" color={"red"} size={20} />
      </TouchableOpacity>
    </View>
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
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  thumbnail: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 5,
  },
  body: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "green",
  },
  removeButton: {
    marginLeft: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
