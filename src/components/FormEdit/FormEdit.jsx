import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import { selectContactById } from 'redux/contacts/selectors';

import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';

export default function FormEdit({ currentContactId, onClose }) {
  const dispatch = useDispatch();
  const currentContact = useSelector(state =>
    selectContactById(state, currentContactId)
  );
  return (
    <Flex bg="gray.100" align="center" justify="center">
      <Box bg="white" p={6} rounded="md" w={500}>
        <Formik
          initialValues={{
            name: currentContact ? currentContact.name : '',
            number: currentContact ? currentContact.number : '',
          }}
          onSubmit={values => {
            dispatch(updateContact({ id: currentContactId, values }));
            onClose();
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="number">Number</FormLabel>
                  <Field
                    as={Input}
                    id="number"
                    name="number"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="purple" width="full">
                  Save
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
