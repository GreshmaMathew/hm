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
import {Crop} from '../../../styles/Crop';
class cropPhoto extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Crop.container1}>
        <View style={Crop.container2}>
          <View style={Crop.container5}>
            <Image
              source={require('../../../assets/images/icon_1.png')}
              style={Crop.icon1}
            />
          </View>
          <View style={Crop.container6}>
            <Text style={Crop.textstyle1}>Crop the item</Text>
          </View>
          <View style={Crop.container11} />
        </View>
        <View style={Crop.container3}>
          <ImageBackground
            source={require('../../../assets/images/fadedimage.png')}
            style={{
              flex: 1,
            }}
            resizeMode="stretch"
          />
        </View>
        <View style={Crop.container4}>
          <TouchableOpacity onPress={() => navigate('RESULTSEARCH')}>
            <View
              style={{
                height: 52,
                width: 52,
                backgroundColor: '#DB3022',
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('../../../assets/images/search.png')} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={Crop.container10} />
      </View>
    );
  }
}
export default cropPhoto;
