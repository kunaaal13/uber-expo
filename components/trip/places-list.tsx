import { useLocation } from 'components/location-provider';
import useDebounce from 'hooks/useDebounce';
import useSearchPlaces from 'hooks/useSearchPlaces';
import { Text, View } from 'react-native';

interface PlacesListProps {
  textQuery: string;
  onLocationSelect: () => void;
  queryType: 'pickup' | 'destination';
}

function PlacesList({ textQuery, onLocationSelect }: PlacesListProps) {
  const currentLocation = useLocation();

  // const debouncedTextQuery = useDebounce(textQuery, 2000);

  // console.log('debouncedTextQuery', debouncedTextQuery.length);

  const { places, query } = useSearchPlaces(textQuery);
  console.log('places', places);

  return (
    <View>
      <Text>PlacesList</Text>
    </View>
  );
}

export default PlacesList;
