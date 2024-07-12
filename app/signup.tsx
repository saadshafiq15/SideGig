import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { db } from '@/firebaseConfig'
import { doc, setDoc } from "firebase/firestore"
import { useFonts } from 'expo-font';

const signup = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')

    const [fontsLoaded] = useFonts({
        'Cookie': require('../assets/fonts/Cookie-Regular.ttf'),
        'Nunito': require('../assets/fonts/Nunito-VariableFont_wght.ttf')
    });

    const registerAccount = () => {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Account created.")
                console.log(userCredential)

                // Create a new document and add to users collection
                setDoc(doc(db, "users", email), {
                    aboutMe: "",
                    dateOfBirth: "",
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    location: "",
                    phoneNumber: phoneNumber,
                    skills: ""
                })
            })
            .catch((error) => {
                console.log("An error occurred.")
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.signUp}>
                <View style={styles.signUpChild} />
                <View style={styles.signUpItem} />
                <TouchableOpacity onPress={() => registerAccount()}>
                    <Text style={styles.signUp1}>Sign Up</Text>
                </TouchableOpacity>
                <View style={[styles.signUpInner, styles.signChildLayout1]} />
                <TextInput placeholder='Date of Birth'
                    onChangeText={(text) => setDateOfBirth(text)} value={dateOfBirth} underlineColorAndroid="transparent"
                    autoCapitalize="none" style={[styles.dateOfBirth, styles.nameTypo]}></TextInput>
                <View style={[styles.rectangleView, styles.signChildLayout]} />
                <TextInput placeholder='Password'
                    onChangeText={(text) => setPassword(text)} value={password} underlineColorAndroid="transparent"
                    autoCapitalize="none" style={[styles.password, styles.nameTypo]}></TextInput>
                <Text style={[styles.signUp2, styles.signUp2Clr]}>Sign Up</Text>
                <View style={[styles.signUpChild1, styles.signChildLayout]} />
                <TextInput placeholder='Email Address'
                    onChangeText={(text) => setEmail(text)} value={email} underlineColorAndroid="transparent"
                    autoCapitalize="none" style={[styles.emailAddress, styles.nameTypo]}></TextInput>
                <View style={[styles.signUpChild2, styles.signChildLayout]} />
                <TextInput placeholder='First Name'
                    onChangeText={(text) => setFirstName(text)} value={firstName} underlineColorAndroid="transparent"
                    autoCapitalize="none" style={[styles.firstName, styles.nameTypo]}></TextInput>
                <View style={[styles.signUpChild3, styles.signChildLayout1]} />
                <TextInput placeholder='Last Name'
                    onChangeText={(text) => setLastName(text)} value={lastName} underlineColorAndroid="transparent"
                    autoCapitalize="none" style={[styles.lastName, styles.nameTypo]}></TextInput>
                <View style={[styles.signUpChild4, styles.signChildLayout1]} />
                <TextInput placeholder='Phone Number'
                    onChangeText={(text) => setPhoneNumber(text)} value={phoneNumber} underlineColorAndroid="transparent"
                    autoCapitalize="none" style={[styles.phoneNumber, styles.nameTypo]}></TextInput>
                <Text style={[styles.sideGigs, styles.signUp2Clr]}>Side Gigs</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    signChildLayout1: {
        height: 66,
        width: 298,
        backgroundColor: '#DFEFEE',
        left: 67,
        borderRadius: 40,
        position: "absolute",
    },
    nameTypo: {
        height: 24,
        width: 244,
        color: 'black',
        fontSize: 15,
        textAlign: "left",
        fontFamily: 'Nunito',
        position: "absolute",
    },
    signChildLayout: {
        left: 65,
        height: 66,
        width: 298,
        backgroundColor: '#DFEFEE',
        borderRadius: 40,
        position: "absolute",
    },
    signUp2Clr: {
        color: '#000000',
        position: "absolute",

    },
    signUpChild: {
        top: 110,
        left: 41,
        shadowColor: "rgba(0, 0, 0, 0.10)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 100,
        elevation: 100,
        shadowOpacity: 1,
        backgroundColor: '#FFFFFF',
        borderStyle: "solid",
        borderColor: '#FFFFFF',
        borderWidth: 1,
        width: 347,
        height: 805,
        borderRadius: 40,
        position: "absolute",
    },
    signUpItem: {
        top: 776,
        left: 123,
        borderRadius: 15,
        backgroundColor: '#F5B958',
        width: 177,
        height: 51,
        position: "absolute",
    },
    signUp1: {
        top: 785,
        left: 143,
        color: '#000000',
        width: 141,
        height: 49,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center",
        position: "absolute",
    },
    signUpInner: {
        top: 568,
    },
    dateOfBirth: {
        top: 589,
        left: 82,
        width: 244,
        color: '#DFEFEE',
        fontSize: 15,
    },
    rectangleView: {
        top: 661,
    },
    password: {
        top: 683,
        left: 82,
        width: 244,
        color: '#DFEFEE',
        fontSize: 15,
    },
    signUp2: {
        top: 150,
        left: 64,
        width: 117,
        textAlign: "left",
        color: '#000000',
        height: 49,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 20,
    },
    signUpChild1: {
        top: 208,
    },
    emailAddress: {
        top: 229,
        left: 80,
    },
    signUpChild2: {
        top: 298,
    },
    firstName: {
        top: 320,
        left: 82,
        width: 244,
        color: 'black',
        fontSize: 15,
    },
    signUpChild3: {
        top: 388,
    },
    lastName: {
        top: 409,
        left: 82,
        width: 244,
        color: '#DFEFEE',
        fontSize: 15,
    },
    signUpChild4: {
        top: 478,
    },
    phoneNumber: {
        top: 500,
        left: 84,
    },
    sideGigs: {
        top: 31,
        left: 133,
        fontSize: 50,
        fontFamily: 'Cookie',
        color: '#000000',
        textAlign: "center",
    },
    signUp: {
        backgroundColor: '#86D7D1',
        flex: 1,
        width: "100%",
        height: 932,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        flexDirection: 'column'
    },
});

export default signup;