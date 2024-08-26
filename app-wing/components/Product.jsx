import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";

const Product =()=>{
  const [isLike,setLike]=useState(false);
  return (
    <View style={styles.cont}>
     <Image source={require("../assets/C1.webp")}
      style={styles.coverpage}
      />
      <View style={styles.content}>
<Text style={styles.st}>      Choco Cake</Text>
<Text style={styles.stA}>        Rs. 150</Text>
    </View>
    <TouchableOpacity style={styles.likeCon} 
    onPress={() => setLike(!isLike)} >
    {isLike?
    <AntDesign name={"hearto"} size={20} color={"#E55B5B"} />:<AntDesign name={"heart"} size={20} color={"#E55B5B"} />
    }
   </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  likeCon:{
height:34,
width:34,
backgroundColor:"#FFF",
justifyContent:"center",
alignItems:"center",
borderRadius:17,
position:"absolute",
top:20,
right:25,

  },
  cont:{
    flex:1,
  position:"relative",
  },
 coverpage:{
   height:200,
   width:140,
   borderRadius:20,
   marginVertical:10,
   marginRight:10,
 },
 st:{
fontWeight:600,
fontSize:17,
 },
 stA:{
   fontWeight:600,
   color:"#444444"
 },
 content:{
paddingHorizontal:10,
 },

});
