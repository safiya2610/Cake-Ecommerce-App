import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import CartCard from "./components/CartCard.jsx";
import FontAwesome6 from "react-native-vector-icons/FontAwesome";
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content} style={styles.scrollView}   showsHorizontalScrollIndicator={false}>
        <Text style={styles.textLogo}>Love at First Taste</Text>
        <View style={styles.inputCon}>
          <Fontisto name="search" size={24} color="#C0C0C0" />
          <Text style={styles.inputText}>Search</Text>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.horizontalScrollView}
          contentContainerStyle={styles.imageCon}
        >
          <Image style={styles.image} source={{ uri: "https://img.freepik.com/premium-photo/big-colorful-beautiful-birthday-cake-white-background_917664-10807.jpg" }} />
          <Image style={styles.image} source={{ uri: "https://previews.123rf.com/images/maxpayne222/maxpayne2221210/maxpayne222121000040/15703284-chocolate-cake-isolated-on-white-background.jpg" }} />
          <Image style={styles.image} source={{ uri: "https://t3.ftcdn.net/jpg/02/30/28/48/360_F_230284812_BWNoNU6T7gR0BUcUBaQQC4FCm4f1oooq.jpg" }} />
          <Image style={styles.image} source={{ uri: "https://t4.ftcdn.net/jpg/06/24/60/79/360_F_624607979_C4kbF20NwR6n0wTZXWgItYKoya3n1UwQ.jpg" }} />
          <Image style={styles.image} source={{ uri: "https://st.depositphotos.com/1001348/1533/i/450/depositphotos_15333681-stock-photo-piece-of-pineapple-cake-cream.jpg" }} />
          <Image style={styles.image} source={{ uri: "https://static.vecteezy.com/system/resources/previews/029/992/023/non_2x/cute-little-birthday-cake-clipart-on-white-background-ai-generated-photo.jpeg" }} />
        </ScrollView>

        <View style={styles.productContainer}>
          <View style={styles.productRow}>
            <Product style={styles.product} />
            <Product style={styles.product} />
          </View>
          <View style={styles.productRow}>
            <Product style={styles.product} />
            <Product style={styles.product} />
          </View>
        </View>
      </ScrollView>
      
    </View>
  );
}

function Reorder() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text>Reorder</Text>
      </ScrollView>
    </View>
  );
}

function Cart() {
  return (
    <View style={styles.container}> 
    <Header/>
     <Text style={styles.TextC}>My Cart</Text>
    <CartCard/>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.CartCon}>

        </View>

      </ScrollView>
    </View>
  );
}


function Account() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text>Account</Text>

         <View style={styles.header}>
        <Image
          source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/11/24/34/c6/mandarin-cake-shop-bakery.jpg' }} 
          style={styles.profileImage}
        />
        <Text style={styles.username}>Safiya Nasir</Text>
        <Text style={styles.email}>LCI2023053</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem}>
          <FontAwesome6 name="list" color={"#FE7B7C"} size={20} />
          <Text style={styles.sectionTitle}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <FontAwesome6 name="heart" color={"#FE7B7C"} size={20} />
          <Text style={styles.sectionTitle}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <FontAwesome6 name="cog" color={"#FE7B7C"} size={20} />
          <Text style={styles.sectionTitle}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <FontAwesome6 name="sign-out-alt" color={"#FE7B7C"} size={20} />
          <Text style={styles.sectionTitle}>Logout</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#FE7B7C", headerShown: false }}>
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
          initialRouteName="CART"
        />
        <Tab.Screen
          name="REORDER"
          component={Reorder}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="repeat" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="CART"
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={Account}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  CartCon:{
flex:1,
  },
  TextC:{
  fontWeight:500,
  fontSize:28,
    color: "#FE7B7C",
   textAlign:"center",
   alignSelf:"center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 60,
  },
  textLogo: {
    fontSize: 28,
    color: "#FE7B7C",
    fontWeight: "500",
    marginVertical: 20,
  },
  inputCon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#F5F5F5",
    height: 40,
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 250,
  },
  inputText: {
    marginLeft: 10,
    color: "#C0C0C0",
    fontSize: 16,
  },
  horizontalScrollView: {
    marginVertical: 20,
    width: '100%',
    height: 120,
  },
  imageCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  productContainer: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  product: {
    flex: 1,
    height: 200,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
  },

  
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#444',
  },
  email: {
    fontSize: 16,
    color: '#797979',
  },
  section: {
    marginTop: 20,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  sectionTitle: {
    fontSize: 18,
    marginLeft: 15,
    color: '#444',
  },

});

export default App;
