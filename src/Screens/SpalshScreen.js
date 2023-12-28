import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {fontPixel} from '../utils/Dimensions';

export default function SpalshScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('TabNavigation');
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={Styles.Container}>
      <View style={Styles.TextView}>
        <Text style={Styles.Text_Title}>YOLO</Text>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  TextView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  Text_Title: {
    color: COLORS.BROWN,
    fontSize: fontPixel(50),
    fontWeight: '500',
    letterSpacing: 2,
  },
});
