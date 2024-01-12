import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

function TripLocation() {
  return (
    <SafeAreaView className="flex-1 bg-uber-light justify-between">
      <View
        className="py-5 space-y-5"
        style={{
          paddingHorizontal: widthPercentageToDP('5'),
        }}>
        <TextInput
          placeholder="Pickup Location"
          style={{
            fontFamily: 'uber-medium',
            fontSize: 18,
          }}
          className="w-full rounded-md bg-uber-lightGray p-3"
        />

        <TextInput
          placeholder="Destination"
          style={{
            fontFamily: 'uber-medium',
            fontSize: 18,
          }}
          className="w-full rounded-md bg-uber-lightGray p-3"
        />
      </View>

      <View
        className="py-5"
        style={{
          paddingHorizontal: widthPercentageToDP('5'),
        }}>
        <TouchableOpacity
          // onPress={handleLogin}
          className="bg-uber-dark flex-row justify-center items-center py-3 px-3 rounded-xl">
          <Text
            style={{
              fontFamily: 'uber-medium',
            }}
            className="text-uber-light text-xl tracking-wider">
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default TripLocation;
