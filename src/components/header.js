import React from 'react'
import { connect } from 'react-redux';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Header, Left, Body, Button, Title, Right, Text } from 'native-base'
import Icon from 'react-native-vector-icons/Entypo';
import { DrawerActions } from 'react-navigation'
import NetInfo from './check-network';
import { Colors, Images } from '@themes';

class AppHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { openDrawer } = this.props.navigation;
        return (
            <>
                <Header style={styles.appHeader}>
                    <Left>
                        <TouchableOpacity onPress={() => { openDrawer() }}>
                            <Icon name="menu" style={{ padding: 10 }} size={30} color="white" />
                        </TouchableOpacity>
                    </Left>
                    <Body >
                        <Image source={Images["header-logo"]} resizeMode='contain' style={{ width: 200, height: 50 }} />
                    </Body>
                </Header>
                <NetInfo/>
            </>
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
        backgroundColor: Colors.header
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