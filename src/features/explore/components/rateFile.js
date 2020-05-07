import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Rate} from '../../../styles/Rate';
import {ScrollView} from 'react-native-gesture-handler';
class rateFile extends Component {
  render() {
    const {navigate} = this.props.navigation;
    const gradienheight = 65;
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
        <ScrollView>
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
                <Text style={Rate.texstyle3}>12</Text>
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
              <Image source={require('../../../assets/images/check.png')} />
              <Text style={Rate.texstyle6}>With photo</Text>
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
          }}>
          <Image
            source={require('../../../assets/images/icon.png')}
            style={{marginLeft: 5}}
          />
          <TouchableOpacity>
            <Text style={{color: '#fff', marginLeft: 5}}>Write a review</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default rateFile;
