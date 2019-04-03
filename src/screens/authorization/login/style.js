import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    loginText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'ProximaNova-Bold',
    }
});

export default styles;