import React, {Component} from 'react';
import { View , Dimensions, Text, StyleSheet } from 'react-native';
import containerStyles from '../styles/containerStyles';
import PageOneLayout1 from '../components/PageOneLayout1';
import PageOneLayout2 from '../components/PageOneLayout2';
import PageOneLayout3 from '../components/PageOneLayout3';
import { socketDataLoad } from '../redux/socketReducer';
import { connect } from 'react-redux';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';

const FirstRoute = (props) => (
    <View style={containerStyles.container}>
        <PageOneLayout1 {...props} />
        <PageOneLayout2 {...props} />
        <PageOneLayout3 {...props} />
    </View>
);

const FirstRouteComponent = connect(
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
)(FirstRoute);

const SecondRoute = () => (
    <View style={[containerStyles.container, { justifyContent: 'center', alignItems: 'center' }]}><Text>장비수치 2</Text></View>
);
const ThirdRoute = () => (
    <View style={[containerStyles.container,  { justifyContent: 'center', alignItems: 'center' }]}><Text>장비제어</Text></View>
)


class PageOne extends Component {
    static navigationOptions = {
        title: '장비이름',
    };

    state = {
        index: 0,
        routes: [
            { key: 'first', title: '장비수치' },
            { key: 'second', title: '장비수치2' },
            { key: 'third', title: '장비제어' },
        ],
    };

    _renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            tabStyle={styles.tab}
            labelStyle={styles.label}
        />
    );

    componentDidMount() {
        socketDataLoad();
    }

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRouteComponent,
                    second: SecondRoute,
                    third: ThirdRoute
                })}
                renderTabBar={this._renderTabBar}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width, height: 0 }}
            />
        );
    }
}

export default PageOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabbar: {
        backgroundColor: '#3f51b5',
    },
    tab: {
        flex: 1
    },
    indicator: {
        backgroundColor: '#ffeb3b',
    },
    label: {
        color: '#fff',
        fontWeight: '400',
    },
});





