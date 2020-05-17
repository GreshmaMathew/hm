import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {Vsearch} from '../../../styles/Vsearch';
class visualSearch extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Vsearch.container1}>
        <View style={Vsearch.container2}>
          <View style={Vsearch.container3}>
            <Image
              source={require('../../../assets/images/icon_1.png')}
              style={Vsearch.icon1}
            />
          </View>
          <View style={Vsearch.container4}>
            <Text style={Vsearch.textstyle1}>Visual Search</Text>
          </View>
          <View style={Vsearch.container13} />
        </View>
        <View style={Vsearch.container5}>
          <ImageBackground
            source={require('../../../assets/images/image.png')}
            style={Vsearch.imagestyle}
            resizeMode="stretch">
            <View style={Vsearch.container12}>
              <Text style={Vsearch.textstyle2}>
                Search for an outfit by {'\n'}taking a photo or uploading an
                image
              </Text>
              <View>
                <TouchableOpacity onPress={() => navigate('TAKEPHOTO')}>
                  <View style={Vsearch.container7}>
                    <Text style={Vsearch.textstyle6}>TAKE A PHOTO</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={Vsearch.container8}>
                    <Text style={Vsearch.textstyle7}>UPLOAD AN IMAGE</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Vsearch.container11} />
          </ImageBackground>
        </View>
      </View>
    );
  }
}
export default visualSearch;
