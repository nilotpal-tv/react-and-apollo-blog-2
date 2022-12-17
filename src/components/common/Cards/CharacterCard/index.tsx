import { Card, CardBody, HStack, Image } from '@chakra-ui/react';
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
        borderRadius="md"
        transition="all .2s ease"
        borderColor="whiteAlpha.200"
        w="300px"
        _hover={{ transform: 'scale(1.05)' }}
        boxShadow="rgb(0 0 0 / 15%) 0px 16px 70px">
        <CardBody display="flex" flexDir="column" justifyContent="center">
          <HStack gap={4} h="70px">
            <Image
              src={character.image}
              w="50px"
              h="50px"
              borderRadius="full"
            />
            <div>
              <Text>{character.name.toUpperCase()}</Text>
              <Text fontSize="11px" color="whiteAlpha.500" fontWeight="medium">
                {character.gender.toUpperCase()}
              </Text>
              <Text fontSize="11px" color="whiteAlpha.500" fontWeight="medium">
                {character.status.toUpperCase()}
              </Text>
            </div>
          </HStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CharacterCard;
