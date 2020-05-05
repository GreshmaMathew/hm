import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Result} from '../../../styles/Result';

class resultSearch extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Result.container1}>
        <View style={Result.container2}>
          <TouchableOpacity onPress={() => navigate('bottom')}>
            <Image
              source={require('../../../assets/images/search_2.png')}
              style={Result.search}
            />
          </TouchableOpacity>
        </View>
        <View style={Result.container3}>
          <Text style={Result.text}>Finding similar {'\n'} results...</Text>
        </View>
        <View style={Result.container10} />
      </View>
    );
  }
}
export default resultSearch;
