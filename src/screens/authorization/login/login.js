import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        console.log('Sign in')
    }

    login() {
        this.props.setLogin(true);
        this.props.navigation.navigate('Home');
    }

    render() {
        const { loading } = this.state;
        return (
            <View style={styles.container}>
                <Text>Sign in</Text>
                <Button title={"Login"}
                    titleStyle={styles.loginText}
                    loading={loading}
                    buttonStyle={{ backgroundColor: 'transparent' }}
                    containerStyle={{ backgroundColor: 'transparent' }}
                    onPress={() => this.login()}>
                </Button>
            </View>
        )
    }
}

export default Login;