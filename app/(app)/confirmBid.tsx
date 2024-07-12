import * as React from "react";
import { Image, StyleSheet, Pressable, View,TextInput, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native"; // Change import
import { useNavigation, ParamListBase } from "@react-navigation/native";

const Confirm1 = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>(); // Change navigation type

  return (
    <View style={styles.confirm}>
      <Pressable
        style={styles.image4}
        onPress={() => navigation.navigate("Nav")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          //source={require("../assets/images/hamburger.png")}
        />
      </Pressable>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        //source={require("../assets/images/search.png")}
      />
      <View style={[styles.confirmChild, styles.confirmLayout]} />
      <Text style={[styles.message, styles.sendTypo]}>Message</Text>
    {/*  <View style={[styles.confirmItem, styles.confirmLayout]} />*/}
    <TextInput
        style={[styles.confirmItem, styles.confirmLayout]}
        placeholder="Type your item here..."
        placeholderTextColor="#9B9292"
      />
      <View style={styles.confirmInner} />
      <Text style={[styles.send, styles.sendTypo]}>Send</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmLayout: {
    borderRadius: 25,
    position: "absolute",
  },
  sendTypo: {
    textAlign: "center",
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 30,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image4: {
    left: 10,
    top: 15,
    width: 50,
    height: 35,
    position: "relative",
  },
  image5Icon: {
    top: -20,
    left: 330,
    width: 50,
    height: 40,
    position: "relative",
  },
  confirmChild: {
    top: 86,
    //left: 45,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 100,
    elevation: 100,
    shadowOpacity: 1,
    backgroundColor: '#AFD7D4',
    fontWeight:'bold',
    borderColor: '#fff',
    borderWidth: 1,
    width: 330,
    height: 590,
    left:30,
  },
  message: {
    top: 122,
    left: 111,
    color: '#000',
    width: 180,
    height: 50,
    fontWeight:'bold',
  },
  confirmItem: {
    top: 187,
    left: 46,
    backgroundColor: '#DFEFEE',
    width: 300,
    fontFamily:'Nanito',
    fontWeight:'bold',
    padding: 10,
    paddingBottom:100,
    height: 355,
  },
  confirmInner: {
    top: 495,
    left: 110,
    borderRadius: 50,
    backgroundColor: '#F5B958',
    width: 177,
    height: 61,
    position: "relative",
  },
  send: {
    top: 580,
    left: 130,
    color: '#Fff',
    width: 140,
    height: 33,
  },
  confirm: {
    backgroundColor: '#86D7D1',
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Confirm1;
