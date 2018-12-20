import React from 'react';
import {Text, View} from "react-native";
import dataStyles from "../../styles/dataStyles";

const DataTitle = (props) => (
    <View style={dataStyles.titleView}>
        <Text style={dataStyles.title}>
            {props.children}
        </Text>
    </View>
);

export default DataTitle;