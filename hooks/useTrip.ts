import { create } from 'zustand';

interface TripState {
  origin: string;
  originCoords: number[];

  destination: string;
  destinationCoords: number[];

  setOrigin: (origin: string, coords: number[]) => void;
  setDestination: (destination: string, coords: number[]) => void;
}

const useTrip = create<TripState>()((set) => ({
  origin: '',
  originCoords: [],

  destination: '',
  destinationCoords: [],

  setOrigin: (origin: string, coords: number[]) => {
    set({ origin, originCoords: coords });
  },

  setDestination: (destination: string, coords: number[]) => {
    set({ destination, destinationCoords: coords });
  },
}));

export default useTrip;
