import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box bg="teal.500" py={4}>
      <Flex maxW="container.lg" mx="auto" justifyContent="space-between" alignItems="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="xl">
          CodeMaster Academy
        </Link>
        <Flex>
          <Link as={RouterLink} to="/" color="white" mr={4}>
            Home
          </Link>
          <Link as={RouterLink} to="/courses" color="white">
            Courses
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;