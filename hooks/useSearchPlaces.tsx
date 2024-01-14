// Hook to fetch places from Google Maps API and return the results making text input autocomplete

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type Place = {
  business_status: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  };
  photos: Array<{
    height: number;
    html_attributions: Array<string>;
    photo_reference: string;
    width: number;
  }>;
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  price_level?: number;
  rating: number;
  reference: string;
  scope: string;
  types: Array<string>;
  user_ratings_total: number;
  vicinity: string;
};

async function fetchPlaces(textQuery: string) {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://map-places.p.rapidapi.com/nearbysearch/json',
  //     params: {
  //       location: '-33.8670522,151.1957362',
  //       radius: '1500',
  //       keyword: 'cruise',
  //       type: 'restaurant',
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': '',
  //       'X-RapidAPI-Host': 'map-places.p.rapidapi.com',
  //     },
  //   };

  //   const response = await axios.request<{
  //     html_attributions: string[];
  //     results: Place[];
  //     status: string;
  //   }>(options);

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${textQuery}.json`;
  console.log('url', url);

  const response = await axios.get(url, {
    params: {
      access_token: '',
    },
  });

  return response.data;
}

function useSearchPlaces(textQuery: string) {
  const query = useQuery({
    queryKey: ['places', textQuery],
    queryFn: () => fetchPlaces(textQuery),
  });

  console.log('query', query);

  return {
    places: query.data ? query.data.results : [],
    query,
  };
}

export default useSearchPlaces;
