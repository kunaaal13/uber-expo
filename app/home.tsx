import { useAuth, useUser } from '@clerk/clerk-expo';
import { Text, TouchableOpacity, View } from 'react-native';

function Page() {
  const { user } = useUser();
  const { signOut } = useAuth();

  if (!user) {
    return null;
  }
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        onPress={() => {
          signOut();
        }}
        className="bg-uber-blue p-4 text-white">
        <Text className="text-uber-bold text-2xl">Logout</Text>
      </TouchableOpacity>

      <Text className="text-uber-bold text-2xl">Welcome {user.firstName}</Text>
    </View>
  );
}

export default Page;
