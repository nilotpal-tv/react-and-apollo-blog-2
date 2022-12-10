export type CharacterResult = {
  id: number;
  name: string;
  type: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  episode: {
    id: number;
    name: string;
    air_date: string;
  };
  location: {
    id: string;
    name: string;
    residents: {
      id: string;
      name: string;
      image: string;
    };
  };
};
