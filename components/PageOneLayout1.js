import React from 'react';
import containerStyles from '../styles/containerStyles';
import { Text, View } from 'react-native';
import dataStyles from '../styles/dataStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PageOneLayout1 = (props) => (
        <View style={containerStyles.container2}>
        <View style={[containerStyles.container3, { flex: 2, flexDirection: 'row' }]}>
                <View style={containerStyles.container4}>
                        <Icon name="alarm-light" style={{color: (props.TurkSignalLight_GREEN) ? '#01DF74' : '#585858'}} size={50} />
                        <Text style={dataStyles.contentText}>GREEN</Text>
                </View>
                <View style={containerStyles.container4}>
                        <Icon name="alarm-light" style={{color: (props.TurkSignalLight_RED) ? '#FF4000' : '#585858'}} size={50} />
                        <Text style={dataStyles.contentText}>RED</Text>
                </View>
        </View>
        <View style={containerStyles.container3}>
            <Text>가동시간</Text>
            <Text>123</Text>
        </View>
        </View>
);

export default PageOneLayout1;


