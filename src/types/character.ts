export type CharacterResult = {
  id: number;
  name: string;
  type: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  location: {
    id: string;
    name: string;
    residents: {
      id: string;
      name: string;
    }[];
  };
};
