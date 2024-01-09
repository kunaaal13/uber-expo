import { useAuth, useUser } from '@clerk/clerk-expo';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Alert, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Colors } from 'utils/colors';

function Welcome() {
  // This screen is shown when the app is first loaded, so it should be redirected to the login screen or the home screen if the user is already logged in or not after 10 seconds.
  const router = useRouter();
  const { sessionId, isLoaded } = useAuth();
  console.log({ sessionId, isLoaded });

  useEffect(() => {
    setTimeout(() => {
      if (isLoaded && sessionId) {
        router.push('/home');
      } else if (isLoaded) {
        router.push('/auth/');
      }
    }, 4000);
  }, [isLoaded, sessionId]);

  return (
    <View className="flex-1 items-center justify-center bg-uber-dark">
      <Image
        style={{
          width: wp('70%'),
          height: hp('20%'),
          tintColor: Colors.lightGray,
        }}
        source={require('../assets/logo.svg')}
        placeholder="Uber Logo"
        transition={2000}
      />
    </View>
  );
}

export default Welcome;
