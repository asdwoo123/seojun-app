import React from 'react';
import containerStyles from '../styles/containerStyles';
import { View } from 'react-native';
import SignalLight from './sub_components/SignalLight';
import DataTitle from "./sub_components/DataTitle";
import DataContent from "./sub_components/DataContent";
import { Card } from 'react-native-elements';

const PageOneLayout2 = (props) => (
        <View style={[containerStyles.container2, {flex: 4.5}]}>
        <Card containerStyle={[containerStyles.container3]}>
            <DataTitle>시그널 라이트</DataTitle>
            <SignalLight {...props} number={1} />
            <SignalLight {...props} number={2} />
            <SignalLight {...props} number={3} />
            <SignalLight {...props} number={4} />
            <SignalLight {...props} number={5} />
            <SignalLight {...props} number={6} />
            <SignalLight {...props} number={7} />
        </Card>
            <Card containerStyle={{flex: 0.4}}>
                <DataContent item="가동 시간" value={0} />
            </Card>
        </View>
);


export default PageOneLayout2;