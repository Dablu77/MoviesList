import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {Rectangle, YoloLogo} from '../utils/Const';
import {fontPixel, heightPixel, widthPixel} from '../utils/Dimensions';

export default function Ginie() {
  const Data = [
    {
      Image: Rectangle,
      Coins: '1000 coins each ticket',
    },
    {
      Image: Rectangle,
      Coins: '1000 coins each ticket',
    },
  ];

  return (
    <SafeAreaView style={Styles.Container}>
      <LinearGradient
        start={{x: 0, y: 4}}
        end={{x: 1, y: 0}}
        colors={[COLORS.BLACK, '#A90808', COLORS.BLACK]}
        style={Styles.linearGradient}>
        <View style={Styles.logoView}>
          <Image source={YoloLogo} style={Styles.logo} />
        </View>
        <View style={Styles.box}>
          <View style={Styles.TitleBox}>
            <Text style={{color: '#FFFFFF', opacity: 0.5, fontSize: 12}}>
              SUBSCRIPTION
            </Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={{color: COLORS.RED, fontWeight: '500'}}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: fontPixel(22),
              color: COLORS.WHITE,
              fontWeight: '500',
            }}>
            experience the Thrill of{'\n'} Winning
          </Text>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Data}
          renderItem={({item, index}) => (
            <View style={Styles.claimBox}>
              <Image
                source={item?.Image}
                style={{
                  width: widthPixel(250),
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
              <View>
                <Text>coins required</Text>
                <Text>{item?.Coins}</Text>
              </View>
            </View>
          )}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  linearGradient: {
    // flex: 1,
  },
  logoView: {
    marginHorizontal: widthPixel(20),
    marginTop: heightPixel(100),
  },
  logo: {},
  box: {
    marginTop: heightPixel(70),
    marginHorizontal: widthPixel(20),
  },
  TitleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  claimBox: {
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    marginTop: heightPixel(50),
    marginHorizontal: widthPixel(10),
    width: widthPixel(280),
    // height: heightPixel(330),
  },
});
