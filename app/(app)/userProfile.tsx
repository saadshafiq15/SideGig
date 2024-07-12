import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  return (
    <View style={styles.profile}>
      <Pressable
        style={styles.image4}
        onPress={() => router.navigate("Nav")}
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
      <Text style={styles.myProfile}>My Profile</Text>
      <View style={styles.profileChild} />
      <Image
        style={styles.profileItem}
        resizeMode="cover"
        //source={require("../assets/rectangle-121.png")}
      />
      <View style={styles.profileInner} />
      <Text style={[styles.text, styles.aboutMe]}>About Me:</Text>
      <View style={styles.profileChild1} />
      <Text style={[styles.text, styles.email]}>Email:</Text>
      <View style={styles.profileChild2} />
      <Text style={[styles.text, styles.name]}>Name:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#9B9292',
    fontSize: 25,
    textAlign: "center",
    fontFamily: 'Nunito-Bold',
    fontWeight: "700",
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
  myProfile: {
    top: 10,
    left: 93,
    fontSize: 35,
    color: '#FF9800',
    width: 220,
    height: 40,
    textAlign: "center",
    fontFamily: 'Nunito-Bold',
    fontWeight: "bold",
    position: "relative",
  },
  profileChild: {
    top: 35,
    left: 45,
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
    borderColor: '#eded',
    borderWidth: 0.5,
    width: 305,
    height: 555,
    borderRadius: 55,
    position: "relative",
  },
  profileItem: {
    top: 203,
    left: 134,
    borderRadius: 25,
    width: 156,
    height: 134,
    position: "relative",
  },
  profileInner: {
    top: 643,
    borderRadius: 25,
    height: 200,
    width: 298,
    backgroundColor: '#DFEFEE',
    left: 66,
    position: "relative",
  },
  aboutMe: {
    top: 380,
    left: 50,
    width: 120,
    fontSize:20,
  },
  profileChild1: {
    top: 426,
    left: 66,
    width: 298,
    height: 66,
    backgroundColor: '#DFEFEE',
    position: "relative",
  },
  email: {
    top: 282,
    left: 50,
    width: 80,
    fontSize:20,
  },
  profileChild2: {
    top: 618,
    left: 66,
    width: 298,
    height: 66,
    backgroundColor: '#DFEFEE',
    position: "relative",
  },
  name: {
    top: 205,
    left: 51,
    width: 80,
    fontSize:20,
  },
  profile: {
    backgroundColor: '#86D7D1',
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
