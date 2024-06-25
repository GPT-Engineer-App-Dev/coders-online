import React, { useState } from 'react';
import { Box, Button, VStack, Text, useToast } from '@chakra-ui/react';
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');
  const [output, setOutput] = useState('');
  const toast = useToast();

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    try {
      // This is a simple implementation. In a real-world scenario,
      // you'd want to use a secure sandboxed environment to run the code.
      const result = eval(code);
      setOutput(String(result));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      toast({
        title: "Error",
        description: "There was an error executing your code.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box height="400px" border="1px" borderColor="gray.200" borderRadius="md">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={code}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </Box>
      <Button colorScheme="blue" onClick={runCode}>Run Code</Button>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Text fontWeight="bold">Output:</Text>
        <Text>{output}</Text>
      </Box>
    </VStack>
  );
};

export default CodeEditor;