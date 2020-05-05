import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Forgot} from '../../../styles/Forgot';
class forgotPwd extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Forgot.container1}>
        <View style={Forgot.container2}>
          <Image
            source={require('../../../assets/images/icon_1.png')}
            style={Forgot.icon1}
          />
          <Text style={Forgot.textstyle1}>Forgot password</Text>
        </View>
        <View style={Forgot.container3}>
          <Text style={Forgot.textstyle2}>
            Please, enter your email address. You will receive a link to create
            a new password via email
          </Text>
          <TextInput style={Forgot.textinput2} placeholder="Email" />
        </View>
        <View style={Forgot.container4}>
          <TouchableOpacity>
            <View style={Forgot.container6}>
              <Text style={Forgot.textstyle6}>SEND</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Forgot.container8} />
      </View>
    );
  }
}
export default forgotPwd;
