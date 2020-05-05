import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Women} from '../../../styles/Women';
import {ScrollView} from 'react-native-gesture-handler';
import Search from '../../../components/Search';
import Card from '../../../components/Card';

class womenFile extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Women.container1}>
        <View style={Women.container2}>
          <View style={Women.container3}>
            <Image
              source={require('../../../assets/images/icon_1.png')}
              style={Women.icon1}
            />
          </View>
          <View style={Women.container4} />
          <View style={Women.container5}>
            <Image
              source={require('../../../assets/images/search1.png')}
              style={Women.search}
            />
          </View>
        </View>
        <View style={Women.container6}>
          <Text style={Women.textstyle}>Women's tops</Text>
        </View>
        <View style={Women.container7}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Search dress="T-shirts" />
            <Search dress="Crop tops" />
            <Search dress="Sleeveless" />
            <Search dress="Shirts" />
            <Search dress="Casuals" />
          </ScrollView>
        </View>
        <View style={Women.container9}>
          <View style={Women.container10}>
            <View style={Women.container11}>
              <Image source={require('../../../assets/images/filter.png')} />
              <Text style={Women.textstyle2}>Filters</Text>
            </View>
            <View style={Women.container12}>
              <Image source={require('../../../assets/images/sort.png')} />
              <Text style={Women.textstyle2}>Price: lowest to high</Text>
            </View>
            <View style={Women.container13}>
              <View>
                <TouchableOpacity onPress={() => navigate('WOMENTOPS')}>
                  <Image source={require('../../../assets/images/color.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card
            coverpic={require('../../../assets/images/shop_10.png')}
            text1={'Pullover'}
            text2={'Mago'}
            text3={'(10)'}
            text4={'15$'}
            heart1={require('../../../assets/images/heart1.png')}
            star1={require('../../../assets/images/star.png')}
            star2={require('../../../assets/images/star.png')}
            star3={require('../../../assets/images/star.png')}
            star4={require('../../../assets/images/star.png')}
            star5={require('../../../assets/images/graystar.png')}
          />

          <Card
            coverpic={require('../../../assets/images/shop_11.png')}
            text1={'Blouse'}
            text2={'Dorothyperkins'}
            text3={'(0)'}
            text4={'28$'}
            heart1={require('../../../assets/images/heart1.png')}
            star1={require('../../../assets/images/graystar.png')}
            star2={require('../../../assets/images/graystar.png')}
            star3={require('../../../assets/images/graystar.png')}
            star4={require('../../../assets/images/graystar.png')}
            star5={require('../../../assets/images/graystar.png')}
          />
          <Card
            coverpic={require('../../../assets/images/shop_12.png')}
            text1={'T-shirt'}
            text2={'LOST Ink'}
            text3={'(8)'}
            text4={'12$'}
            heart1={require('../../../assets/images/heart2.png')}
            star1={require('../../../assets/images/star.png')}
            star2={require('../../../assets/images/star.png')}
            star3={require('../../../assets/images/star.png')}
            star4={require('../../../assets/images/graystar.png')}
            star5={require('../../../assets/images/graystar.png')}
          />
          <Card
            coverpic={require('../../../assets/images/shop_13.png')}
            text1={'Shirt'}
            text2={'Topshop'}
            text3={'(9)'}
            text4={'20$'}
            heart1={require('../../../assets/images/heart1.png')}
            star1={require('../../../assets/images/star.png')}
            star2={require('../../../assets/images/star.png')}
            star3={require('../../../assets/images/star.png')}
            star4={require('../../../assets/images/star.png')}
            star5={require('../../../assets/images/graystar.png')}
          />
          <Card
            coverpic={require('../../../assets/images/shop_11.png')}
            text1={'Blouse'}
            text2={'Dorothyperkins'}
            text3={'(10)'}
            text4={'28$'}
            heart1={require('../../../assets/images/heart2.png')}
            star1={require('../../../assets/images/star.png')}
            star2={require('../../../assets/images/star.png')}
            star3={require('../../../assets/images/star.png')}
            star4={require('../../../assets/images/star.png')}
            star5={require('../../../assets/images/star.png')}
          />
        </ScrollView>
      </View>
    );
  }
}
export default womenFile;
