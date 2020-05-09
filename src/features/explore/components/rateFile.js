import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {Rate} from '../../../styles/Rate';
import {Avatar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {CheckBox} from 'react-native-elements';
import {Review} from '../components/../../../components/Review';
class rateFile extends Component {
  state = {
    isModalVisible1: false,
    checked: false,
  };

  toggleModal1 = () => {
    this.setState({isModalVisible1: !this.state.isModalVisible1});
  };
  render() {
    const {navigate} = this.props.navigation;
    const gradienheight = 60;
    const gradienbackground = '#FFF';
    const data = Array.from({length: gradienheight});

    return (
      <View style={Rate.container1}>
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              position: 'absolute',
              backgroundColor: gradienbackground,
              height: 1,
              bottom: gradienheight - i,
              right: 0,
              left: 0,
              zIndex: 2,
              opacity: (1 / gradienheight) * (i + 1),
            }}
          />
        ))}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Rate.container2}>
            <View style={Rate.container3}>
              <Image
                source={require('../../../assets/images/icon_1.png')}
                style={Rate.icon1}
              />
            </View>
            <View style={Rate.container4} />
            <View style={Rate.container5} />
          </View>

          <View style={Rate.container6}>
            <Text style={Rate.texstyle}>Rating&Reviews</Text>
          </View>

          <View style={Rate.container7}>
            <View style={Rate.container8}>
              <Text style={Rate.texstyle4}>4.3</Text>
              <Text style={Rate.texstyle1}>23 ratings</Text>
            </View>
            <View style={Rate.container9}>
              <View style={Rate.container12}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
              </View>
              <View style={Rate.container12}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
              </View>
              <View style={Rate.container12}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
              </View>
              <View style={Rate.container12}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
              </View>
              <View style={Rate.container12}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
              </View>
            </View>
            <View style={Rate.container10}>
              <View style={Rate.container13}>
                <View
                  style={{
                    height: 8,
                    width: 114,
                    backgroundColor: '#DB3022',
                    borderRadius: 4,
                  }}
                />
              </View>
              <View style={Rate.container13}>
                <View
                  style={{
                    height: 8,
                    width: 40,
                    backgroundColor: '#DB3022',
                    borderRadius: 4,
                  }}
                />
              </View>
              <View style={Rate.container13}>
                <View
                  style={{
                    height: 8,
                    width: 29,
                    backgroundColor: '#DB3022',
                    borderRadius: 4,
                  }}
                />
              </View>
              <View style={Rate.container13}>
                <View
                  style={{
                    height: 8,
                    width: 14,
                    backgroundColor: '#DB3022',
                    borderRadius: 4,
                  }}
                />
              </View>
              <View style={Rate.container13}>
                <View
                  style={{
                    height: 8,
                    width: 8,
                    backgroundColor: '#DB3022',
                    borderRadius: 4,
                  }}
                />
              </View>
            </View>
            <View style={Rate.container11}>
              <View style={Rate.container15}>
                <Text style={Rate.texstyle20}>12</Text>
              </View>
              <View style={Rate.container16}>
                <Text style={Rate.texstyle3}>5</Text>
              </View>
              <View style={Rate.container15}>
                <Text style={Rate.texstyle3}>4</Text>
              </View>
              <View style={Rate.container15}>
                <Text style={Rate.texstyle3}>2</Text>
              </View>
              <View style={Rate.container15}>
                <Text style={Rate.texstyle3}>0</Text>
              </View>
            </View>
          </View>

          <View style={Rate.container18}>
            <View style={Rate.container19}>
              <Text style={Rate.texstyle5}>8 reviews</Text>
            </View>
            <View style={Rate.container20}>
              <Image
                source={require('../../../assets/images/check.png')}
                style={{height: 20, width: 20}}
              />
              <Text style={Rate.texstyle6}>With photo</Text>
            </View>
          </View>
          <View style={Rate.container21}>
            <Avatar
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              containerStyle={{position: 'absolute', top: -12, left: -12}}
            />
            <View style={Rate.container22}>
              <Text style={Rate.texstyle7}>Helene Moore</Text>
            </View>
            <View style={Rate.container23}>
              <View
                style={{
                  flex: 1,

                  marginLeft: 24,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/graystar.png')}
                  style={Rate.imagestyle}
                />
              </View>
              <View
                style={{
                  flex: 1,

                  marginRight: 20,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <Text style={Rate.texstyle8}>June 5, 2019</Text>
              </View>
            </View>
            <View style={Rate.container24}>
              <Text style={Rate.texstyle9}>
                The dress is great! Very classy and comfortable. It fit
                perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress
                would be too long for those who are shorter but could be hemmed.
                I wouldn't recommend it for those big chested as I am smaller
                chested and it fit me perfectly. The underarms were not too wide
                and the dress was made well.
              </Text>
            </View>
            <View style={Rate.container25}>
              <Text style={Rate.texstyle10}>Helpful</Text>
              <Image source={require('../../../assets/images/thumb.png')} />
            </View>
          </View>
          <View style={Rate.container21}>
            <Avatar
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              containerStyle={{position: 'absolute', top: -12, left: -12}}
            />
            <View style={Rate.container22}>
              <Text style={Rate.texstyle7}>Grace mathew</Text>
            </View>
            <View style={Rate.container23}>
              <View
                style={{
                  flex: 1,

                  marginLeft: 24,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/graystar.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/graystar.png')}
                  style={Rate.imagestyle}
                />
                <Image
                  source={require('../../../assets/images/graystar.png')}
                  style={Rate.imagestyle}
                />
              </View>
              <View
                style={{
                  flex: 1,

                  marginRight: 20,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <Text style={Rate.texstyle8}>September 27, 2019</Text>
              </View>
            </View>
            <View style={Rate.container24}>
              <Text style={Rate.texstyle9}>
                The dress is great! Very classy and comfortable. It fit
                perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress
                would be too long for those who are shorter but could be hemmed.
                I wouldn't recommend it for those big chested as I am smaller
                chested and it fit me perfectly. The underarms were not too wide
                and the dress was made well.
              </Text>
            </View>
            <View style={Rate.container25}>
              <Text style={Rate.texstyle10}>Helpful</Text>
              <Image source={require('../../../assets/images/thumb.png')} />
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            height: 36,
            width: 148,
            backgroundColor: '#DB3022',
            position: 'absolute',
            bottom: '8%',
            right: '2%',
            borderRadius: 24,
            alignItems: 'center',
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
          }}>
          <Image
            source={require('../../../assets/images/icon.png')}
            style={{marginLeft: 5}}
          />
          <TouchableOpacity onPress={this.toggleModal1}>
            <Text style={{color: '#fff', marginLeft: 5}}>Write a review</Text>
            <Modal
              isVisible={this.state.isModalVisible1}
              style={{
                margin: 0,
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  height: '80%',
                  backgroundColor: '#E5E5E5',
                  borderTopLeftRadius: 34,
                  borderTopRightRadius: 34,
                }}>
                <View
                  style={{
                    flex: 1,

                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 60,
                      height: 6,
                      backgroundColor: '#9B9B9B',
                      borderRadius: 3,
                      marginTop: 14,
                    }}
                  />
                  <Text style={Rate.texstyle12} onPress={this.toggleModal1}>
                    What is you rate?
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.8,

                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../../assets/images/bigstar.png')}
                    style={{marginLeft: 20}}
                  />
                  <Image
                    source={require('../../../assets/images/bigstar.png')}
                    style={{marginLeft: 20}}
                  />
                  <Image
                    source={require('../../../assets/images/bigstar.png')}
                    style={{marginLeft: 20}}
                  />
                  <Image
                    source={require('../../../assets/images/bigstar.png')}
                    style={{marginLeft: 20}}
                  />
                  <Image
                    source={require('../../../assets/images/bigstar.png')}
                    style={{marginLeft: 20}}
                  />
                </View>
                <View
                  style={{
                    flex: 0.7,

                    alignItems: 'center',
                  }}>
                  <Text style={Rate.texstyle13}>
                    Please share your opinion {'\n'} about the product
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,

                    justifyContent: 'center',
                  }}>
                  <TextInput
                    style={{
                      height: 174,
                      marginHorizontal: 16,
                      backgroundColor: '#FFF',
                      textAlignVertical: 'top',
                    }}
                    placeholder="Your review"
                  />
                </View>
                <View
                  style={{
                    flex: 1.3,

                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: '23%',
                      marginLeft: 16,
                      justifyContent: 'center',
                      alignItems: 'center',

                      borderRadius: 4,
                    }}>
                    <TouchableOpacity>
                      <View
                        style={{
                          height: 54,
                          width: 54,
                          borderRadius: 30,
                          backgroundColor: '#DB3022',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../../assets/images/camera.png')}
                        />
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={{fontSize: 11, paddingTop: 3, fontWeight: 'bold'}}>
                      Add your photos
                    </Text>
                  </View>
                </View>
                <View style={{flex: 1.3, justifyContent: 'center'}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        marginHorizontal: 16,
                        marginVertical: 16,
                        height: '58%',
                        backgroundColor: '#DB3022',
                        borderRadius: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,

                        elevation: 7,
                      }}>
                      <Text style={Rate.texstyle14}>SEND REVIEW</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default rateFile;
