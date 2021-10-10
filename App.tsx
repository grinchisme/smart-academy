import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';
import { Icon } from "./src/shared/components/Icon/index"
import Button from './src/shared/components/Button'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.row}>
        <View style={styles.colLeft}>
          <Icon name='Arrow-Left' />
        </View>
        <View style={styles.colRight}>
          <Icon name='Dots-Vertical' />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.colMiddle}>
          <View style={styles.userAvatar}><Image source={require('./src/sourceImage/Ellipse10.png')} style={{ width: 95, height: 95 }} /></View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.colMiddle}>
          <Text style={styles.textTitle}>Kat Williams</Text>
          <Text style={styles.textEmail}>@Williams</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.colMiddle}>
          <Text style={styles.textLocation}>Россия, Санкт-Петербург</Text>
          <Text style={styles.textWork}>Место работы: Artist by Passion!</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.colLeft}>
          <Text style={styles.textActivityNum1}>2,467</Text>
          <Text style={styles.textActivityTx1}>Followers</Text>
        </View>
        <View style={styles.colMiddleActivity}>
          <Text style={styles.textActivityNum2}>1,589</Text>
          <Text style={styles.textActivityTx2}>Following</Text>
        </View>
        <View style={styles.colRight}>
          <Button text='Подробнее' />
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.row}>
        <View style={styles.colLeft}>
          <Text style={styles.textPh}>Фотографии</Text>
        </View>
        <View style={styles.colRight}>
          <Text style={styles.textNum}>245</Text>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  colLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  colMiddle: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
  },
  colRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flexGrow: 1
  },
  colMiddleActivity: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  container: {
    paddingVertical: 27,
    paddingHorizontal: 19,
    backgroundColor: '#2B2146',
    flex: 1
  },
  textTitle: {
    color: 'white',
    fontSize: 16,
    paddingTop: 17,
    fontFamily: 'HKGrotesk-Bold'
  },
  textEmail: {
    color: '#8672BB',
    fontSize: 12,
    paddingTop: 6,
    fontFamily: 'HKGrotesk-Medium'
  },
  userAvatar: {
    // alignItems: 'center',
    // paddingBottom: 15
  },
  textLocation: {
    color: '#8672BB',
    fontSize: 16,
    paddingTop: 29,
    fontFamily: 'HKGrotesk-Medium'
  },
  textNum: {
    color: '#8672BB',
    fontSize: 16,
    marginRight: 128,
    marginTop: 20,
    fontFamily: 'HKGrotesk-Medium'
  },
  textWork: {
    color: 'white',
    fontSize: 14,
    paddingTop: 8,
    paddingBottom: 24,
    fontFamily: 'HKGrotesk-Medium'
  },
  textPh: {
    color: 'white',
    fontSize: 14,
    marginLeft: 129,
    marginTop: 20,
    fontFamily: 'HKGrotesk-Medium'
  },
  textActivityNum1: {
    color: 'white',
    fontSize: 14,
    // padding: 8,
    // paddingBottom: 24
    fontFamily: 'HKGrotesk-Bold',
    marginLeft: 5,
    marginRight: 30
  },
  textActivityTx1: {
    color: '#8672BB',
    fontSize: 14,
    // padding: 8,
    // paddingBottom: 24
    fontFamily: 'HKGrotesk-Medium',
    marginLeft: 5,
    marginRight: 30
  },
  textActivityNum2: {
    color: 'white',
    fontSize: 14,
    // padding: 8,
    // paddingBottom: 24
    fontFamily: 'HKGrotesk-Bold',
    marginLeft: 30,
    marginRight: 30
  },
  textActivityTx2: {
    color: '#8672BB',
    fontSize: 14,
    // padding: 8,
    // paddingBottom: 24
    fontFamily: 'HKGrotesk-Medium',
    marginLeft: 30,
    marginRight: 30
  },
  line: {
    marginTop: 24,

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#3B2D5F',
    backgroundColor: '#3B2D5F',

  }


});

export default App;
