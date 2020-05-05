import {StyleSheet, Dimensions} from 'react-native';
const screenwidth = Dimensions.get('window').width;
export const Sfile = StyleSheet.create({
  container1: {
    flex: 1,
    width: screenwidth,
  },
  container2: {
    flex: 1,
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
  },
  container4: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container5: {
    flex: 1,
    justifyContent: 'center',
  },
  textstyle1: {
    fontSize: 34,
    fontFamily: 'metropolis.regular',
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingRight: 18,
    paddingBottom: 27,
    alignSelf: 'flex-end',
  },
  textstyle2: {
    fontSize: 34,
    fontFamily: 'metropolis.regular',
    color: '#DB3022',
    paddingLeft: 13,
    fontWeight: 'bold',
  },
  textstyle3: {
    fontSize: 34,
    fontFamily: 'metropolis.regular',
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingBottom: 27,
    paddingLeft: 13,
  },
  container6: {
    flex: 1,
  },
  textstyle4: {
    fontSize: 34,
    fontFamily: 'metropolis.regular',
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container7: {
    height: 180,
  },
  container8: {
    height: 80,
    flexDirection: 'row',
  },
  container9: {
    height: 230,
    backgroundColor: 'blue',
  },
  container10: {
    height: 80,

    flexDirection: 'row',
  },
  container11: {
    height: 220,
    backgroundColor: 'green',
  },
  textstyle5: {
    fontSize: 34,
    fontFamily: 'metropolis.regular',
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: 21,
    paddingBottom: 21,
  },
  container12: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container13: {
    flex: 1,

    justifyContent: 'center',
  },
  container14: {
    flex: 1,

    justifyContent: 'center',
  },
  textstyle6: {
    textAlign: 'right',
    marginRight: 14,
    fontSize: 11,
    color: '#222222',
  },
  textstyle7: {
    fontSize: 34,
    fontWeight: 'bold',
    paddingLeft: 18,
  },
  textstyle8: {
    fontSize: 11,
    color: '#9B9B9B',
    paddingLeft: 18,
  },
  container15: {
    marginLeft: 16,
    marginVertical: 16,
    borderRadius: 8,
    overflow: 'hidden',
    height: 180,
    width: 150,
    backgroundColor: 'pink',
  },
  container16: {
    backgroundColor: '#222222',
    height: 24,
    width: 40,
    borderRadius: 25,
    marginLeft: 8,
    marginTop: 8,
  },
  container17: {
    color: 'white',
    alignSelf: 'center',
  },
});
