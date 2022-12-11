import { Box, Card, CardBody, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterResult } from '../../../types/character';

type CharacterCardProps = {
  character: CharacterResult;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Link to={`/${character.id}`}>
      <Card
        border="1px"
        borderRadius="lg"
        borderColor="whiteAlpha.200"
        w={{ base: '100%', lg: '300px' }}>
        <CardBody>
          <Image
            w="100%"
            borderRadius="md"
            src={character.image}
            alt={character.name + ' image'}
            h={{ base: '100%', lg: '230px' }}
          />
          <Box mt="15px">
            <Text color="gray.300" fontWeight="bold">
              {character.name}
            </Text>
            <Text fontSize="13px" color="whiteAlpha.500" fontWeight="medium">
              {character.status}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CharacterCard;
