import { useNetInfo } from 'react-native-hooks';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

function NetInfo(){
    const netInfo = useNetInfo()
    console.log('netInfo type: ', netInfo.type)
    return (
        <View style={{ borderColor: netInfo.type != 'none' ? 'green' : 'red', borderWidth: 1.5 }} />
        // <View>
        //     <Text>{JSON.stringify(netInfo)}</Text>
        // </View>
    )
}

export default NetInfo


