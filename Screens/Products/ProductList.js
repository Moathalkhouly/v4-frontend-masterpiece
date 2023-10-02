import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  const { item } = props;

  return (
    <View>
      <TouchableOpacity
        style={{ width: "50%" }}
        onPress={() =>
          props.navigation.navigate("Product Details", { item: item })
        }
      >
        <View>
          <ProductCard {...item} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductList;
