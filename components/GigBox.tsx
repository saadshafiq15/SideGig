import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const GigBox = ({ Location, Title }) => {
	return (
		<>
			<View style={styles.container}>
				<View>
					<Text style={styles.gigTitle}>{Title}</Text>
					<Text style={styles.gigLocation}>{Location}</Text>
				</View>
				<TouchableOpacity>
					<Text style={styles.moreButton}>More</Text>
					<Link href="/makeBid"></Link>
				</TouchableOpacity>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 5,
		borderRadius: 20,
		paddingBottom: 20,
		paddingTop: 20,
		paddingLeft: 80,
		paddingRight: 80,
		backgroundColor: "#E5EBDC"
	},
	moreButton: {
		backgroundColor: '#FF9800',
		padding: 5,
		borderRadius: 20,
		textAlign: 'center',
		color: 'white'
	},
	gigTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 5
	},
	gigLocation: {
		marginBottom: 5
	}
})

export default GigBox;