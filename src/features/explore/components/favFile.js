import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Favorite} from '../../../styles/Favorite';
import {ScrollView} from 'react-native-gesture-handler';
import Search from '../../../components/Search';
import Fav from '../../../components/Fav';
import Favsale from '../../../components/Favsale';
import Favdis from '../../../components/Favdis';
class favFile extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Favorite.container1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Favorite.container2}>
            <Image source={require('../../../assets/images/vector_4.png')} />
          </View>
          <View style={Favorite.container3}>
            <Text style={Favorite.textstyle}>Favorites</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Search dress={'Summer'} />
            <Search dress={'T-shirts'} />
            <Search dress={'Shirts'} />
            <Search dress={'Pants'} />
            <Search dress={'Casuals'} />
            <Search dress={'Summer'} />
          </ScrollView>
          <View style={Favorite.container9}>
            <View style={Favorite.container10}>
              <View style={Favorite.container11}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/images/filter.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={Favorite.textstyle2}>Filters</Text>
                </TouchableOpacity>
              </View>
              <View style={Favorite.container12}>
                <TouchableOpacity>
                  <Image source={require('../../../assets/images/sort.png')} />
                </TouchableOpacity>
                <Text style={Favorite.textstyle2}>Price: lowest to high</Text>
              </View>
              <View style={Favorite.container13}>
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
          <Fav
            imageurl={require('../../../assets/images/fav_1.png')}
            text1={'LIME'}
            text2={'Shirt'}
            text3={'Color:'}
            text4={'blue'}
            text5={'Size:'}
            text6={'L'}
            text7={'32$'}
            text8={'(10)'}
            star1={require('../../../assets/images/star.png')}
            star2={require('../../../assets/images/star.png')}
            star3={require('../../../assets/images/star.png')}
            star4={require('../../../assets/images/star.png')}
            star5={require('../../../assets/images/star.png')}
          />
          <Favsale
            imageurl={require('../../../assets/images/fav_2.png')}
            text1={'MANGO'}
            text2={'Longsleeve Violeta'}
            text3={'Color:'}
            text4={'red'}
            text5={'Size:'}
            text6={'S'}
            text7={'46$'}
            text8={'(0)'}
            star1={require('../../../assets/images/graystar.png')}
            star2={require('../../../assets/images/graystar.png')}
            star3={require('../../../assets/images/graystar.png')}
            star4={require('../../../assets/images/graystar.png')}
            star5={require('../../../assets/images/graystar.png')}
          />
          <Fav
            imageurl={require('../../../assets/images/fav_3.png')}
            text1={'Oliver'}
            text2={'Shirt'}
            text3={'Color:'}
            text4={'Gray'}
            text5={'Size:'}
            text6={'L'}
            text7={'52$'}
            text8={'(9)'}
            star1={require('../../../assets/images/star.png')}
            star2={require('../../../assets/images/star.png')}
            star3={require('../../../assets/images/star.png')}
            star4={require('../../../assets/images/star.png')}
            star5={require('../../../assets/images/graystar.png')}
          />
          <Favdis
            imageurl={require('../../../assets/images/fav_4.png')}
            text1={'&Berries'}
            text2={'T-Shirt'}
            text3={'Color:'}
            text4={'Black'}
            text5={'Size:'}
            text6={'S'}
            text7={'22$'}
            text8={'(9)'}
            star1={require('../../../assets/images/star.png')}
            star2={require('../../../assets/images/star.png')}
            star3={require('../../../assets/images/star.png')}
            star4={require('../../../assets/images/star.png')}
            star5={require('../../../assets/images/graystar.png')}
            dis={'-10%'}
          />
        </ScrollView>
      </View>
    );
  }
}
export default favFile;
