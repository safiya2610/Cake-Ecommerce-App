import { StyleSheet, Text, View, Image } from "react-native";
import React from 'react';
import FontAwesome6 from "react-native-vector-icons/FontAwesome";

const ImageUrl = "https://spoorthycuisine.com/wp-content/uploads/2021/06/pineapple-cake.jpg";

const ProductCard = ({ imageUrl, title, price }) => (
  <View style={styles.cardContainer}>
    <Image source={{ uri: imageUrl }} style={styles.coverImage} />
    <View style={styles.cardContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
    <FontAwesome6 name={"trash"} color={"#FE7B7C"} size={25} />
  </View>
);

const CartCard = () => {
  return (
    <View style={styles.headerContainer}>
      <ProductCard imageUrl={ImageUrl} title="Pineapple Cake" price="Rs. 600" />
      <ProductCard imageUrl={ImageUrl} title="Pineapple Cake" price="Rs. 600" />
      <ProductCard imageUrl={ImageUrl} title="Pineapple Cake" price="Rs. 600" />
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 10,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  coverImage: {
    height: 125,
    width: "35%",
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: "#444444",
  },
  price: {
    color: "#797979",
    fontSize: 15,
    marginVertical: 10,
  },
});
