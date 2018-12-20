import React, {Component} from 'react';
import containerStyles from '../styles/containerStyles';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import DataContent from "./sub_components/DataContent";

class PageOneLayout3 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card containerStyle={[{ flex: 2.5, marginBottom: 10 }]}>
                <DataContent item="전체 수량" value={this.props.C_Total}/>
                <DataContent item="합격" value={this.props.uliPC_Schift_OK}/>
                <DataContent item="불합격" value={this.props.uliPC_Schift_NOK}/>
            </Card>
        );
    }
}

export default PageOneLayout3;

