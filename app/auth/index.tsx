import { useOAuth } from '@clerk/clerk-expo';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from 'utils/colors';

function Page() {
  const { startOAuthFlow } = useOAuth({
    strategy: 'oauth_google',
  });
  const router = useRouter();

  async function handleLogin() {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        router.push('/home');
        setActive!({ session: createdSessionId });
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-uber-blue justify-between">
      {/* Top Content   */}
      <View
        style={{
          height: heightPercentageToDP('50%'),
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: heightPercentageToDP('10%'),
        }}>
        <Image
          style={{
            width: widthPercentageToDP('30%'),
            height: heightPercentageToDP('4%'),
            tintColor: Colors.light,
          }}
          source={require('../../assets/logo.svg')}
          placeholder="Uber Logo"
          transition={2000}
        />

        <Image
          style={{
            width: widthPercentageToDP('65%'),
            height: heightPercentageToDP('30%'),
            borderTopLeftRadius: heightPercentageToDP('10%'),
            borderTopRightRadius: heightPercentageToDP('10%'),
            borderBottomLeftRadius: heightPercentageToDP('40%'),
            borderBottomRightRadius: heightPercentageToDP('40%'),
          }}
          className="rounded-t-4xl"
          source={require('../../assets/uber-auth.svg')}
          placeholder="Uber Logo"
          transition={2000}
        />

        <View>
          <Text
            className="text-uber-light"
            style={{
              fontSize: heightPercentageToDP('3.5%'),
              fontFamily: 'uber-medium',
            }}>
            Move with safety
          </Text>
        </View>
      </View>

      {/* Auth Button  */}
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-uber-dark mx-7 flex-row justify-center items-center py-3 px-3 rounded-xl">
        <Text
          style={{
            fontFamily: 'uber-medium',
          }}
          className="text-uber-light text-xl tracking-wider">
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Page;
