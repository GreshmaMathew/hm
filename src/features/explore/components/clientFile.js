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
import Modal from 'react-native-modal';
import {Client} from '../../../styles/Client';
import Sale from '../../../components/Sale';

class clientFile extends Component {
  state = {
    isModalVisible1: false,
  };

  toggleModal1 = () => {
    this.setState({isModalVisible1: !this.state.isModalVisible1});
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Client.container1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Client.container2}>
            <View style={Client.container3}>
              <Image
                source={require('../../../assets/images/icon_1.png')}
                style={Client.icon1}
              />
            </View>
            <View style={Client.container4}>
              <Text style={Client.textstyle1}>Short dress</Text>
            </View>
            <View style={Client.container5}>
              <Image
                source={require('../../../assets/images/share.png')}
                style={Client.share}
              />
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={Client.imagestyle}>
              <ImageBackground
                source={require('../../../assets/images/image5.png')}
                style={Client.image}
                resizeMode="stretch"
              />
            </View>
            <View style={Client.imagestyle}>
              <ImageBackground
                source={require('../../../assets/images/image3.png')}
                style={Client.image}
                resizeMode="stretch"
              />
            </View>
          </ScrollView>
          <View style={Client.container6}>
            <View style={Client.container7}>
              <View style={Client.container10}>
                <View style={Client.image}>
                  <Text style={Client.textstyle2}>Size</Text>
                </View>
                <View style={Client.down}>
                  <TouchableOpacity onPress={this.toggleModal1}>
                    <Image
                      source={require('../../../assets/images/down.png')}
                    />
                    <Modal
                      isVisible={this.state.isModalVisible1}
                      style={{
                        margin: 0,
                        justifyContent: 'flex-end',
                      }}>
                      <View
                        style={{
                          height: '50%',
                          backgroundColor: '#E5E5E5',
                        }}>
                        <Text onPress={this.toggleModal1}>Select size</Text>
                      </View>
                    </Modal>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={Client.container8}>
              <View style={Client.container10}>
                <View style={Client.image}>
                  <Text style={Client.textstyle2}>Black</Text>
                </View>
                <View style={Client.down}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../assets/images/down.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={Client.container9}>
              <TouchableOpacity>
                <View style={Client.heart}>
                  <Image
                    source={require('../../../assets/images/heart1.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Client.container11}>
            <View style={Client.container12}>
              <Text style={Client.textstyle3}>H&M</Text>
              <Text style={Client.textstyle4}>Short black dress</Text>
              <View style={Client.starview}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Client.starstyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Client.starstyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Client.starstyle}
                />
                <Image
                  source={require('../../../assets/images/graystar.png')}
                  style={Client.starstyle}
                />
                <Image
                  source={require('../../../assets/images/graystar.png')}
                  style={{marginVertical: 3}}
                />
                <TouchableOpacity onPress={() => navigate('RATEFILE')}>
                  <Text style={Client.textstyle5}>(9)</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Client.container13}>
              <Text style={Client.textstyle6}>$14.78</Text>
            </View>
          </View>
          <View style={Client.container14}>
            <Text style={Client.textstyle7}>
              Short dress in soft cotton jersey with decorative buttons down the
              front and a wide, frill-trimmed square neckline with concealed
              elastication. Elasticated seam under the bust and short puff
              sleeves with a small frill trim.
            </Text>
          </View>
          <TouchableOpacity>
            <View style={Client.container15}>
              <View style={Client.container16}>
                <Text style={Client.textstyle8}>Shipping info</Text>
              </View>
              <View style={Client.container17}>
                <Image
                  source={require('../../../assets/images/vector_2.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Client.container18}>
              <View style={Client.container19}>
                <Text style={Client.textstyle9}>Support</Text>
              </View>
              <View style={Client.container20}>
                <Image
                  source={require('../../../assets/images/vector_2.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={Client.container21}>
            <View style={Client.container22}>
              <Text style={Client.textstyle10}>You can also like this</Text>
            </View>
            <View style={Client.container23}>
              <Text style={Client.textstyle11}>12 items</Text>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Sale
              imageuri={require('../../../assets/images/shop_8.png')}
              text1="-15%"
              text2="Sitlly"
              text3="Sport Dress"
              text4="22$"
              text5="19$"
              heart={require('../../../assets/images/heart1.png')}
              star1={require('../../../assets/images/star.png')}
              star2={require('../../../assets/images/star.png')}
              star3={require('../../../assets/images/graystar.png')}
              star4={require('../../../assets/images/graystar.png')}
              star5={require('../../../assets/images/graystar.png')}
              rate="(6)"
            />
            <Sale
              imageuri={require('../../../assets/images/shop_12.png')}
              text1="-5%"
              text2="T-shirt"
              text3="Casual"
              text4="18$"
              text5="12$"
              heart={require('../../../assets/images/heart2.png')}
              star1={require('../../../assets/images/star.png')}
              star2={require('../../../assets/images/star.png')}
              star3={require('../../../assets/images/star.png')}
              star4={require('../../../assets/images/star.png')}
              star5={require('../../../assets/images/graystar.png')}
              rate="(10)"
            />
            <Sale
              imageuri={require('../../../assets/images/shop_1.png')}
              text1="-15%"
              text2="Sitlly"
              text3="Sport Dress"
              text4="22$"
              text5="19$"
              heart={require('../../../assets/images/heart1.png')}
              star1={require('../../../assets/images/star.png')}
              star2={require('../../../assets/images/star.png')}
              star3={require('../../../assets/images/star.png')}
              star4={require('../../../assets/images/star.png')}
              star5={require('../../../assets/images/star.png')}
              rate="(10)"
            />
            <Sale
              imageuri={require('../../../assets/images/shop_2.png')}
              text1="-5%"
              text2="T-shirt"
              text3="Casual"
              text4="18$"
              text5="12$"
              heart={require('../../../assets/images/heart2.png')}
              star1={require('../../../assets/images/star.png')}
              star2={require('../../../assets/images/star.png')}
              star3={require('../../../assets/images/star.png')}
              star4={require('../../../assets/images/star.png')}
              star5={require('../../../assets/images/graystar.png')}
              rate="(10)"
            />
          </ScrollView>

          <View style={{height: 100}} />
        </ScrollView>
        <View style={Client.container24}>
          <TouchableOpacity>
            <View style={Client.container25}>
              <Text style={Client.textstyle12}>ADD TO CART</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default clientFile;
