import React, { useState } from 'react';
import { Container, Heading, SimpleGrid, Box, Text, Button, useToast } from '@chakra-ui/react';

const coursesData = [
  { id: 1, title: 'Introduction to Programming', description: 'Learn the basics of programming' },
  { id: 2, title: 'Web Development Fundamentals', description: 'Master HTML, CSS, and JavaScript' },
  { id: 3, title: 'Data Structures and Algorithms', description: 'Enhance your problem-solving skills' },
];

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const toast = useToast();

  const handleEnroll = (courseId) => {
    if (enrolledCourses.includes(courseId)) {
      toast({
        title: 'Already enrolled',
        description: 'You are already enrolled in this course',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    } else {
      setEnrolledCourses([...enrolledCourses, courseId]);
      toast({
        title: 'Enrollment successful',
        description: 'You have successfully enrolled in the course',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Available Courses
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {coursesData.map((course) => (
          <Box key={course.id} borderWidth={1} borderRadius="lg" p={6}>
            <Heading as="h3" size="lg" mb={2}>
              {course.title}
            </Heading>
            <Text mb={4}>{course.description}</Text>
            <Button
              colorScheme={enrolledCourses.includes(course.id) ? 'green' : 'blue'}
              onClick={() => handleEnroll(course.id)}
            >
              {enrolledCourses.includes(course.id) ? 'Enrolled' : 'Enroll Now'}
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Courses;