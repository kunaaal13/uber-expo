import * as Location from 'expo-location';
import { createContext, useContext, useEffect, useState } from 'react';

// Context API
const LocationContext = createContext<Location.LocationObject | null>(null);

interface LocationProviderProps {
  children: React.ReactNode;
}

function LocationProvider({ children }: LocationProviderProps) {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  console.log('🚀 ~ LocationProvider ~ location:', location);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return <LocationContext.Provider value={location}>{children}</LocationContext.Provider>;
}

export default LocationProvider;

// useLocation hook to get location
export function useLocation() {
  const location = useContext(LocationContext);

  if (!location) {
    throw new Error('useLocation must be used within a LocationProvider');
  }

  return location;
}
