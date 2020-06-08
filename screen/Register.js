import React from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



class Register extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {


        const { navigate } = this.props.navigation;
        return (
            <View style={{ height: hp(100), width: wp(100) }}>


                <Text style={{ height: hp(3), width: wp(80), marginTop: hp(19), fontSize: 20, marginLeft: wp(4) }}>Name:</Text>

                <TextInput
                    placeholder="Enter Name"
                    style={{ width: wp(80), marginLeft: wp(4) }}></TextInput>

                <Text style={{ height: hp(3), width: wp(80), marginTop: hp(2), fontSize: 20, marginLeft: wp(4) }}>Email:</Text>

                <TextInput
                    placeholder="Enter Email"
                    style={{ width: wp(80), marginLeft: wp(4) }}></TextInput>

                    <Text style={{ height: hp(3), width: wp(80), fontSize: 20, marginLeft: wp(4),marginTop:hp(2) }}>Password:</Text>

                <TextInput
                    placeholder="Enter Password"
                    style={{ width: wp(80), marginLeft: wp(4) }}></TextInput>

                <Text style={{ height: hp(3), width: wp(80), marginTop: hp(4), fontSize: 20, marginLeft: wp(4) }}>Phone:</Text>

                <TextInput
                    placeholder="Enter Phone"
                    style={{ height: hp(7), width: wp(80), marginLeft: wp(4) }}></TextInput>

                <TouchableOpacity
                   onPress={()=>navigate('Login')}>
                    <Text style={{ height: hp(12), width: wp(80), marginTop: hp(4), marginLeft: wp(40), fontSize: 20, }}>Submit</Text>
                </TouchableOpacity>




            </View>
        );
    }
}


export default Register;