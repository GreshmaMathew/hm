import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';
import {Tops} from '../../../styles/Tops';
import {ScrollView} from 'react-native-gesture-handler';
import Search from '../../../components/Search';
import Category1 from '../../../components/Category1';
import Category2 from '../../../components/Category2';

class womenTops extends Component {
  state = {
    isModalVisible1: false,
    isModalVisible2: false,
  };

  toggleModal1 = () => {
    this.setState({isModalVisible1: !this.state.isModalVisible1});
  };
  toggleModal2 = () => {
    this.setState({isModalVisible2: !this.state.isModalVisible2});
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Tops.container1}>
        <View style={Tops.container2}>
          <View style={Tops.container3}>
            <Image
              source={require('../../../assets/images/icon_1.png')}
              style={Tops.icon1}
            />
          </View>
          <View style={Tops.container4}>
            <Text style={Tops.textstyle1}>Women's tops</Text>
          </View>
          <View style={Tops.container5}>
            <Image
              source={require('../../../assets/images/search1.png')}
              style={Tops.search}
            />
          </View>
        </View>
        <View style={Tops.container7}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Search dress="T-shirts" />
            <Search dress="Crop tops" />
            <Search dress="Sleeveless" />
            <Search dress="Shirts" />
            <Search dress="Casuals" />
          </ScrollView>
        </View>
        <View style={Tops.container9}>
          <View style={Tops.container10}>
            <View style={Tops.container11}>
              <TouchableOpacity>
                <Image source={require('../../../assets/images/filter.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate('NEWCOLLECTION')}>
                <Text style={Tops.textstyle2}>Filters</Text>
              </TouchableOpacity>
            </View>
            <View style={Tops.container12}>
              <TouchableOpacity onPress={this.toggleModal1}>
                <Image source={require('../../../assets/images/sort.png')} />
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
                      borderTopLeftRadius: 34,
                      borderTopRightRadius: 34,
                    }}>
                    <View
                      style={{
                        height: 6,
                        width: 60,
                        backgroundColor: '#9B9B9B',
                        borderRadius: 3,
                        alignSelf: 'center',
                        marginTop: 14,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 12,
                        fontFamily: 'metropolis.regular',
                      }}
                      onPress={this.toggleModal1}>
                      Sort by
                    </Text>
                    <View style={{justifyContent: 'flex-start'}}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 17,
                            paddingLeft: 18,
                            paddingVertical: 13,
                            fontFamily: 'metropolis.regular',
                          }}>
                          Popular
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 17,
                            paddingLeft: 18,
                            paddingVertical: 13,
                            fontFamily: 'metropolis.regular',
                          }}>
                          Newest
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 17,
                            paddingLeft: 18,
                            paddingVertical: 13,
                            fontFamily: 'metropolis.regular',
                          }}>
                          Customer review
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 17,
                            paddingLeft: 18,
                            paddingVertical: 13,
                            fontFamily: 'metropolis.regular',
                          }}>
                          Price: lowest to high
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 17,
                            paddingLeft: 18,
                            paddingVertical: 13,
                            fontFamily: 'metropolis.regular',
                          }}>
                          Price: highest to low
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </TouchableOpacity>
              <Text style={Tops.textstyle2}>Price: lowest to high</Text>
            </View>
            <View style={Tops.container13}>
              <View>
                <TouchableOpacity onPress={this.toggleModal2}>
                  <Image source={require('../../../assets/images/color.png')} />
                  <Modal
                    isVisible={this.state.isModalVisible2}
                    style={{
                      margin: 0,
                      justifyContent: 'flex-end',
                    }}>
                    <View
                      style={{
                        height: '50%',
                        backgroundColor: '#E5E5E5',
                        borderTopLeftRadius: 34,
                        borderTopRightRadius: 34,
                      }}>
                      <View
                        style={{
                          height: 6,
                          width: 60,
                          backgroundColor: '#9B9B9B',
                          borderRadius: 3,
                          alignSelf: 'center',
                          marginTop: 14,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginTop: 12,
                          fontFamily: 'metropolis.regular',
                        }}
                        onPress={this.toggleModal2}>
                        Select size
                      </Text>
                      <View
                        style={{
                          height: '15%',
                          marginVertical: 5,
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: 'white',
                            borderRadius: 8,
                            justifyContent: 'center',
                            marginHorizontal: '5.8%',
                            marginTop: 12,
                            borderWidth: 0.6,
                            borderColor: '#9B9B9B',
                          }}>
                          <TouchableOpacity>
                            <Text
                              style={{
                                textAlign: 'center',
                                fontSize: 14,
                                fontFamily: 'metropolis.regular',
                              }}>
                              XS
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <View
                          style={{
                            flex: 1,
                            backgroundColor: 'white',
                            borderRadius: 8,
                            marginHorizontal: '5.8%',
                            borderWidth: 0.6,
                            borderColor: '#9B9B9B',
                            marginTop: 12,
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 14,
                              fontFamily: 'metropolis.regular',
                            }}>
                            S
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: 'white',
                            borderRadius: 8,
                            marginTop: 12,
                            marginHorizontal: '5.8%',
                            borderWidth: 0.6,
                            borderColor: '#9B9B9B',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 14,
                              fontFamily: 'metropolis.regular',
                            }}>
                            M
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          height: '15%',
                          marginTop: 5,
                          marginBottom: 10,
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: 'white',
                            borderRadius: 8,
                            borderWidth: 0.6,
                            borderColor: '#9B9B9B',
                            marginHorizontal: '5.8%',
                            marginTop: 12,
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 14,
                              fontFamily: 'metropolis.regular',
                            }}>
                            L
                          </Text>
                        </View>

                        <View
                          style={{
                            flex: 1,
                            backgroundColor: 'white',
                            borderRadius: 8,

                            marginHorizontal: '5.8%',
                            borderWidth: 0.6,
                            borderColor: '#9B9B9B',
                            marginTop: 12,
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 14,
                              fontFamily: 'metropolis.regular',
                            }}>
                            XL
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: '#E5E5E5',
                            borderRadius: 8,

                            marginHorizontal: '5.8%',

                            marginTop: 12,
                            justifyContent: 'center',
                          }}
                        />
                      </View>
                      <TouchableOpacity>
                        <View
                          style={{
                            height: '10%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 15,
                          }}>
                          <View style={{flex: 1}}>
                            <Text
                              style={{
                                fontSize: 16,
                                paddingLeft: 25,
                                fontFamily: 'metropolis.regular',
                              }}>
                              Size info
                            </Text>
                          </View>

                          <View
                            style={{
                              flex: 1,
                              alignItems: 'flex-end',
                              justifyContent: 'center',
                            }}>
                            <Image
                              source={require('../../../assets/images/vector_2.png')}
                              style={{
                                height: 10,
                                width: 5,
                                alignSelf: 'flex-end',
                                marginRight: 25,
                                marginBottom: 4,
                              }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      <View
                        style={{
                          height: '25%',
                        }}>
                        <TouchableOpacity>
                          <View
                            style={{
                              height: '70%',
                              marginHorizontal: 16,
                              backgroundColor: '#DB3022',
                              marginVertical: 7,
                              borderRadius: 25,
                              justifyContent: 'center',
                              shadowColor: '#000',
                              shadowOffset: {
                                width: 0,
                                height: 7,
                              },
                              shadowOpacity: 0.5,
                              shadowRadius: 9.11,

                              elevation: 14,
                            }}>
                            <Text
                              style={{
                                textAlign: 'center',
                                color: 'white',
                                fontSize: 14,
                                fontFamily: 'metropolis.regular',
                              }}>
                              ADD TO CART
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Tops.container18}>
            <View style={Tops.container19}>
              <Category1
                imageuri={require('../../../assets/images/shop_9.png')}
                heart1={require('../../../assets/images/heart2.png')}
                star1={require('../../../assets/images/star.png')}
                star2={require('../../../assets/images/star.png')}
                star3={require('../../../assets/images/star.png')}
                star4={require('../../../assets/images/star.png')}
                star5={require('../../../assets/images/star.png')}
                text6={'(10)'}
                text2={'Mango'}
                text3={'Shirt'}
                text4={'12$'}
              />
            </View>
            <View style={Tops.container20}>
              <Category2
                imageuri={require('../../../assets/images/shop_5.png')}
                text1={'-15%'}
                heart1={require('../../../assets/images/heart1.png')}
                star1={require('../../../assets/images/star.png')}
                star2={require('../../../assets/images/star.png')}
                star3={require('../../../assets/images/star.png')}
                star4={require('../../../assets/images/star.png')}
                star5={require('../../../assets/images/graystar.png')}
                text6={'(9)'}
                text2={'Mango'}
                text3={'T-shirt'}
                text4={'19$'}
                text5={'12$'}
              />
            </View>
          </View>
          <View style={Tops.container18}>
            <View style={Tops.container19}>
              <Category2
                imageuri={require('../../../assets/images/shop_8.png')}
                text1={'-5%'}
                heart1={require('../../../assets/images/heart1.png')}
                star1={require('../../../assets/images/star.png')}
                star2={require('../../../assets/images/star.png')}
                star3={require('../../../assets/images/graystar.png')}
                star4={require('../../../assets/images/graystar.png')}
                star5={require('../../../assets/images/graystar.png')}
                text6={'(5)'}
                text2={'Dorothy perkins'}
                text3={'Light blouse'}
                text4={'25$'}
                text5={'20$'}
              />
            </View>
            <View style={Tops.container20}>
              <Category1
                imageuri={require('../../../assets/images/shop_13.png')}
                heart1={require('../../../assets/images/heart2.png')}
                star1={require('../../../assets/images/star.png')}
                star2={require('../../../assets/images/star.png')}
                star3={require('../../../assets/images/graystar.png')}
                star4={require('../../../assets/images/graystar.png')}
                star5={require('../../../assets/images/graystar.png')}
                text6={'(6)'}
                text2={'Dorothy perkins'}
                text3={'T-Shirt'}
                text4={'30$'}
              />
            </View>
          </View>
          <View style={Tops.container18}>
            <View style={Tops.container19}>
              <Category1
                imageuri={require('../../../assets/images/shop_12.png')}
                heart1={require('../../../assets/images/heart1.png')}
                star1={require('../../../assets/images/star.png')}
                star2={require('../../../assets/images/star.png')}
                star3={require('../../../assets/images/star.png')}
                star4={require('../../../assets/images/star.png')}
                star5={require('../../../assets/images/star.png')}
                text6={'(10)'}
                text2={'Mango'}
                text3={'Shirt'}
                text4={'12$'}
              />
            </View>
            <View style={Tops.container20}>
              <Category2
                imageuri={require('../../../assets/images/shop_1.png')}
                text1={'-10%'}
                heart1={require('../../../assets/images/heart2.png')}
                star1={require('../../../assets/images/star.png')}
                star2={require('../../../assets/images/star.png')}
                star3={require('../../../assets/images/star.png')}
                star4={require('../../../assets/images/star.png')}
                star5={require('../../../assets/images/star.png')}
                text6={'(10)'}
                text2={'Mango'}
                text3={'Shirt'}
                text4={'12$'}
                text5={'10$'}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default womenTops;
