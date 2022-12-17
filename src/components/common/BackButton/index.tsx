import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, ButtonProps } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC<ButtonProps> = (props) => {
  const navigate = useNavigate();

  return (
    <Button
      size="sm"
      bgColor="#666BE2"
      color="blackAlpha.900"
      onClick={() => navigate(-1)}
      _hover={{ bgColor: '#666ae2d4' }}
      {...props}>
      <ArrowBackIcon />
    </Button>
  );
};

export default BackButton;
