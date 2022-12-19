import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useEpisode from '../../hooks/useEpisode';
import Text from '../common/Text';

type EpisodeModalProps = {
  id: number;
  isOpen: boolean;
  onClose: () => void;
};

const EpisodeModal: React.FC<EpisodeModalProps> = ({ isOpen, onClose, id }) => {
  const { data, error, loading } = useEpisode({ id });

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay
        bg="rgba(29, 30, 43, 0.3)"
        backdropFilter="auto"
        backdropInvert="10%"
        backdropBlur="2px"
      />
      <ModalContent bgColor="#191A23">
        <ModalHeader fontSize="20px">
          {error ? 'An error occurred' : data?.name.toUpperCase()}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {error && <Text>{error}</Text>}
          {loading && (
            <>
              <Skeleton size="10" h="10px" mb="2" w="60%" />
              <Skeleton size="10" h="10px" mb="2" w="50%" />
              <Skeleton size="10" h="10px" w="30%" />
            </>
          )}
          {!error && !loading && (
            <>
              <Text>{data?.episode}</Text>
              <Text>Aired on {data?.air_date}</Text>
              <Text mt="10px" mb="8px">
                Characters
              </Text>
              <Flex gap={1} flexWrap="wrap">
                {data?.characters.map((character) => (
                  <Link to={`/${character.id}`} key={character.id}>
                    <Tag size="sm" variant="subtle" colorScheme="whiteAlpha">
                      <TagLabel>{character.name}</TagLabel>
                    </Tag>
                  </Link>
                ))}
              </Flex>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button size="sm" colorScheme="cyan" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EpisodeModal;
