import React from 'react';
import { View, Text } from 'react-native';
import dataStyles from '../../styles/dataStyles';

const DataContent = (props) => (
    <View style={dataStyles.contentView}>
        <Text>{props.item}</Text>
        <Text>{props.value}</Text>
    </View>
);

export default DataContent;