import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Container, Root } from 'native-base'
import styles from './style';
import AppHeader from '../../../components/header';
import { useGeolocation } from 'react-native-hooks'

function Geolocation() {

    const [position, stopObserving, setRNConfiguration] = useGeolocation()

    console.log('latitude: ', position)

    return null;
}

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        // console.log(netInfo())
    }

    logout = () => {
        console.log("logout")
        this.props.setLogin(false);
        this.props.navigation.navigate('AuthLoading');
    }

    render() {
        let { loading } = this.state;
        return (
            <Container style={{ flex: 1 }} >
                <Root>
                    <AppHeader navigation={this.props.navigation} />
                    <View style={styles.container}>
                        <Text>Home</Text>
                        <Button title={"Logout"}
                            titleStyle={styles.loginText}
                            buttonStyle={{ backgroundColor: 'transparent' }}
                            containerStyle={{ backgroundColor: 'transparent' }}
                            onPress={() => this.logout()}>
                        </Button>
                    </View>
                    <Geolocation />
                </Root>
            </Container>
        )
    }
}

export default Home;