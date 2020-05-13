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
import {Sfile} from '../styles/Sfile';
import Modal from 'react-native-modal';

class Category extends Component {
  state = {
    isModalVisible1: false,
  };

  toggleModal1 = () => {
    this.setState({isModalVisible1: !this.state.isModalVisible1});
  };
  render() {
    return (
      <TouchableOpacity onPress={this.toggleModal1}>
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
            <View style={{flex: 1, backgroundColor: 'green'}}>
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
            </View>
            <View style={{flex: 1.2, backgroundColor: 'red'}}>
              <Text>HIIII</Text>
            </View>
            <View style={{flex: 1.2, backgroundColor: 'blue'}}>
              <Text>HIIII</Text>
            </View>
            <View style={{flex: 0.8, backgroundColor: 'yellow'}}>
              <Text>HIIII</Text>
            </View>
            <View style={{flex: 1.2, backgroundColor: 'pink'}}>
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
                    shadowRadius: 4,

                    elevation: 7,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 14,
                      fontFamily: 'metropolis.regular',
                    }}>
                    ADD TO FAVOURITES
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={Sfile.container15}>
          <ImageBackground
            source={this.props.imageuri}
            resizeMode="stretch"
            style={{flex: 1}}>
            <View style={Sfile.container16}>
              <Text style={Sfile.container17}>New</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}
export default Category;
