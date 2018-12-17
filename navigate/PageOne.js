import React, {Component} from 'react';
import { View } from 'react-native';
import containerStyles from '../styles/containerStyles';
import PageOneLayout1 from '../components/PageOneLayout1';
import PageOneLayout2 from '../components/PageOneLayout2';
import PageOneLayout3 from '../components/PageOneLayout3';
import { socketDataLoad } from '../redux/socketReducer';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';

class PageOne extends Component {
    componentDidMount() {
        socketDataLoad();
    }

    render() {
        return (
                <View style={containerStyles.container}>
                <PageOneLayout1 {...this.props} />
                <PageOneLayout2 {...this.props} />
                <PageOneLayout3 {...this.props} />
                </View>
        );
    }
}

export default connect(
    (state) => ({
        TurkSignalLight_GREEN: state.opc.TurkSignalLight_GREEN,
        TurkSignalLight_RED: state.opc.TurkSignalLight_RED,
        BalluffSignalLightB1: state.opc.BalluffSignalLightB1,
        BalluffSignalLightB2: state.opc.BalluffSignalLightB2,
        BalluffSignalLightB3: state.opc.BalluffSignalLightB3,
        BalluffSignalLightB4: state.opc.BalluffSignalLightB4,
        BalluffSignalLightB5: state.opc.BalluffSignalLightB5,
        BalluffSignalLightB6: state.opc.BalluffSignalLightB6,
        BalluffSignalLightB7: state.opc.BalluffSignalLightB7,
        C_Total: state.opc.C_Total,
        uliPC_Schift_OK: state.opc.uliPC_Schift_OK,
        uliPC_Schift_NOK: state.opc.uliPC_Schift_NOK
    })
)(PageOne);


