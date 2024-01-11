export type RideOption = {
  id: number;
  title: string;
  multiplier: number;
  image: string;
  passengers: number;
};

export const rideOptions: RideOption[] = [
  {
    id: 1,
    title: 'Uber XL',
    multiplier: 2.3,
    image: 'https://links.papareact.com/3pn',
    passengers: 5,
  },
  {
    id: 2,
    title: 'Uber Moto',
    multiplier: 1.3,
    image: 'https://links.papareact.com/3pn',
    passengers: 1,
  },
  {
    id: 3,
    title: 'Uber Comfort',
    multiplier: 1.5,
    image: 'https://links.papareact.com/3pn',
    passengers: 3,
  },
  {
    id: 4,
    title: 'Uber Black',
    multiplier: 5,
    image: 'https://links.papareact.com/3pn',
    passengers: 2,
  },
  {
    id: 5,
    title: 'Uber Auto',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
    passengers: 2,
  },
  {
    id: 6,
    title: 'Uber Black SUV',
    multiplier: 6,
    image: 'https://links.papareact.com/3pn',
    passengers: 5,
  },
];

export type PastTrip = {
  id: string;
  destination: string;
  image: string;
  date: Date;
  cost: number;
};

// Function to generate random past trips
const generateRandomPastTrip = (rideOption: RideOption): PastTrip => {
  const destinations = [
    'Connaught Place',
    'India Gate',
    'Rajiv Chowk',
    'Karol Bagh',
    'Chandni Chowk',
    'Select City Walk',
  ];
  const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];

  // Random date in last 30 days, and random time in 24 hours
  const randomDate = new Date(
    Date.now() -
      Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000) -
      Math.random() * 24 * 60 * 60 * 1000
  );

  const cost = Math.floor(Math.random() * 100) + 50; // Random cost within a range

  return {
    id: Math.random().toString(36).substr(2, 9), // Random string as ID
    destination: randomDestination + ', Delhi, India',
    image: rideOption.image,
    date: randomDate,
    cost: cost * rideOption.multiplier,
  };
};

// Generate an array of random past trips
export const pastTrips: PastTrip[] = rideOptions.map(generateRandomPastTrip).sort((a, b) => {
  return b.date.getTime() - a.date.getTime();
});
