import {StyleSheet, View, Text, Button, SafeAreaView, Alert,} from 'react-native'
import React from 'react'

const btn = () => (
    <SafeAreaView style={styles.container}>
    <View>
        <Button
            title=" "
            color="#F5B958"
            onPress={() => Alert.alert('Button with a adjusted color pressed')}
        />
    </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        marginHorizontal:16,
}
});