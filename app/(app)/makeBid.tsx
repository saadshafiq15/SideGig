import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const Bid = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [count, setCount] = React.useState(0); // Initialize count state

  // Function to increment the count
  const incrementCount = () => {
    setCount(currentCount => currentCount + 1);
  };

  // Function to decrement the count
  const decrementCount = () => {
    setCount(currentCount => currentCount - 1);
  };

  return (
    <View style={styles.bid}>
      <Pressable
        style={styles.image4}
        onPress={() => navigation.navigate("Nav")}
      >
        <Image
          //style={styles.icon}
          resizeMode="cover"
        //source={require("../assets/hamburger.png")}
        />
      </Pressable>
      <Image
        //style={styles.image5Icon}
        resizeMode="cover"
      //source={require("../assets/search.png")}
      />
      <View style={styles.bidChild} />
      <Text style={styles.nameOfJob}>Name of Job</Text>
      <Image
        style={[styles.bidItem, styles.bidLayout1]}
        resizeMode="cover"
        source={require("../../assets/images/searchPeople.png")}
      />
      <Text style={styles.postMadeBy}>Post made by: </Text>
      <Text style={styles.name}>Bob</Text>
      <Text style={styles.description}>Description: Long description text...</Text>
      <Text style={[styles.clientBudget, styles.dateOfJobTypo]}>
        Client Budget: $0.00
      </Text>
      <Text style={[styles.numberOfBids, styles.dateOfJobTypo]}>
        Number of Bids:
      </Text>
      <Text style={[styles.dateOfJob, styles.dateOfJobTypo]}>Date of Job: </Text>
      <View style={[styles.bidChild2, styles.bidChild2Position]} />
      <Pressable onPress={decrementCount} style={styles.image7Icon}>
        <Image
          resizeMode="cover"
          source={require("../../assets/images/minus.png")}
        />
      </Pressable>
      <Pressable onPress={incrementCount} style={styles.image8Icon}>
        <Image
          resizeMode="cover"
          source={require("../../assets/images/plus.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>{count.toFixed(1)}</Text>
      <View style={[styles.bidChild3, styles.bidLayout1]} />
      <Text style={[styles.bid1, styles.textTypo]}>Bid</Text>
    </View>
  );
};

const styles = StyleSheet.create({


  bidLayout1: {
    borderRadius: 81, // Assuming Border.br_81xl translates to 81
    position: "absolute",
  },
  bidLayout: {
    height: 66,
    width: 298,
    left: 70,
    backgroundColor: "#DFEFEE", // Replacing Color.colorGray with its assumed hex value
    borderRadius: 61, // Assuming Border.br_61xl translates to 61
    position: "relative",
  },
  dateOfJobTypo: {
    textAlign: "left",
    color: "#696969", // Replacing Color.colorDimgray_200 with its assumed hex value
    left: 97,
    height: 24,
    width: 244,
    fontSize: 16, // Assuming FontSize.size_xl translates to 16
    fontFamily: 'Nunito-Bold',
    fontWeight: "700",
    position: "absolute",
  },
  bidChild2Position: {
    top: '65%',
    position: "relative",
    width: '34%',
    height: '8%',
    left: '34%',
  },
  textTypo: {
    width: 141,
    fontSize: 24, // Assuming FontSize.size_6xl translates to 24
    height: 49,
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
    height: 35,
    position: "relative",
  },
  image5Icon: {
    top: -20,
    left: 320,
    width: 50,
    height: 40,
    position: "relative",
  },
  bidChild: {
    top: '15%',
    left: "10%",
    shadowColor: "rgba(0, 0, 0, 0.45)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 100,
    elevation: 100,
    shadowOpacity: 2,
    backgroundColor: "#AFD7D4", // Replacing Color.colorGainsboro_100 with its assumed hex value
    borderStyle: "solid",
    borderColor: "#F5F5F5", // Replacing Color.colorWhitesmoke with its assumed hex value
    borderWidth: 1,
    width: '80%',
    height: '80%',
    borderRadius: 61,
    position: "absolute",
  },
  nameOfJob: {
    top: '8%',
    left: '5%',
    fontSize: 30, // Assuming FontSize.size_16xl translates to 45
    width: 338,
    height: 49,
    textAlign: "center",
    fontFamily: 'Nunito-Bold',
    fontWeight: "700",
    color: "#FF8C00", // Replacing Color.colorDarkorange_100 with its assumed hex value
    position: "absolute",
  },
  bidItem: {
    top: '15%',
    left: '33%',
    width: '35%',
    height: '17%',
  },

  name: {
    top: '35%',
    left: '7%',
    color: "#000000", // Replacing Color.colorBlack with black
    width: '90%',
    fontSize: 24, // Assuming FontSize.size_6xl translates to 24
    height: 49,
    textAlign: "center",
    fontFamily: 'Nunito-Bold',
    fontWeight: "700",
    position: "absolute",
  },

  postMadeBy: {
    top: '31%',
    left: '7%',
    color: "#000000", // Replacing Color.colorBlack with black
    width: '90%',
    fontSize: 24, // Assuming FontSize.size_6xl translates to 24
    height: 49,
    textAlign: "center",
    fontFamily: 'Nunito-Bold',
    fontWeight: "700",
    position: "absolute",
  },
  description: {
    top: '42%',
    left: '17%',
    color: "#696969", // Replacing Color.colorDimgray_100 with its assumed hex value
    height: 200,
    width: 250,
    fontSize: 16, // Assuming FontSize.size_xl translates to 16
    textAlign: "center",
    fontFamily: 'Nunito-Bold',
    fontWeight: "700",
    position: "absolute",
    flexWrap: 'wrap',
    flex: 1,
  },

  bidInner: {
    top: '45%',
    left: '2%',
  },
  clientBudget: {
    top: '60%',
    color: "#FF8C00",
  },
  rectangleView: {
    top: 542,
  },
  numberOfBids: {
    top: '65%',
  },
  bidChild1: {
    top: 633,
  },
  dateOfJob: {
    top: '70%',
    color: '#FF8C00',
  },
  bidChild2: {
    left: 154,
    width: 129,
    backgroundColor: "#DFEFEE", // Replacing Color.colorGray
    top: '80%',
    height: '50%',
    borderRadius: 61,
  },
  image7Icon: {
    top: '48.8%',  // Adjust this as needed for proper alignment
    left: '50%',    // Adjust this as needed
    width: 10,     // New width for the icon
    height: 10,    // New height for the icon
    alignItems: 'center',  // Center the icon in the touchable area
    justifyContent: 'center',  // Center vertically
    position: "relative",
  },
  image8Icon: {
    top: '48.8%',  // Adjust this to match the desired position
    left: '20%',   // Adjust this to position next to the decrement icon
    width: 10,     // New width for the icon
    alignItems: 'center',  // Center the icon in the touchable area
    justifyContent: 'center',  // Center vertically
    position: "relative",
  },

  text: {
    top: '77%',
    left: '33%',
    color: "#FF8C00", // Replacing Color.colorDarkorange_100 with its assumed hex value
    width: 141,
  },
  bidChild3: {
    top: '85%',
    left: '29%',
    backgroundColor: "#DFB155", // Replacing Color.colorDarkorange_200 with its assumed hex value
    width: 177,
    height: 51,
  },
  bid1: {
    top: '86.5%',
    left: '34%',
    color: "#FFFFFF", // Replacing Color.colorWhite with white
  },
  bid: {
    backgroundColor: "#AFEEEE", // Replacing Color.colorPaleturquoise with its assumed hex value
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Bid;