import { Image } from 'expo-image';
import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { pastTrips } from 'utils/constants';

function Page() {
  return (
    <SafeAreaView className="flex-1 items-center">
      <View
        style={{
          width: widthPercentageToDP('92'),
        }}
        className="space-y-5">
        <Text
          className="text-3xl tracking-wider"
          style={{
            fontFamily: 'uber-bold',
          }}>
          Activity
        </Text>

        <ScrollView className="space-y-5" showsVerticalScrollIndicator={false}>
          <Text
            className="text-xl"
            style={{
              fontFamily: 'uber-medium',
            }}>
            Upcoming trips
          </Text>

          <View className="border-2 border-uber-lightGray rounded-lg p-3 flex-row items-center justify-between">
            <Text
              className="w-1/2 text-lg"
              style={{
                fontFamily: 'uber-medium',
              }}>
              You have no upcoming trips.
            </Text>

            <Image source={require('../../assets/services/uber-ride.webp')} className="h-20 w-24" />
          </View>

          <Text
            className="text-xl"
            style={{
              fontFamily: 'uber-medium',
            }}>
            Past trips
          </Text>

          {pastTrips.map((trip) => (
            <View className="flex-row items-start space-x-5" key={trip.id}>
              <View className="rounded-md bg-uber-lightGray flex items-center justify-center p-4">
                <Image source={trip.image} className="h-8 w-12" />
              </View>

              <View className="flex-col">
                <Text
                  className="text-base"
                  style={{
                    fontFamily: 'uber-medium',
                  }}>
                  {trip.destination}
                </Text>

                <Text
                  className="text-sm"
                  style={{
                    fontFamily: 'uber-regular',
                  }}>
                  {trip.date.toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}{' '}
                  at{' '}
                  {trip.date.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Page;
