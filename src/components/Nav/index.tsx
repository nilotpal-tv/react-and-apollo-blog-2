import { HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <HStack justifyContent="center" pt={8} gap={5}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          fontWeight: 'bold',
          color: isActive ? '#D2D3E0' : 'inherit',
        })}>
        Home
      </NavLink>
      <NavLink
        to="/episodes"
        style={({ isActive }) => ({
          fontWeight: 'bold',
          color: isActive ? '#D2D3E0' : 'inherit',
        })}>
        Episodes
      </NavLink>
    </HStack>
  );
};

export default Navigation;
