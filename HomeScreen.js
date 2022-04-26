import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { Header } from "react-native-elements";
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <Header
                backgroundColor="#326fa8"
                centerComponent={{
                    text: "Solution App",
                    style: {color: "#a89932", fontSize: 35}
                }}/>                
            </View>
        )
    }
}