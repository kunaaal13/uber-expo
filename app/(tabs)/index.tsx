import { Ionicons } from '@expo/vector-icons';
import ServicesGrid from 'components/home/services-grid';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

function Page() {
  return (
    <SafeAreaView className="flex-1 bg-uber-light">
      <Image
        style={{
          width: widthPercentageToDP('27'),
          height: heightPercentageToDP('3.8'),
        }}
        source={require('../../assets/logo.svg')}
        placeholder="Uber Logo"
        transition={2000}
      />

      <View
        style={{
          paddingHorizontal: widthPercentageToDP('5'),
        }}
        className="flex-1 space-y-10">
        <View className="flex flex-row items-center justify-center relative my-5">
          <Image
            style={{
              width: widthPercentageToDP('90'),
              height: heightPercentageToDP('22'),
            }}
            source={require('../../assets/home-cover.webp')}
            placeholder="Uber Logo"
            transition={2000}
            contentFit="cover"
            className="rounded-2xl"
          />
        </View>

        <ServicesGrid />

        <TouchableOpacity
          onPress={() => router.push('/(ride)/trip-selection')}
          className="flex-row items-center justify-between rounded-full w-full bg-uber-lightGray p-3">
          <View className="flex-row items-center space-x-3 w-1/2">
            <Ionicons name="search" size={18} className="text-uber-dark" />
            <Text
              style={{
                fontFamily: 'uber-medium',
              }}
              className="text-lg tracking-wider text-uber-dark">
              Where to?
            </Text>
          </View>

          <View className="bg-uber-light rounded-full p-2 flex-row items-center space-x-2">
            <Ionicons name="time" size={18} className="text-uber-dark" />
            <Text
              style={{
                fontFamily: 'uber-medium',
              }}
              className="text-uber-dark">
              Now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Page;
