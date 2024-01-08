import { Image } from 'expo-image';
import { useEffect } from 'react';
import { Alert, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from 'utils/colors';

function Welcome() {
  // This screen is shown when the app is first loaded, so it should be redirected to the login screen or the home screen if the user is already logged in or not after 10 seconds.

  useEffect(() => {
    setTimeout(() => {
      Alert.alert('Redirecting to Login Screen...');
    }, 5000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-uber-dark">
      <Image
        style={{
          width: wp('70%'),
          height: hp('20%'),
          tintColor: Colors.lightGray,
        }}
        source={require('../../assets/logo.svg')}
        placeholder="Uber Logo"
        transition={2000}
      />
    </View>
  );
}

export default Welcome;
