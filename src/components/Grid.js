import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Grid} from '../styles/Grid';

class Grid1 extends Component {
  render() {
    return (
      <View style={Grid.container15}>
        <View style={Grid.container16}>
          <View style={Grid.container18}>
            <View style={Grid.container23}>
              <ImageBackground
                source={this.props.image1}
                style={{
                  flex: 1,
                  borderRadius: 8,
                }}
                resizeMode="stretch">
                <TouchableOpacity>
                  <View style={Grid.container21}>
                    <Image source={require('../assets/images/bag_4.png')} />
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View style={Grid.container22}>
              <Image source={this.props.star1} style={Grid.imagestyle} />
              <Image source={this.props.star2} style={Grid.imagestyle} />
              <Image source={this.props.star3} style={Grid.imagestyle} />
              <Image source={this.props.star4} style={Grid.imagestyle} />
              <Image source={this.props.star5} style={Grid.imagestyle} />
              <Text style={Grid.textstyle3}>{this.props.rate1}</Text>
            </View>
          </View>
          <View style={Grid.container19}>
            <View style={Grid.container20}>
              <Text style={Grid.textstyle4}>{this.props.text1}</Text>
            </View>
            <View style={Grid.container20}>
              <Text style={Grid.textstyle5}>{this.props.text2}</Text>
            </View>
            <View style={Grid.container20}>
              <View style={Grid.container25}>
                <Text style={Grid.textstyle4}>{this.props.text3}</Text>
                <Text style={Grid.textstyle7}>{this.props.text4}</Text>
              </View>
              <View style={Grid.container26}>
                <Text style={Grid.textstyle4}>{this.props.text5}</Text>
                <Text style={Grid.textstyle7}>{this.props.text6}</Text>
              </View>
            </View>
            <View style={Grid.container20}>
              <Text style={Grid.textstyle6}>{this.props.text7}</Text>
            </View>
          </View>
        </View>

        <View style={Grid.container17}>
          <View style={Grid.container18}>
            <View style={Grid.container23}>
              <ImageBackground
                source={this.props.image2}
                style={{
                  flex: 1,
                  borderRadius: 8,
                }}
                resizeMode="stretch">
                <View style={Grid.container28}>
                  <Text style={{color: 'white', textAlign: 'center'}}>NEW</Text>
                </View>
                <TouchableOpacity>
                  <View style={Grid.container27}>
                    <Image source={require('../assets/images/bag_4.png')} />
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View style={Grid.container22}>
              <Image source={this.props.star6} style={Grid.imagestyle} />
              <Image source={this.props.star7} style={Grid.imagestyle} />
              <Image source={this.props.star8} style={Grid.imagestyle} />
              <Image source={this.props.star9} style={Grid.imagestyle} />
              <Image source={this.props.star10} style={Grid.imagestyle} />
              <Text style={Grid.textstyle3}>{this.props.rate2}</Text>
            </View>
          </View>
          <View style={Grid.container19}>
            <View style={Grid.container20}>
              <Text style={Grid.textstyle4}>{this.props.text8}</Text>
            </View>
            <View style={Grid.container20}>
              <Text style={Grid.textstyle5}>{this.props.text9}</Text>
            </View>
            <View style={Grid.container20}>
              <View style={Grid.container25}>
                <Text style={Grid.textstyle4}>{this.props.text10}</Text>
                <Text style={Grid.textstyle7}>{this.props.text11}</Text>
              </View>
              <View style={Grid.container26}>
                <Text style={Grid.textstyle4}>{this.props.text12} </Text>
                <Text style={Grid.textstyle7}>{this.props.text13}</Text>
              </View>
            </View>
            <View style={Grid.container20}>
              <Text style={Grid.textstyle6}>{this.props.text14}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Grid1;
