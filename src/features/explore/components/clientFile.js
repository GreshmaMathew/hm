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
            <View style={{height: 340, width: 300}}>
              <ImageBackground
                source={require('../../../assets/images/image5.png')}
                style={{flex: 1}}
                resizeMode="stretch"
              />
            </View>
            <View style={{height: 340, width: 300}}>
              <ImageBackground
                source={require('../../../assets/images/image3.png')}
                style={{flex: 1}}
                resizeMode="stretch"
              />
            </View>
          </ScrollView>
          <View style={Client.container6}>
            <View style={Client.container7}>
              <View style={Client.container10}>
                <View style={{flex: 1}}>
                  <Text style={Client.textstyle2}>Size</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    alignItems: 'flex-end',
                    paddingRight: 8,
                  }}>
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
                          onPress={this.toggleModal1}>
                          Select size
                        </Text>
                        <View
                          style={{
                            height: '15%',
                            marginVertical: 5,
                            flexDirection: 'row',
                          }}>
                          <TouchableOpacity>
                            <View
                              style={{
                                flex: 1,
                                backgroundColor: 'white',
                                borderRadius: 8,
                                justifyContent: 'center',
                                marginHorizontal: '15%',
                                marginTop: 12,
                                borderWidth: 0.6,
                                borderColor: '#9B9B9B',
                              }}>
                              <Text
                                style={{
                                  textAlign: 'center',
                                  fontSize: 14,
                                  fontFamily: 'metropolis.regular',
                                }}>
                                XS
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <View
                              style={{
                                flex: 1,
                                backgroundColor: 'white',
                                borderRadius: 8,
                                marginHorizontal: '15%',
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
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <View
                              style={{
                                flex: 1,
                                backgroundColor: 'white',
                                borderRadius: 8,
                                marginTop: 12,
                                marginHorizontal: '15%',
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
                          </TouchableOpacity>
                        </View>

                        <View
                          style={{
                            height: '15%',
                            marginTop: 5,
                            marginBottom: 10,
                            flexDirection: 'row',
                          }}>
                          <TouchableOpacity>
                            <View
                              style={{
                                flex: 1,
                                backgroundColor: 'white',
                                borderRadius: 8,
                                borderWidth: 0.6,
                                borderColor: '#9B9B9B',
                                marginHorizontal: '16%',
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
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <View
                              style={{
                                flex: 1,
                                backgroundColor: 'white',
                                borderRadius: 8,
                                marginHorizontal: '16%',
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
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <View
                              style={{
                                flex: 1,
                              }}
                            />
                          </TouchableOpacity>
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
            <View style={Client.container8}>
              <View style={Client.container10}>
                <View style={{flex: 1}}>
                  <Text style={Client.textstyle2}>Black</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    alignItems: 'flex-end',
                    paddingRight: 8,
                  }}>
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
                <View
                  style={{
                    width: 36,
                    height: 36,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 18,
                    marginLeft: 16,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    marginRight: 5,
                    elevation: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../../assets/images/heart1.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Client.container11}>
            <View style={Client.container12}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  fontFamily: 'metropolis.regular',
                  paddingLeft: 16,
                }}>
                H&M
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  color: '#9B9B9B',
                  fontFamily: 'metropolis.regular',
                  paddingLeft: 16,
                }}>
                Short black dress
              </Text>
              <View
                style={{marginLeft: 16, marginTop: 4, flexDirection: 'row'}}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={{marginRight: 3, marginVertical: 3}}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={{marginRight: 3, marginVertical: 3}}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={{marginRight: 3, marginVertical: 3}}
                />
                <Image
                  source={require('../../../assets/images/graystar.png')}
                  style={{marginRight: 3, marginVertical: 3}}
                />
                <Image
                  source={require('../../../assets/images/graystar.png')}
                  style={{marginVertical: 3}}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: '#9B9B9B',
                    fontFamily: 'metropolis.regular',
                    paddingLeft: 4,
                    marginVertical: 3,
                  }}
                  onPress={() => navigate('RATEFILE')}>
                  (9)
                </Text>
              </View>
            </View>
            <View style={Client.container13}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  fontFamily: 'metropolis.regular',
                  paddingRight: 16,
                  textAlign: 'right',
                }}>
                $14.78
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 16,
              height: 80,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#222222',
                fontFamily: 'metropolis.regular',
                letterSpacing: 1,
                lineHeight: 20,
              }}>
              Short dress in soft cotton jersey with decorative buttons down the
              front and a wide, frill-trimmed square neckline with concealed
              elastication. Elasticated seam under the bust and short puff
              sleeves with a small frill trim.
            </Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                height: 50,
                marginTop: 25,
                borderTopWidth: 0.5,
                borderBottomWidth: 0.2,
                borderColor: '#9B9B9B',
              }}>
              <View
                style={{
                  flex: 1,

                  justifyContent: 'center',
                  paddingLeft: 16,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#222222',
                    fontFamily: 'metropolis.regular',
                  }}>
                  Shipping info
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  paddingRight: 16,
                }}>
                <Image
                  source={require('../../../assets/images/vector_2.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                height: 50,
                borderTopWidth: 0.2,
                borderBottomWidth: 0.5,
                borderColor: '#9B9B9B',
              }}>
              <View
                style={{
                  flex: 1,

                  justifyContent: 'center',
                  paddingLeft: 16,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#222222',
                    fontFamily: 'metropolis.regular',
                  }}>
                  Support
                </Text>
              </View>
              <View
                style={{
                  flex: 1,

                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  paddingRight: 16,
                }}>
                <Image
                  source={require('../../../assets/images/vector_2.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
            }}>
            <View
              style={{
                flex: 1,

                justifyContent: 'center',
                paddingLeft: 16,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#222222',
                  fontFamily: 'metropolis.regular',
                  fontWeight: 'bold',
                }}>
                You can also like this
              </Text>
            </View>
            <View
              style={{
                flex: 1,

                justifyContent: 'center',
                alignItems: 'flex-end',
                paddingRight: 16,
              }}>
              <Text
                style={{
                  fontSize: 11,
                  color: '#9B9B9B',
                  fontFamily: 'metropolis.regular',
                  fontWeight: 'bold',
                }}>
                12 items
              </Text>
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
        <View
          style={{
            height: '15%',
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: '#fff',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.5,
            shadowRadius: 9.11,
            elevation: 14,
          }}>
          <TouchableOpacity>
            <View
              style={{
                height: 47,
                marginHorizontal: 16,
                backgroundColor: '#DB3022',
                marginTop: 16,
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
    );
  }
}
export default clientFile;
