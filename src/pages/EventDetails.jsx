import { Container, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // For now, we'll just use a placeholder for event details
  const event = {
    id,
    name: `Event ${id}`,
    description: `Details about Event ${id}`,
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">{event.name}</Heading>
        <Text fontSize="lg">{event.description}</Text>
        <Button colorScheme="teal" onClick={() => navigate("/")}>
          Back to Events
        </Button>
      </VStack>
    </Container>
  );
};

export default EventDetails;