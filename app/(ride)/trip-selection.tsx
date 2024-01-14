import LocationProvider from 'components/location-provider';
import PlacesList from 'components/trip/places-list';
import useTripStore from 'hooks/useTrip';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

function TripLocation() {
  const [activeInput, setActiveInput] = useState<'pickup' | 'destination' | undefined>();
  const { destination, origin } = useTripStore();

  const [originText, setOriginText] = useState<string>(origin);
  const [destinationText, setDestinationText] = useState<string>(destination);

  console.log('originText', originText);

  const onLocationSelect = () => {
    setActiveInput(undefined);
  };

  return (
    <SafeAreaView className="flex-1 bg-uber-light justify-between">
      <LocationProvider>
        <View
          className="py-5 space-y-5"
          style={{
            paddingHorizontal: widthPercentageToDP('5'),
          }}>
          <TextInput
            onFocus={() => setActiveInput('pickup')}
            value={originText}
            onChangeText={(text) => setOriginText(text)}
            placeholder="Pickup Location"
            style={{
              fontFamily: 'uber-medium',
              fontSize: 18,
            }}
            className="w-full rounded-md bg-uber-lightGray p-3"
          />

          <TextInput
            onFocus={() => setActiveInput('destination')}
            value={destinationText}
            onChangeText={(text) => setDestinationText(text)}
            placeholder="Destination"
            style={{
              fontFamily: 'uber-medium',
              fontSize: 18,
            }}
            className="w-full rounded-md bg-uber-lightGray p-3"
          />

          {activeInput === 'pickup' ? (
            <PlacesList textQuery="" onLocationSelect={onLocationSelect} queryType="pickup" />
          ) : activeInput === 'destination' ? (
            <PlacesList textQuery="" onLocationSelect={onLocationSelect} queryType="destination" />
          ) : null}
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
      </LocationProvider>
    </SafeAreaView>
  );
}

export default TripLocation;
