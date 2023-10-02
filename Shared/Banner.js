import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";

const scroll1 = require("../assets/swiper1.png");
const scroll2 = require("../assets/swiper2.png");
const scroll3 = require("../assets/swiper3.png");

var { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([scroll1, scroll2, scroll3]);

  useEffect(() => {}, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 1.8 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerData.map((item, index) => {
              return (
                <Image
                  key={index}
                  style={styles.imageBanner}
                  resizeMode="fill"
                  source={item}
                />
              );
            })}
          </Swiper>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 5,
  },
  imageBanner: {
    height: width / 1.8,
    width: width - 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default Banner;
