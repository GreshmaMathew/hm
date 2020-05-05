import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';

import {Brand} from '../../../styles/Brand';
class brandList extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Brand.container1}>
        <View style={Brand.container2}>
          <View style={Brand.container3}>
            <Image
              source={require('../../../assets/images/icon_1.png')}
              style={Brand.icon1}
            />
          </View>
          <View style={Brand.container4}>
            <Text style={Brand.textstyle1}>Brand</Text>
          </View>
          <View style={Brand.container5} />
        </View>

        <View style={Brand.container6}>
          <View style={Brand.container7}>
            <Image
              source={require('../../../assets/images/searchi.png')}
              style={Brand.ImageStyle}
            />
            <TextInput
              style={{flex: 1}}
              placeholder="Search"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Brand.container8}>
            <Text>HIII</Text>
          </View>
          <View style={Brand.container16}>
            <View style={Brand.container17}>
              <TouchableOpacity>
                <View style={Brand.container19}>
                  <Text style={Brand.textstyle3}>Discard</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Brand.container18}>
              <TouchableOpacity>
                <View style={Brand.container20}>
                  <Text style={Brand.textstyle4}>Apply</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default brandList;
