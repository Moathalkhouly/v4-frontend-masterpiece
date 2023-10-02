import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";

const CategoryFilter = (props) => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {props.categories.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            props.categoryFilter(item.id);
            props.setActive(index);
          }}
          style={[
            styles.categoryItem,
            props.active === index && styles.activeCategory,
          ]}
        >
          <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  categoryItem: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: "#333",
    fontWeight: "bold",
  },
  activeCategory: {
    backgroundColor: "#03bafc",
  },
});

export default CategoryFilter;
