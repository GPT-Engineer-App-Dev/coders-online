import { Container, Text, VStack, Heading, Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaCode, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CodeMaster Academy
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your journey to becoming a coding expert starts here. Learn, practice, and master coding with our comprehensive courses.
        </Text>
        <Flex width="100%" justifyContent="space-around" flexWrap="wrap">
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" width="250px">
            <FaCode size="3em" />
            <Heading as="h3" size="md" mt={4}>
              Learn
            </Heading>
            <Text mt={2}>
              Access a variety of coding courses designed for all skill levels.
            </Text>
          </Box>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" width="250px">
            <FaChalkboardTeacher size="3em" />
            <Heading as="h3" size="md" mt={4}>
              Practice
            </Heading>
            <Text mt={2}>
              Engage in hands-on coding exercises and real-world projects.
            </Text>
          </Box>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md" width="250px">
            <FaLaptopCode size="3em" />
            <Heading as="h3" size="md" mt={4}>
              Master
            </Heading>
            <Text mt={2}>
              Achieve mastery through continuous learning and improvement.
            </Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg" mt={8} onClick={() => navigate('/courses')}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;