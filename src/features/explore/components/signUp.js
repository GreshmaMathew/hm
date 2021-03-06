import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {Sign} from '../../../styles/Sign';
class signUp extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior={'height'} style={Sign.container1}>
        <View style={Sign.container2}>
          <Image
            source={require('../../../assets/images/icon_1.png')}
            style={Sign.icon1}
          />
          <Text style={Sign.textstyle1}>Sign up</Text>
        </View>
        <View style={Sign.container17}>
          <View style={Sign.container11}>
            <TextInput style={Sign.textinput1} placeholder="Name" />
            <TextInput style={Sign.textinput2} placeholder="Email" />
            <TextInput
              style={Sign.textinput3}
              placeholder="Password"
              secureTextEntry
            />

            <TouchableOpacity onPress={() => navigate('LOGINUP')}>
              <View style={Sign.container3}>
                <Text style={Sign.textstyle2}>Already have an account?</Text>
                <Image
                  source={require('../../../assets/images/arrow_icon.png')}
                  style={Sign.arrow}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Sign.container15}>
          <TouchableOpacity>
            <View style={Sign.container5}>
              <Text style={Sign.textstyle6}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Sign.container14}>
          <Text style={Sign.textstyle7}>Or sign up with social account</Text>
          <View style={Sign.container16}>
            <View style={Sign.container6}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/images/google_icon.png')}
                  style={Sign.googleicon}
                />
              </TouchableOpacity>
            </View>
            <View style={Sign.container7}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/images/fb_icon.png')}
                  style={Sign.fbicon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Sign.container8} />
      </KeyboardAvoidingView>
    );
  }
}
export default signUp;
