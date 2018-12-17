import React, {Component} from 'react';
import containerStyles from '../styles/containerStyles';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class PageOneLayout3 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[containerStyles.container2]}>
                <View style={containerStyles.container3}>
                        <Text>{this.props.C_Total}</Text>
                        <Text>전체 수량</Text>
                </View>
                <View style={containerStyles.container3}>
                        <Text>{this.props.uliPC_Schift_OK}</Text>
                        <Text>합격</Text>
                </View>
                <View style={containerStyles.container3}>
                        <Text>{this.props.uliPC_Schift_NOK}</Text>
                        <Text>불합격</Text>
                </View>
            </View>
        );
    }
}

export default PageOneLayout3;
