import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Bag} from '../../../styles/Bag';
class bagFile extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Bag.container1}>
        <View style={Bag.container2}>
          <Image source={require('../../../assets/images/vector_4.png')} />
        </View>
        <View style={Bag.container3}>
          <Text style={Bag.textstyle}>My Bag</Text>
        </View>
        <View style={Bag.container4}>
          <View style={Bag.container5}>
            <ImageBackground
              source={require('../../../assets/images/shop_12.png')}
              style={{
                flex: 1,
              }}
              resizeMode="stretch"
            />
          </View>
          <View style={Bag.container6}>
            <View style={Bag.container7}>
              <View style={Bag.container9}>
                <View style={Bag.container11}>
                  <Text>Pullover</Text>
                </View>
                <View style={Bag.container12}>
                  <View style={Bag.container12}>
                    <Text>Color:</Text>
                    <Text>blue</Text>
                  </View>
                  <View style={Bag.container12}>
                    <Text>Size:</Text>
                    <Text>L</Text>
                  </View>
                </View>
              </View>
              <View style={Bag.container10}>
                <Text>hiii</Text>
              </View>
            </View>
            <View style={Bag.container8}>
              <View style={Bag.container13}>
                <View style={Bag.container15} />
                <Text>1</Text>
                <View style={Bag.container15} />
              </View>
              <View style={Bag.container14}>
                <Text>hiii</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default bagFile;
