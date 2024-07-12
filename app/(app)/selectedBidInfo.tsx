import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useRouter } from 'expo-router';

const Selected = () => {
  const router = useRouter();

  return (
    <View style={styles.selected}>
      <Pressable
        style={styles.image4}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
        //  source={require("../assets/images/hamburger.png")}
        />
      </Pressable>
    
      <Text style={[styles.selected1, styles.sendTypo]}>Selected</Text>
      <View style={styles.selectedChild} />
      
      <View style={styles.selectedInner} />
      <Text style={[styles.message, styles.bidTypo]}>Message</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.bid, styles.bidTypo]}>Bid $$$</Text>
      <View style={[styles.selectedChild1, styles.rectangleViewLayout]} />
      <Text style={[styles.name, styles.bidTypo]}>Name</Text>
      <View style={[styles.selectedChild2, styles.selectedLayout]} />
      <Text style={[styles.send, styles.sendTypo]}>Send</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo: {
    textAlign: "center",
    fontFamily: 'Nunito-Bold',
    fontWeight: "700",
    position: "relative",
  },
  selectedLayout: {
    borderRadius: 45,
    position: "relative",
  },
  bidTypo: {
    color: '#fff',
    fontSize: 25,
    textAlign: "center",
    fontFamily: 'Nunito-Bold',
    fontWeight: "700",
    position: "relative",
  },
  rectangleViewLayout: {
    height: 66,
    width: 398,
    backgroundColor: '#ededed',
    left: 66,
    borderRadius: 45,
    position: "relative",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image4: {
    left: 10,
    top: 15,
    width: 50,
    height: 40,
    position: "relative",
  },
  image5Icon: {
    top: -20,
    left: 330,
    width: 50,
    height: 40,
    position: "relative",
  },
  selected1: {
    top: -20,
    left: 75,
    fontSize: 35,
    color: '#FF9800',
    width: 235,
    height: 50,
  },
  selectedChild: {
    top: 10,
    left: 35,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 100,
    shadowOpacity: 1,
    backgroundColor: '#AFD7D4',
    borderStyle: "solid",
    borderColor: '#fff',
    borderWidth: 0.5,
    width: 325,
    height: 525,
    borderRadius: 25,
    position: "relative",
  },
  selectedItem: {
    top: 103,
    left: 134,
    width: 156,
    height: 134,
  },
  selectedInner: {
    top: 57,
    borderRadius: 25,
    height: 122,
    width: 298,
    backgroundColor: '#ededed',
    left: 66,
    position: "relative",
  },
  message: {
    top: 108, // adjust the top position
    left: 111, // adjust the left position
    color: '#000',
    width: 187,
    height: 49,
  },
  rectangleView: {
    top: 466,
  },
  bid: {
    top: 238, // adjust the top position
    left: 121, // adjust the left position
    color: '#fff',
    width: 187,
    height: 49,
  },
  selectedChild1: {
    top: 370,
  },
  name: {
    top: 318, // adjust the top position
    left: 131, // adjust the left position
    color: '#9B9292',
    width: 187,
    height: 49,
  },
  selectedChild2: {
    top: 722,
    left: 118,
    backgroundColor: '#FF9800',
    width: 177,
    height: 61,
  },
  send: {
    top: 398, // adjust the top position
    left: 141, // adjust the left position
    color: '#fff',
    width: 187,
    height: 49,
  },
  selected: {
    backgroundColor: '#86D7D1',
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Selected;
