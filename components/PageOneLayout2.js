import React from 'react';
import containerStyles from '../styles/containerStyles';
import { View } from 'react-native';
import SignalLight from './SignalLight';

const PageOneLayout2 = (props) => (
        <View style={[containerStyles.container2, {flex: 2}]}>
        <View style={[containerStyles.container3, {flexWrap: 'wrap', flexDirection: 'row'}]}>
            <SignalLight {...props} number={1} />
            <SignalLight {...props} number={2} />
            <SignalLight {...props} number={3} />
            <SignalLight {...props} number={4} />
            <SignalLight {...props} number={5} />
            <SignalLight {...props} number={6} />
            <SignalLight {...props} number={7} />
        </View>
        </View>
);


export default PageOneLayout2;