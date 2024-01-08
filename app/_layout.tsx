import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/welcome',
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(welcome)/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
