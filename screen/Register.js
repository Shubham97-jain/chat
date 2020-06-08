import React from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'user.db' });



class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        };

    }

    register_user = () => {
        var that = this;
        const {  name } = this.state;
        const {  email } = this.state;
        const { password } = this.state;
        const {  phone  }=this.state;
        //alert(user_name, user_contact, user_address);
        if ( name ) 
        {
          if (email) 
          {
              
            if (password)
             {
                if(phone)
                {
                    db.transaction(function(tx) {
                        tx.executeSql(
                          'INSERT INTO user (name, email, password, phone) VALUES (?,?,?,?)',
                          [name,email,password,phone],
                          (tx, results) => {
                            console.log('Results', results.rowsAffected);
                            if (results.rowsAffected > 0) {
                              Alert.alert(
                                'Success',
                                'You are Registered Successfully',
                                [
                                  {
                                    text: 'Ok',
                                    onPress: () =>
                                          console.log('press')
                                  },
                                ],
                                { cancelable: false }
                              );
                            } else {
                              alert('Registration Failed');
                            }
                          }
                        );
                      });

                
           
            }
            else{
                alert('plese fill phone nmber')
            }
        }
        else{
            alert('Please fill  password'); 
        }
    }
    else{
        alert('Plese fill email')
    }
}
    else{

        alert('Plese fill name')
    }


        
      };

    render() {


        const { navigate } = this.props.navigation;
        return (
            <View style={{ height: hp(100), width: wp(100) }}>


                <Text style={{ height: hp(3), width: wp(80), marginTop: hp(19), fontSize: 20, marginLeft: wp(4) }}>Name:</Text>

                <TextInput
                    placeholder="Enter Name"
                    onChangeText={name => this.setState({ name })}
                    style={{ width: wp(80), marginLeft: wp(4) }}></TextInput>

                <Text style={{ height: hp(3), width: wp(80), marginTop: hp(2), fontSize: 20, marginLeft: wp(4) }}>Email:</Text>

                <TextInput
                    placeholder="Enter Email"
                    onChangeText={email => this.setState({ email })}
                    style={{ width: wp(80), marginLeft: wp(4) }}></TextInput>

                    <Text style={{ height: hp(3), width: wp(80), fontSize: 20, marginLeft: wp(4),marginTop:hp(2) }}>Password:</Text>

                <TextInput
                    placeholder="Enter Password"
                    onChangeText={password => this.setState({ password })}
                    style={{ width: wp(80), marginLeft: wp(4) }}></TextInput>

                <Text style={{ height: hp(3), width: wp(80), marginTop: hp(4), fontSize: 20, marginLeft: wp(4) }}>Phone:</Text>

                <TextInput
                    placeholder="Enter Phone"
                    onChangeText={phone => this.setState({ phone })}
                    style={{ height: hp(7), width: wp(80), marginLeft: wp(4) }}></TextInput>

                <TouchableOpacity
                   
                   onPress={this. register_user}
                  >
                    <Text style={{ height: hp(12), width: wp(80), marginTop: hp(4), marginLeft: wp(40), fontSize: 20, }}>Submit</Text>
                </TouchableOpacity>




            </View>
        );
    }
}


export default Register;