import { Card, CardBody } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { EpisodeResult } from '../../../../types/episode';
import Text from '../../Text';

type EpisodeCardProps = {
  episode: EpisodeResult;
};

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <Link to={`/episodes/${episode.id}`}>
      <Card
        border="1px"
        borderRadius="md"
        borderColor="whiteAlpha.200"
        h="110px"
        w="300px"
        boxShadow="rgb(0 0 0 / 15%) 0px 16px 70px"
        transition="all .2s ease"
        _hover={{ transform: 'scale(1.05)' }}>
        <CardBody display="flex" flexDir="column" justifyContent="center">
          <Text>{episode.name.toUpperCase()}</Text>
          <Text
            fontSize="11px"
            color="whiteAlpha.500"
            fontWeight="medium"
            my="1">
            {episode.episode.toUpperCase()}
          </Text>
          <Text fontSize="11px" color="whiteAlpha.500" fontWeight="medium">
            {episode.air_date}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default EpisodeCard;
