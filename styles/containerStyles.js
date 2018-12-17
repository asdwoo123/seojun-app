import { StyleSheet } from 'react-native';

const containerStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: '#6E6E6E',
        shadowOffset: { height: 1, width: 2 },
        margin: 10
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black'
    },
    container3: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        borderWidth: 1,
        borderColor: 'black'
    },
    container4: {
        alignItems: 'center'
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    buttonContainer: {
        backgroundColor: "rgba(92, 99,216, 1)",
        width: 170,
        height: 25,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    }
});

export default containerStyles;