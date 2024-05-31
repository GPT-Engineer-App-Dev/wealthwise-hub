import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">Financial Times</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        {/* Main Articles Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <Box mb={8}>
            <Heading size="lg">Prominent Headline Article</Heading>
            <Text mt={4}>This is the main headline article. It has a larger font and more space to stand out.</Text>
          </Box>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading size="md">Smaller Article 1</Heading>
              <Text mt={2}>Summary of the smaller article 1.</Text>
            </Box>
            <Box>
              <Heading size="md">Smaller Article 2</Heading>
              <Text mt={2}>Summary of the smaller article 2.</Text>
            </Box>
            <Box>
              <Heading size="md">Smaller Article 3</Heading>
              <Text mt={2}>Summary of the smaller article 3.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading size="md" mb={4}>Trending Topics</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4}>
              <Text>Trending Topic 1</Text>
            </Box>
            <Box bg="gray.100" p={4}>
              <Text>Trending Topic 2</Text>
            </Box>
            <Box bg="gray.100" p={4}>
              <Text>Trending Topic 3</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <HStack spacing={8} mb={{ base: 4, md: 0 }}>
            <Link href="#" color="white">About</Link>
            <Link href="#" color="white">Contact</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
          <Spacer />
          <Text>&copy; 2023 Financial Times</Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;