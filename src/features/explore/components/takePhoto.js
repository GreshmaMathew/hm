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
import {Takepic} from '../../../styles/Takepic';
class takePhoto extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Takepic.container1}>
        <View style={Takepic.container2}>
          <View style={Takepic.container5}>
            <Image
              source={require('../../../assets/images/icon_1.png')}
              style={Takepic.icon1}
            />
          </View>
          <View style={Takepic.container6}>
            <Text style={Takepic.textstyle1}>Search by taking a photo</Text>
          </View>
          <View style={Takepic.container11} />
        </View>
        <View style={Takepic.container3}>
          <ImageBackground
            source={require('../../../assets/images/camimage.png')}
            style={{
              flex: 1,
            }}
            resizeMode="stretch"
          />
        </View>
        <View style={Takepic.container4}>
          <View style={Takepic.container7}>
            <Image
              source={require('../../../assets/images/flash.png')}
              style={Takepic.flashstyle}
            />
          </View>
          <View style={Takepic.container8}>
            <TouchableOpacity onPress={() => navigate('CROPPHOTO')}>
              <View style={Takepic.container12}>
                <Image source={require('../../../assets/images/camera.png')} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={Takepic.container9}>
            <Image
              source={require('../../../assets/images/sync.png')}
              style={Takepic.syncstyle}
            />
          </View>
        </View>
        <View style={Takepic.container10} />
      </View>
    );
  }
}
export default takePhoto;
