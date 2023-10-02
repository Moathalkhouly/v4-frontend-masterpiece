import { Text, View, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          source={require("../assets/logoPet.png")}
          resizeMode="contain"
          style={{ height: 100 }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default Header;
