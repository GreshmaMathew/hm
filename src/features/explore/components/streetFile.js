import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Sfile} from '../../../styles/Sfile';
import Category from '../../../components/Category';
const screenwidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;
class streetFile extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Sfile.container1}>
        <View style={Sfile.container2}>
          <ImageBackground
            source={require('../../../assets/images/image1.png')}
            style={Sfile.container2}
            resizeMode="stretch">
            <View style={Sfile.container4}>
              <Text style={Sfile.textstyle1}>New collection</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={Sfile.container3}>
          <View style={Sfile.container2}>
            <View style={Sfile.container5}>
              <TouchableOpacity onPress={() => navigate('COLLECTIONFILE')}>
                <Text style={Sfile.textstyle2}>Summer{'\n'}sale</Text>
              </TouchableOpacity>
            </View>
            <View style={Sfile.container6}>
              <ImageBackground
                source={require('../../../assets/images/image3.png')}
                style={Sfile.container2}
                resizeMode="stretch">
                <View style={Sfile.container4}>
                  <Text style={Sfile.textstyle3}>Black</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={Sfile.container2}>
            <ImageBackground
              source={require('../../../assets/images/image2.png')}
              style={Sfile.container2}
              resizeMode="stretch">
              <View style={Sfile.container5}>
                <Text style={Sfile.textstyle4}>Men's hoodies</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  }
}
export default streetFile;
