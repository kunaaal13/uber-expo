import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from 'utils/colors';

function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark,
        tabBarStyle: {
          height: heightPercentageToDP('9.5'),
          paddingVertical: 5,
          backgroundColor: '#fff',
          elevation: 4,
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 1,
          shadowOffset: {
            width: 1,
            height: 1,
          },
        },
        tabBarItemStyle: {
          gap: 5,
        },
        tabBarLabelStyle: {
          fontFamily: 'uber-medium',
          fontSize: 14,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ios-home-sharp" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="activity"
        options={{
          headerShown: false,
          tabBarLabel: 'Activity',
          tabBarIcon: ({ size, color }) => <Ionicons name="albums" size={20} color={color} />,
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size, color }) => <Ionicons name="ios-person" size={20} color={color} />,
        }}
      />
    </Tabs>
  );
}

export default Layout;
