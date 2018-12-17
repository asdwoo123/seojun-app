import React from 'react';
import containerStyles from '../styles/containerStyles';
import dataStyles from '../styles/dataStyles';
import { Text, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SignalLight = (props) => (
    <View style={containerStyles.container4}>
        <Icon name="alarm-light" style={{color: (props.BalluffSignalLightB + props.number) ? '#FF4000' : '#585858'}} size={50} />
        <Text style={dataStyles.contentText}>B{props.number}</Text>
    </View>
);

export default SignalLight;


