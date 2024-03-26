import React, { useRef, useEffect } from 'react'
import { View, StyleSheet, Dimensions, Animated } from 'react-native'
import { Image } from '@rneui/themed'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const IntroScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.replace('LoadingScreenOne'); // replace 'LoadOne' with the actual screen name
    }, 5000);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000, // 5 seconds
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          source={require('../assets/logo.jpg')}
          style={{ width: windowWidth / 2, height: windowWidth / 2 }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default IntroScreen
