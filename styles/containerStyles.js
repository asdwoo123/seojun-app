import { StyleSheet } from 'react-native';

const containerStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'rgb(246, 247, 249)'
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container3: {
        flex: 0.6,
        alignItems: 'stretch'
    },
    container4: {
        flexDirection: 'row',
        marginTop: 5
    }
});

export default containerStyles;
