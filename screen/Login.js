import React from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



class Login extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {


        const {navigate}=this.props.navigation;
        return (
            <View style={{ height: hp(100), width: wp(100) }}>

                <Text style={{ height: hp(12), width: wp(80), marginTop: hp(12), fontSize: 56, marginLeft: wp(27) }}>Welcome</Text>

                <Text style={{ height: hp(7), width: wp(80), marginTop: hp(2), fontSize: 20, marginLeft: wp(4) }}>Username:</Text>

                <TextInput
                    placeholder="Enter Email"
                    style={{ width: wp(80), marginLeft: wp(4) }}></TextInput>

                <Text style={{ height: hp(7), width: wp(80), marginTop: hp(2), fontSize: 20, marginLeft: wp(4) }}>Password:</Text>

                <TextInput
                    placeholder="Enter Password"
                    style={{ width: wp(80), marginLeft: wp(4) }}></TextInput>

                <TouchableOpacity>
                <Text style={{ height: hp(12), width: wp(80), marginTop: hp(4), marginLeft: wp(40), fontSize: 20, }}>Submit</Text>
                </TouchableOpacity>

                <View  style={{  flexDirection:'row' ,height:hp(50),width:wp(90)}}>
                <TouchableOpacity
                 onPress={()=>navigate('Register')}>
                <Text style={{ height: hp(12), width: wp(50), fontSize: 20, marginLeft:wp(7)}}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text  style={{ height: hp(12), width: wp(50),  marginLeft:wp(24), fontSize: 20 }}>Forgot</Text>
                </TouchableOpacity>
                </View>

                
            </View>
        );
    }
}


export default Login;