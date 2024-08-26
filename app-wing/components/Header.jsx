import { StyleSheet, Text, View, Image } from "react-native";
import React from 'react';

const Header =()=>{
  return (
    <View style={styles.headerContainer}>
      <View style={styles.appIconCon}>
        <Image source={require("../assets/shop.jpg")} style={styles.appIcon} />
      </View>
      <Image source={require("../assets/cake.png")} style={styles.cakeImage} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    padding: 10, 
    backgroundColor: '#FE7B7C',
    justifyContent:"space-between",

  },
  appIcon: {
    height: 30,
    width: 30,
  },
  appIconCon: {
    backgroundColor: "#FFFFFF", 
    height: 44,
    width: 44,
    borderRadius: 22, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginRight: 10,
  },
  cakeImage: {
    height: 50, 
    width: 50,
  },
});
