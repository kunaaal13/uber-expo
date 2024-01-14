import { Ionicons } from '@expo/vector-icons';
import LocationProvider from 'components/location-provider';
import { Stack, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="trip-selection"
        options={{
          headerTitle: 'Plan your trip',
          headerTitleStyle: {
            fontFamily: 'uber-medium',
            fontSize: 18,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push('/(tabs)/')}>
              <Ionicons name="chevron-back" size={20} />
            </TouchableOpacity>
          ),
          headerBlurEffect: 'systemMaterial',
        }}
      />
    </Stack>
  );
}

export default Layout;
