import React, {Component} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import signUp from '../features/explore/components/signUp';
import loginUp from '../features/explore/components/loginUp';
import forgotPwd from '../features/explore/components/forgotPwd';
import visualSearch from '../features/explore/components/visualSearch';
import takePhoto from '../features/explore/components/takePhoto';
import cropPhoto from '../features/explore/components/cropPhoto';
import resultSearch from '../features/explore/components/resultSearch';
import fasionSale from '../features/explore/components/fasionSale';
import streetClothes from '../features/explore/components/streetClothes';
import shopFile from '../features/explore/components/shopFile';
import bagFile from '../features/explore/components/bagFile';
import favFile from '../features/explore/components/favFile';
import profileFile from '../features/explore/components/profileFile';
import streetFile from '../features/explore/components/streetFile';
import collectionFile from '../features/explore/components/collectionFile';
import womenFile from '../features/explore/components/womenFile';
import womenTops from '../features/explore/components/womenTops';
import newCollection from '../features/explore/components/newCollection';
import brandList from '../features/explore/components/brandList';
import clientFile from '../features/explore/components/clientFile';
import rateFile from '../features/explore/components/rateFile';
import favSelect from '../features/explore/components/favSelect';
import Category from '../components/Category';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
class Router extends Component {
  render() {
    createBottomTabs = () => {
      return (
        <MaterialBottomTabs.Navigator
          activeColor="#808080"
          inactiveColor="#808080"
          barStyle={{
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            overflow: 'hidden',
            paddingVertical: 3,
          }}>
          <MaterialBottomTabs.Screen
            name="FASIONSALE"
            component={fasionSale}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => (
                <Image source={require('../assets/images/home.png')} />
              ),
            }}
          />
          <MaterialBottomTabs.Screen
            name="STREETCLOTHES"
            component={streetClothes}
            options={{
              tabBarLabel: 'Shop',
              tabBarIcon: () => (
                <Image source={require('../assets/images/shape.png')} />
              ),
            }}
          />
          <MaterialBottomTabs.Screen
            name="BAGFILE"
            component={bagFile}
            options={{
              tabBarLabel: 'Bag',
              tabBarIcon: () => (
                <Image source={require('../assets/images/bag.png')} />
              ),
            }}
          />
          <MaterialBottomTabs.Screen
            name="FAVFILE"
            component={favFile}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: () => (
                <Image source={require('../assets/images/heart.png')} />
              ),
            }}
          />
          <MaterialBottomTabs.Screen
            name="PROFILEFILE"
            component={profileFile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: () => (
                <Image source={require('../assets/images/profile.png')} />
              ),
            }}
          />
        </MaterialBottomTabs.Navigator>
      );
    };
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SIGNUP" component={signUp} />
          <Stack.Screen name="LOGINUP" component={loginUp} />
          <Stack.Screen name="FORGOTPWD" component={forgotPwd} />
          <Stack.Screen name="VSEARCH" component={visualSearch} />
          <Stack.Screen name="TAKEPHOTO" component={takePhoto} />
          <Stack.Screen name="CROPPHOTO" component={cropPhoto} />
          <Stack.Screen name="RESULTSEARCH" component={resultSearch} />
          <Stack.Screen name="FASIONSALE" component={fasionSale} />
          <Stack.Screen name="STREETCLOTHES" component={streetClothes} />
          <Stack.Screen name="STREETFILE" component={streetFile} />
          <Stack.Screen name="COLLECTIONFILE" component={collectionFile} />
          <Stack.Screen name="SHOPFILE" component={shopFile} />
          <Stack.Screen name="WOMENFILE" component={womenFile} />
          <Stack.Screen name="WOMENTOPS" component={womenTops} />
          <Stack.Screen name="NEWCOLLECTION" component={newCollection} />
          <Stack.Screen name="BRANDLIST" component={brandList} />
          <Stack.Screen name="CLIENTFILE" component={clientFile} />
          <Stack.Screen name="RATEFILE" component={rateFile} />
          <Stack.Screen name="FAVSELECT" component={favSelect} />
          <Stack.Screen name="bottom" children={createBottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Router;
