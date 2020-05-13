import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import RangeSlider from 'rn-range-slider';

import {Newc} from '../../../styles/Newc';
class newCollection extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Newc.container1}>
        <View style={Newc.container2}>
          <View style={Newc.container3}>
            <Image
              source={require('../../../assets/images/icon_1.png')}
              style={Newc.icon1}
            />
          </View>
          <View style={Newc.container4}>
            <Text style={Newc.textstyle1}>Filters</Text>
          </View>
          <View style={Newc.container5} />
        </View>
        <View style={Newc.container6}>
          <Text style={Newc.textstyle2}>Price range</Text>
        </View>
        <View style={Newc.container12}>
          <RangeSlider
            style={{width: '90%', height: 80}}
            gravity={'top'}
            min={78}
            max={143}
            step={1}
            selectionColor="#DB3022"
            blankColor="#9B9B9B"
            thumbColor="#DB3022"
            thumbBorderColor="#DB3022"
            onValueChanged={(low, high, fromUser) => {
              this.setState({rangeLow: low, rangeHigh: high});
            }}
          />
        </View>
        <View style={Newc.container8}>
          <Text style={Newc.textstyle2}>Colors</Text>
        </View>
        <View style={Newc.container13}>
          <TouchableOpacity>
            <View
              style={{
                height: 36,
                width: 36,
                backgroundColor: '#020202',
                borderRadius: 18,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 36,
                width: 36,
                backgroundColor: 'pink',
                borderRadius: 18,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 36,
                width: 36,
                backgroundColor: '#B82222',
                borderRadius: 18,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 36,
                width: 36,
                backgroundColor: '#BEA9A9',
                borderRadius: 18,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 36,
                width: 36,
                backgroundColor: '#DB3022',
                borderRadius: 18,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 36,
                width: 36,
                backgroundColor: '#151867',
                borderRadius: 18,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={Newc.container9}>
          <Text style={Newc.textstyle2}>Sizes</Text>
        </View>
        <View style={Newc.container14}>
          <TouchableOpacity>
            <View style={Newc.container21}>
              <Text style={Newc.textstyle3}>XS</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Newc.container22}>
              <Text style={Newc.textstyle4}>S</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Newc.container22}>
              <Text style={Newc.textstyle4}>M</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Newc.container21}>
              <Text style={Newc.textstyle3}>L</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Newc.container21}>
              <Text style={Newc.textstyle3}>XL</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={Newc.container10}>
          <Text style={Newc.textstyle2}>Category</Text>
        </View>
        <View style={Newc.container15}>
          <View style={Newc.container23}>
            <View style={Newc.container25}>
              <TouchableOpacity>
                <View style={Newc.container28}>
                  <Text style={Newc.textstyle4}>All</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Newc.container26}>
              <TouchableOpacity>
                <View style={Newc.container29}>
                  <Text style={Newc.textstyle3}>Women</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Newc.container27}>
              <TouchableOpacity>
                <View style={Newc.container29}>
                  <Text style={Newc.textstyle3}>Men</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Newc.container24}>
            <View style={Newc.container30}>
              <TouchableOpacity>
                <View style={Newc.container29}>
                  <Text style={Newc.textstyle3}>Boys</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Newc.container30}>
              <TouchableOpacity>
                <View style={Newc.container29}>
                  <Text style={Newc.textstyle3}>Girls</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Newc.container27} />
          </View>
        </View>

        <View style={Newc.container11}>
          <View
            style={{
              flex: 1,

              justifyContent: 'center',
            }}>
            <Text style={Newc.textstyle2}>Brand</Text>
            <Text style={Newc.textstyle5}>
              adidas Originals, Jack & Jones, s.Oliver
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 23,
            }}>
            <TouchableOpacity onPress={() => navigate('BRANDLIST')}>
              <Image source={require('../../../assets/images/vector_2.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Newc.container16}>
          <View style={Newc.container17}>
            <TouchableOpacity>
              <View style={Newc.container19}>
                <Text style={Newc.textstyle3}>Discard</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={Newc.container18}>
            <TouchableOpacity onPress={() => navigate('FAVSELECT')}>
              <View style={Newc.container20}>
                <Text style={Newc.textstyle4}>Apply</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default newCollection;
