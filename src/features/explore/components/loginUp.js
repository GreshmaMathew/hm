import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Login} from '../../../styles/Login';

class loginUp extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Login.container1}>
        <View style={Login.container2}>
          <Image
            source={require('../../../assets/images/icon_1.png')}
            style={Login.icon1}
          />
          <Text style={Login.textstyle1}>Login</Text>
        </View>
        <View style={Login.container3}>
          <TextInput style={Login.textinput1} placeholder="Email" />
          <TextInput
            style={Login.textinput2}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity onPress={() => navigate('FORGOTPWD')}>
            <View style={Login.container6}>
              <View style={Login.container11}>
                <Text style={Login.textstyle2}>Forgot your password?</Text>
              </View>
              <View style={Login.container12}>
                <Image
                  source={require('../../../assets/images/arrow_icon.png')}
                  style={Login.arrow}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={Login.container4}>
            <View style={Login.container13}>
              <TouchableOpacity onPress={() => navigate('VSEARCH')}>
                <View style={Login.container7}>
                  <Text style={Login.textstyle6}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={Login.container5}>
          <Text style={Login.textstyle7}>Or sign up with social account</Text>
          <View style={Login.container14}>
            <View style={Login.container8}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/images/google_icon.png')}
                  style={Login.googleicon}
                />
              </TouchableOpacity>
            </View>
            <View style={Login.container9}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/images/fb_icon.png')}
                  style={Login.fbicon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Login.container10} />
      </View>
    );
  }
}

export default loginUp;