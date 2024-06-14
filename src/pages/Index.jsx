import { Container, VStack, Heading, Text, Button, Box, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const toast = useToast();

  const addEvent = () => {
    if (eventName.trim() === "") {
      toast({
        title: "Event name cannot be empty.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setEvents([...events, eventName]);
    setEventName("");
    toast({
      title: "Event added.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const removeEvent = (index) => {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
    toast({
      title: "Event removed.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Events Management</Heading>
        <Text fontSize="lg">Manage your events efficiently and effortlessly.</Text>
        <HStack width="100%">
          <Input
            placeholder="Enter event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addEvent}>
            Add Event
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {events.map((event, index) => (
            <Box key={index} width="100%" p={4} borderWidth="1px" borderRadius="md" display="flex" justifyContent="space-between" alignItems="center">
              <Text>{event}</Text>
              <Button size="sm" colorScheme="red" leftIcon={<FaTrash />} onClick={() => removeEvent(index)}>
                Remove
              </Button>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;