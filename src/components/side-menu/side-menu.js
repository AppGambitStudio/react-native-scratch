import React, { Component } from 'react';
import { ScrollView, View, AsyncStorage, TouchableOpacity, Image, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import { NavigationActions, SafeAreaView, DrawerItems } from 'react-navigation';

class SideMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    navigateToScreen = (route) => {
        setTimeout(() => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
            this.props.navigation.closeDrawer();
        }, 400);
    }

    signOut = () => {
        this.props.setLogin(false);
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            // <Container style={ApplicationStyles.drawerContainer}>
            <View style={{ flex: 1 }}>
                {/* <DrawerItems {...this.props} /> */}
                {/* <View
                        style={ApplicationStyles.drawerIcon} >
                        <Image
                            square
                            style={{ height: 100, width: 100 }}
                            source={Images.logo}
                            resizeMode='contain'
                        />
                    </View> */}
                <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <ScrollView showsVerticalScrollIndicator={true}>
                        <TouchableOpacity style={styles.drawerRoute} onPress={() => this.navigateToScreen('Home')}>
                            <AntDesign name="home" size={25} />
                            <Text style={styles.drawerRouteText}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.drawerRoute} onPress={() => { this.signOut() }}>
                            <AntDesign name="logout" size={25} />
                            <Text style={styles.drawerRouteText}>Logout</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            </View>
            // </Container>
        )
    }
}

export default SideMenu;