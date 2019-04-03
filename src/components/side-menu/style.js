import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerRoute: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderTopWidth: 0.5,
        borderColor: "#ccc",
        flexDirection: 'row',
        alignItems: 'center'
    },
    drawerRouteText: {
        fontFamily: 'sf-semi-bold',
        //   fontSize: 15,
        letterSpacing: 0.8,
        marginLeft: 10,
    },
})

export default styles;