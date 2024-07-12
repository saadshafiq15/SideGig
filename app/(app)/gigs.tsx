import React from 'react';
import { View, ScrollView, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/routers';
import GigBox from "@/components/GigBox"
import { db } from "@/firebaseConfig"
import { DocumentData, collection, getDocs } from "firebase/firestore"
import { useFonts } from 'expo-font';

const MyGigs = () => {
	const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
	const [gigsData, setGigsData] = useState<any>([]);

	const [fontsLoaded] = useFonts({
		'Cookie': require('../../assets/fonts/Cookie-Regular.ttf'),
		'Nunito': require('../../assets/fonts/Nunito-VariableFont_wght.ttf')
	});

	useEffect(() => {
		const fetchGigsData = async () => {
			try {
				const gigsCollection = collection(db, "gigs");
				const querySnapshot = await getDocs(gigsCollection);
				const fetchedGigs: DocumentData[] = [];
				querySnapshot.forEach((doc) => {
					fetchedGigs.push(doc.data()); // Assuming your data structure in Firestore is an array of objects
				});
				setGigsData(fetchedGigs);

				console.log(fetchedGigs)
			} catch (error) {
				console.error("Error fetching gigs:", error);
			}
		};

		fetchGigsData();
	}, []);


	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}
			showsVerticalScrollIndicator={false}  // This hides the vertical scrollbar
			showsHorizontalScrollIndicator={false}  // This hides the horizontal scrollbar
		>
			<View style={styles.maincon}>

				<Text style={styles.gigs}>Gigs</Text>

				<View style={styles.gigbox}>

					{gigsData.map((gig) => (
						// <Text>{gig["Location"]}</Text>
						<GigBox Location={gig["Location"]} Title={gig["Title"]} />
					))}

				</View>




			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		flexGrow: 1,
		justifyContent: 'center', // Center content horizontally
		alignItems: 'center', // Center content vertically
		flexDirection: 'column'
	},
	gigs: {
		fontSize: 35,
		color: 'black',
		fontFamily: 'Cookie',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	maincon: {
		display: "flex",
		alignItems: 'center',
		backgroundColor: "#85D7D1",
		height: "100%",
		width: "100%"

	},
	gigbox: {
		height: "auto",
		backgroundColor: '#AFD7D4',
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.45)",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowRadius: 20,
		shadowOpacity: 0.5,
	}
});

export default MyGigs;