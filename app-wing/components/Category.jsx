import { StyleSheet, Text, View, Image } from "react-native";
import React from 'react';

const Header = () => {
  return (
    <View >
  <Text style={styles.CategoryText}>Cupcake</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
 CategoryText:{
   fontSize: 20,
    fontWeight: "500",
    color: "white",
    backgroundColor: "#FE7B7C",
    borderRadius: 10,
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 10,
 }
});
