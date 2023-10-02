import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";

import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";

import { Toast } from "react-native-toast-message";

var { width } = Dimensions.get("window");

const ProductCard = (props) => {
  const { name, price, image, countInStock } = props;

  const handleAddToCart = () => {
    props.addItemToCart(props);

    // Toast.show({
    //   type: "success",
    //   text1: `${name} added to Cart`,
    //   text2: "Go to your cart to complete the order",
    // });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: image
            ? image
            : "https://i.pinimg.com/474x/47/32/eb/4732eb1592b116443340917e51eed478.jpg",
        }}
      />
      <Text style={styles.title}>
        {name.length > 20 ? name.substring(0, 17) + "..." : name}
      </Text>
      <Text style={styles.price}>${price}</Text>
      {countInStock > 0 ? (
        <View style={styles.addToCartButton}>
          <Text style={styles.addToCartText} onPress={handleAddToCart}>
            Add to Cart
          </Text>
        </View>
      ) : (
        <Text style={styles.unavailableText}>Currently Unavailable</Text>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    color: "orange",
    marginTop: 10,
  },
  addToCartButton: {
    backgroundColor: "#e45b55",
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  unavailableText: {
    marginTop: 10,
    color: "red",
    fontWeight: "bold",
  },
});

export default connect(null, mapDispatchToProps)(ProductCard);
