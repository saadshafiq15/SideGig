import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const CreateGig = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.creategig}>
      <Pressable
        style={styles.image4}
        onPress={() => navigation.navigate("Nav")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          //source={require("../assets/image-4.png")}
        />
      </Pressable>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        //source={require("../assets/image-6.png")}
      />
      <Text style={[styles.createGig, styles.textLayout]}>Create Gig</Text>
      <View style={styles.creategigChild} />
      <View style={styles.creategigItem} />
      <View style={[styles.creategigInner, styles.creategigLayout]} />
      <Text style={[styles.dateOfJob, styles.dateOfJobTypo]}>Date of Job</Text>
      <View style={[styles.rectangleView, styles.creategigLayout]} />
      <Text style={[styles.location, styles.budgetTypo]}>Location</Text>
      <Text style={[styles.budget, styles.budgetTypo]}>Budget</Text>
      <View style={[styles.creategigChild1, styles.creategigLayout]} />
      <Text style={[styles.description, styles.budgetTypo]}>Description</Text>
      <Text style={[styles.nameOfGig, styles.dateOfJobTypo]}>Name of Gig</Text>
      <View style={styles.creategigChild2} />
      <Text style={[styles.postGig, styles.textTypo]}>Post Gig</Text>
      <View style={[styles.creategigChild3, styles.image8IconPosition]} />
      <Image
        style={styles.image7Icon}
        resizeMode="cover"
        //source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image8Icon, styles.image8IconPosition]}
        resizeMode="cover"
        //source={require("../assets/image-8.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>00.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    textLayout: {
      height: 49,
      color: "#FF8C00", // Replacing Color.colorDarkorange_100 with its hex value
    },
    creategigLayout: {
      height: 66,
      width: 298,
      backgroundColor: "#808080", // Replacing Color.colorGray with its hex value
      borderRadius: 61, // Assuming Border.br_61xl translates to 61
      position: "absolute",
    },
    dateOfJobTypo: {
      color: "#696969", // Replacing Color.colorDimgray_200 with its hex value
      fontSize: 16, // Assuming FontSize.size_xl translates to 16
      textAlign: "center",
      fontFamily: 'Nunito-Bold',
      fontWeight: "700",
      position: "absolute",
    },
    budgetTypo: {
      left: 153,
      color: "#696969", // Replacing Color.colorDimgray_200 with its hex value
      fontSize: 16, // Assuming FontSize.size_xl translates to 16
      textAlign: "center",
      fontFamily: 'Nunito-Bold',
      fontWeight: "700",
      position: "absolute",
    },
    textTypo: {
      width: 141,
      fontSize: 24, // Assuming FontSize.size_6xl translates to 24
      textAlign: "center",
      fontFamily: 'Nunito-Bold',
      fontWeight: "700",
      position: "absolute",
    },
    image8IconPosition: {
      top: 712,
      position: "absolute",
    },
    icon: {
      height: "100%",
      width: "100%",
    },
    image4: {
      left: 0,
      top: 12,
      width: 89,
      height: 50,
      position: "absolute",
    },
    image5Icon: {
      top: 0,
      left: 354,
      width: 98,
      height: 83,
      position: "absolute",
    },
    createGig: {
      top: 76,
      left: 93,
      fontSize: 24, // Assuming FontSize.size_16xl translates to 24
      width: 238,
      textAlign: "center",
      fontFamily: 'Nunito-Bold',
      fontWeight: "700",
      height: 49,
      color: "#FF8C00", // Replacing Color.colorDarkorange_100 with its hex value
      position: "absolute",
    },
    creategigChild: {
      top: 161,
      left: 45,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 100,
      elevation: 100,
      shadowOpacity: 1,
      backgroundColor: "#DCDCDC", // Replacing Color.colorGainsboro_100 with its hex value
      borderStyle: "solid",
      borderColor: "#F5F5F5", // Replacing Color.colorWhitesmoke with its hex value
      borderWidth: 1,
      width: 347,
      height: 749,
      borderRadius: 61, // Assuming Border.br_61xl translates to 61
      position: "absolute",
    },
    creategigItem: {
      top: 291,
      left: 67,
      borderRadius: 26, // Assuming Border.br_26xl translates to 26
      height: 168,
      width: 298,
      backgroundColor: "#808080", // Replacing Color.colorGray with its hex value
      position: "absolute",
    },
    creategigInner: {
      top: 580,
      left: 63,
    },
    dateOfJob: {
      top: 599,
      left: 156,
      width: 111,
    },
    rectangleView: {
      top: 489,
      left: 60,
    },
    location: {
      top: 508,
      width: 111,
    },
    budget: {
      top: 665,
      width: 111,
    },
    creategigChild1: {
      top: 204,
      left: 70,
    },
    description: {
      top: 314,
      width: 125,
    },
    nameOfGig: {
      top: 223,
      width: 143,
      left: 144,
    },
    creategigChild2: {
      top: 804,
      left: 125,
      borderRadius: 81, // Assuming Border.br_81xl translates to 81
      backgroundColor: "#FFA500", // Replacing Color.colorDarkorange_200 with its hex value
      width: 177,
      height: 61,
      position: "absolute",
    },
    postGig: {
      top: 816,
      left: 143,
      color: "#FFFFFF", // Replacing Color.colorWhite with its hex value
      height: 33,
    },
    creategigChild3: {
      left: 150,
      width: 129,
      backgroundColor: "#808080", // Replacing Color.colorGray with its hex value
      top: 712,
      borderRadius: 61, // Assuming Border.br_61xl translates to 61
      height: 49,
    },
    image7Icon: {
      top: 717,
      left: 99,
      width: 45,
      height: 44,
      position: "absolute",
    },
    image8Icon: {
      left: 286,
      width: 44,
      height: 52,
    },
    text: {
      top: 724,
      left: 144,
      height: 49,
      color: "#FF8C00", // Replacing Color.colorDarkorange_100 with its hex value
      fontSize: 24, // Assuming FontSize.size_6xl translates to 24
    },
    creategig: {
      backgroundColor: "#AFEEEE", // Replacing Color.colorPaleturquoise with its hex value
      flex: 1,
      height: 932,
      overflow: "hidden",
      width: "100%",
    },
  });  

export default CreateGig;