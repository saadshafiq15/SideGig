import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Nav = () => {
  return (
    <View style={styles.nav}>
      <View style={styles.navChild} />
      <Text style={[styles.profile, styles.gigsTypo]}>Profile</Text>
      <Text style={[styles.createGig, styles.myGigsTypo]}>Create Gig</Text>
      <Text style={[styles.myBids, styles.gigsTypo]}>My Bids</Text>
      <Text style={[styles.gigs, styles.gigsTypo]}>Gigs</Text>
      <Text style={[styles.myGigs, styles.myGigsTypo]}>My Gigs</Text>
      <Image
        style={styles.pngtreeVectorIllustrationOfIcon}
        resizeMode="cover"
       // source={require("../assets/images/navBar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gigsTypo: {
    height: 49,
    textAlign: "center",
    color: '#FFFFFF',
    fontFamily: 'Nunito',
    fontWeight: "bold",
    fontSize: 25,
    position: "relative",
  },
  myGigsTypo: {
    left: 48,
    height: 49,
    width: 141,
    textAlign: "center",
    color: '#FFFFFF',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 25,
    position: "relative",
  },
  navChild: {
    top: 132,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 145,
    height: 151,
    left: 44,
    position: "relative",
  },
  profile: {
    top: 336,
    left: 46,
    width: 141,
    height: 49,
    textAlign: "center",
    color: '#fff',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 25,
  },
  createGig: {
    top: 431,
  },
  myBids: {
    top: 543,
    width: 159,
    height: 49,
    textAlign: "center",
    color: '#fff',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 25,
    left: 44,
  },
  gigs: {
    top: 385,
    width: 141,
    height: 49,
    textAlign: "center",
    color: '#fff',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 25,
    left: 44,
  },
  myGigs: {
    top: 487,
  },
  pngtreeVectorIllustrationOfIcon: {
    top: 695,
    left: 3,
    width: 233,
    height: 247,
    position: "relative",
  },
  nav: {
    backgroundColor: '#FF9800',
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});


