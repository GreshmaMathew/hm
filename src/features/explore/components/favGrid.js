import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Grid} from '../../../styles/Grid';
import Search from '../../../components/Search';
import Grid1 from './../../../components/Grid';
import Grid2 from '../../../components/gridDiscount';

class favGrid extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Grid.container1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Grid.container2}>
            <View style={Grid.container4} />
            <View style={Grid.container3}>
              <Text style={Grid.textstyle1}>Favorites</Text>
            </View>
            <View style={Grid.container5}>
              <Image
                source={require('../../../assets/images/vector_4.png')}
                style={Grid.imagestyle}
              />
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Search dress={'Summer'} />
            <Search dress={'T-shirts'} />
            <Search dress={'Shirts'} />
            <Search dress={'Pants'} />
            <Search dress={'Casuals'} />
            <Search dress={'Summer'} />
          </ScrollView>
          <View style={Grid.container9}>
            <View style={Grid.container10}>
              <View style={Grid.container11}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/images/filter.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={Grid.textstyle2}>Filters</Text>
                </TouchableOpacity>
              </View>
              <View style={Grid.container12}>
                <TouchableOpacity>
                  <Image source={require('../../../assets/images/sort.png')} />
                </TouchableOpacity>
                <Text style={Grid.textstyle2}>Price: lowest to high</Text>
              </View>
              <View style={Grid.container13}>
                <View>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../assets/images/color.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <Grid1
            image1={require('../../../assets/images/fav_1.png')}
            text1={'LIME'}
            text2={'Shirt'}
            text3={'Color: '}
            text4={'blue'}
            text5={'Size:'}
            text6={'L'}
            text7={'32$'}
            rate1={'(10)'}
            star1={require('../../../assets/images/star.png')}
            star2={require('../../../assets/images/star.png')}
            star3={require('../../../assets/images/star.png')}
            star4={require('../../../assets/images/star.png')}
            star5={require('../../../assets/images/star.png')}
            image2={require('../../../assets/images/fav_2.png')}
            text8={'MANGO'}
            text9={'Longsleeve Violeta'}
            text10={'Color: '}
            text11={'red'}
            text12={'Size:'}
            text13={'S'}
            text14={'46$'}
            rate2={'(0)'}
            star6={require('../../../assets/images/graystar.png')}
            star7={require('../../../assets/images/graystar.png')}
            star8={require('../../../assets/images/graystar.png')}
            star9={require('../../../assets/images/graystar.png')}
            star10={require('../../../assets/images/graystar.png')}
          />
          <Grid2
            image1={require('../../../assets/images/fav_3.png')}
            text1={'Olive'}
            text2={'Shirt'}
            text3={'Color: '}
            text4={'black'}
            text5={'Size:'}
            text6={'L'}
            text7={'32$'}
            rate1={'(10)'}
            star1={require('../../../assets/images/star.png')}
            star2={require('../../../assets/images/star.png')}
            star3={require('../../../assets/images/star.png')}
            star4={require('../../../assets/images/star.png')}
            star5={require('../../../assets/images/star.png')}
            image2={require('../../../assets/images/fav_4.png')}
            text8={'MANGO'}
            text9={'Longsleeve Violeta'}
            text10={'Color: '}
            text11={'red'}
            text12={'Size:'}
            text13={'S'}
            text14={'46$'}
            rate2={'(0)'}
            star6={require('../../../assets/images/graystar.png')}
            star7={require('../../../assets/images/graystar.png')}
            star8={require('../../../assets/images/graystar.png')}
            star9={require('../../../assets/images/graystar.png')}
            star10={require('../../../assets/images/graystar.png')}
          />
        </ScrollView>
      </View>
    );
  }
}
export default favGrid;
