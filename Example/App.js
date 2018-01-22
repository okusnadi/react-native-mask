/**
 * React Native Mask Example
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

import Mask from 'react-native-mask';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Mask with default of 'square' shape</Text>
        <Mask>
          <View style={[{ backgroundColor: '#0084ff' }, styles.shapeSize]} />
        </Mask>
        <Text style={styles.text}>
          Mask with 'rounded' shape and default 8 points border radius
        </Text>
        <Mask shape={'rounded'}>
          <View style={[{ backgroundColor: '#fbb6ac' }, styles.shapeSize]} />
        </Mask>
        <Text style={styles.text}>Mask with 'circle' shape</Text>
        <Mask shape={'circle'}>
          <View style={[{ backgroundColor: '#e3780c' }, styles.shapeSize]} />
        </Mask>
        <Text style={styles.text}>Masking other content</Text>
        <View style={{ flexDirection: 'row' }}>
          <Mask shape={'circle'}>
            <Image
              style={styles.shapeSize}
              source={{
                uri:
                  'https://static.pexels.com/photos/544113/pexels-photo-544113.jpeg',
              }}
            />
          </Mask>
          <View style={{ marginLeft: 10 }} />
          <Mask shape={'rounded'}>
            <Image
              style={styles.shapeSize}
              source={{
                uri:
                  'https://static.pexels.com/photos/414720/pexels-photo-414720.jpeg',
              }}
            />
          </Mask>
        </View>
        <Text style={styles.text}>Washes</Text>
        <Mask shape="rounded" wash>
          <Image
            style={styles.shapeSize}
            source={{
              uri:
                'https://static.pexels.com/photos/6556/beans-coffee-hand-morning.jpg',
            }}
          />
        </Mask>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  shapeSize: {
    width: 70,
    height: 70,
  },
});
