import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

class Auth extends Component {

    constructor(props) {
        super(props)
        this.state = { loading: false, swiperIndex: 0 }
    }

    componentDidMount() {
        // Check which page to go login/home
        this.setState({ loading: true });
        console.log(this.props.auth.isLoggedIn)
        if(this.props.auth.isLoggedIn){
            this.props.navigation.navigate('Home');
            this.setState({ loading: false });
        }else{
            this.setState({ loading: false });
            this.props.navigation.navigate('Login');
        }
    }

    render() {
        console.log("Auth")
        if (this.state.loading) {
            return (
                <LinearGradient
                    start={{ x: 0.3, y: 0.5 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#E0647B', '#FCDD89']}
                    style={[styles.container, { justifyContent: 'center' }]}
                >
                    <ActivityIndicator size="large" color="#FCDD89" />
                </LinearGradient>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#FCDD89" />
                    <Text>Auth</Text>
                </View>
            )
        }
    }
}

export default Auth