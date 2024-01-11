import { Image } from 'expo-image';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const services = [
  {
    name: 'Ride',
    image: require('../../assets/services/uber-ride.webp'),
  },
  {
    name: 'Food',
    image: require('../../assets/services/uber-ride.webp'),
  },
  {
    name: 'Packages',
    image: require('../../assets/services/uber-ride.webp'),
  },
  {
    name: 'Grocery',
    image: require('../../assets/services/uber-ride.webp'),
  },
  {
    name: 'Reserve',
    image: require('../../assets/services/uber-reserve.webp'),
  },
  {
    name: 'Transit',
    image: require('../../assets/services/uber-ride.webp'),
  },
  {
    name: 'Rent',
    image: require('../../assets/services/uber-rent.webp'),
  },
  {
    name: 'More',
    image: require('../../assets/services/uber-ride.webp'),
  },
];

function ServicesGrid() {
  return (
    <View>
      <View
        className="flex flex-row items-center flex-wrap justify-between"
        style={{
          gap: widthPercentageToDP('3'),
        }}>
        {services.map((service, index) => (
          <TouchableOpacity className="space-y-2" key={index}>
            <View
              style={{
                width: widthPercentageToDP('20'),
                height: heightPercentageToDP('7'),
              }}
              className="bg-uber-lightGray rounded-md flex items-center justify-center">
              <Image
                style={{
                  width: widthPercentageToDP('15'),
                  height: heightPercentageToDP('5'),
                }}
                source={services[0].image}
                placeholder="Uber Logo"
                transition={2000}
              />
            </View>
            <Text
              className="text-center"
              style={{
                fontFamily: 'uber-regular',
              }}>
              {service.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default ServicesGrid;
