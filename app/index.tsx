import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router'
import { auth } from "@/firebaseConfig"
import { useFonts } from 'expo-font';
import { db } from "@/firebaseConfig"

export default function Page() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [fontsLoaded] = useFonts({
		'Cookie': require('../assets/fonts/Cookie-Regular.ttf'),
		'Nunito': require('../assets/fonts/Nunito-VariableFont_wght.ttf')
	});


	const onLoginPress = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				console.log("Connected to Firebase");

				// Navigate to the "loggedIn" route after successful login
				router.replace("/gigs"); // Assuming 'loggedIn' is the name of your route
			})
			.catch((error) => {
				const errorcode = error.code;
				const errorMessage = error.message;
			});
	};

	return (
		<View >
			{/* Views are Containers*/}
			<View>
				<Text style={styles.sideGigs}>Side Gigs</Text>
			</View>

			<View style={styles.loginBlock}>
				<Text style={styles.loginText}>Login</Text>

				<TextInput style={[styles.nameTypo]} placeholder='Email Address' placeholderTextColor="#DFEFEE"
					onChangeText={(text) => setEmail(text)} value={email} underlineColorAndroid="transparent"
					autoCapitalize="none" />
				<TextInput style={styles.nameTypo} placeholder='Password' placeholderTextColor="#DFEFEE"
					onChangeText={(text) => setPassword(text)} secureTextEntry value={password}
					underlineColorAndroid="transparent" autoCapitalize="none" />

				<View style={styles.loginContainer}>
					<TouchableOpacity onPress={() => onLoginPress()}>
						<Text style={styles.loginButton}>Login</Text>
					</TouchableOpacity>
				</View>
				<Link style={styles.noAccount} href="/signup">Don't have an account?</Link>
			</View>
		</View >
	)
}

const styles = StyleSheet.create({
	sideGigs: {
		fontSize: 50,
		fontFamily: 'Cookie',
		textAlign: "center",
		color: "#000000",
	},
	nameTypo: {
		color: '#6C6363',
		fontSize: 15,
		fontFamily: 'Nunito',
		backgroundColor: "#FFFFFF",
		borderRadius: 15,
		margin: 5,
		padding: 5
	},
	loginBlock: {
		backgroundColor: '#AFD7D4',
		borderRadius: 40,
		padding: 25,
		margin: 10
	},
	loginButton: {
		backgroundColor: '#FF9800',
		width: '50%',
		borderRadius: 40,
		color: 'white',
		fontFamily: 'Nunito',
		padding: 5,
		margin: 10,
		textAlign: 'center'
	},
	noAccount: {
		color: '#6C6363',
		fontSize: 15,
		fontFamily: 'Nunito',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	loginText: {
		color: '#000000',
		fontSize: 20,
		fontFamily: 'Nunito',
		fontWeight: 'bold',
	},
	loginContainer: {
		display: 'flex',
		alignItems: 'center',
	}
});