import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

class Modalsize extends Component {
  render() {
    return (
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
    );
  }
}
export default Modalsize;
