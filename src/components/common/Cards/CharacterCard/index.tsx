import { Box, Card, CardBody, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { CharacterResult } from '../../../../types/character';
import Text from '../../Text';

type CharacterCardProps = {
  character: CharacterResult;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Link to={`/${character.id}`}>
      <Card
        border="1px"
        borderRadius="lg"
        bgColor="#242631"
        borderColor="whiteAlpha.200"
        w={{ base: '100%', lg: '300px' }}>
        <CardBody>
          <Image
            w="100%"
            borderRadius="md"
            src={character.image}
            alt={character.name + ' image'}
            h={{ base: '100%', lg: '200px' }}
          />
          <Box mt="15px">
            <Text>{character.name.toUpperCase()}</Text>
            <Text fontSize="11px" color="whiteAlpha.500" fontWeight="medium">
              {character.status.toUpperCase()}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CharacterCard;
