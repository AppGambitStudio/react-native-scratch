import React from 'react'
import { connect } from 'react-redux';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Header, Left, Body, Button, Title, Right, Text } from 'native-base'
import Icon from 'react-native-vector-icons/Entypo';
import { DrawerActions } from 'react-navigation'
import NetInfo from './check-network';

class AppHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { openDrawer } = this.props.navigation;
        return (
            <SafeAreaView>
                <Header style={styles.appHeader}>
                    <Left>
                        <TouchableOpacity onPress={() => { openDrawer() }}>
                            <Icon name="menu" style={{ padding: 10 }} size={30} color="white" />
                        </TouchableOpacity>
                    </Left>
                    {/* {this.props.backButton ? (
                        <Left>
                            <TouchableOpacity onPress={() => { this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}>
                                <Icon name="menu" style={{ padding: 10 }} size={30} color="white" />
                            </TouchableOpacity>
                        </Left>
                    ) : (
                            <View style={styles.leftIcon}>
                                {this.props.leftIcon}
                            </View>
                        )} */}
                    <Body >
                        {/* <Image source={Images.applogo} resizeMode='contain' style={{ width: 250, height: 100 }} /> */}
                    </Body>
                    {/* <Right>
                        <View style={ApplicationStyles.appVersion}>
                            <Text style={[ApplicationStyles.colorWhite, { fontSize: 12 }]}>v{appVersion}</Text>
                        </View>
                    </Right> */}
                </Header>
                <NetInfo />
            </SafeAreaView>
        )
    }
}

AppHeader.defaultProps = {
    leftIcon: null,
    backButton: false
}


const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)

const styles = StyleSheet.create({
    appHeader: {
        // alignSelf: 'center',
        backgroundColor: '#E0647B'
    },
    leftIcon: {
        width: 50,
        paddingHorizontal: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: -18,
        marginTop: -15
    },
})