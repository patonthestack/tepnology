import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  FormErrorMessage,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { Container, Layout, MultiSelect } from 'components/index';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

const MultiSelectPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    control,
    reset,
  } = useForm();

  const selectRef = useRef();
  const [
    selectedOptionsTechnologies,
    setSelectedOptionsTechnologies,
  ] = useState([]);

  // TODO make this a dynamic list that the admin can generate
  const technologiesList = [
    { value: 'Java', label: 'Java' },
    { value: 'Node', label: 'Node' },
    { value: 'React', label: 'React' },
    { value: 'Python', label: 'Python' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'AWS', label: 'AWS' },
    { value: 'Firebase', label: 'Firebase' },
    { value: 'Oracle', label: 'Oracle' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'DynamoDB', label: 'DynamoDB' },
  ].sort((a, b) => (a.value > b.value ? 1 : -1));

  const handleOnChangeTechnologies = (options) => {
    setSelectedOptionsTechnologies(options);
  };

  return (
    <Layout
      title="Multi-Select"
      description="multi-select"
      canonical="/features/multi-select"
      hasNavbar
      hasFooter
      schemaData={null}
    >
      <Container fluid>
        <Heading
          mt={20}
          fontWeight="700"
          fontSize="2em"
          as="h3"
          textAlign={['center', 'center', 'center', 'center']}
        >
          Multi-Select
        </Heading>
        <Text textAlign={['center', 'center', 'center', 'center']}>
          When you need to select and store multiple values
        </Text>
        <Box>
          <FormControl>
            <FormLabel htmlFor="technologies">Select Technologies</FormLabel>
            <Controller
              as={
                <Select
                  ref={selectRef}
                  isMulti
                  options={technologiesList}
                  noOptionsMessage={() => {
                    return 'No further technologies to select';
                  }}
                />
              }
              onChange={handleOnChangeTechnologies}
              name="technologies"
              control={control}
              ref={register({
                required: 'Please select at least one technology.',
              })}
            />

            {errors.teamMembers && (
              <FormErrorMessage>{errors.teamMembers}</FormErrorMessage>
            )}
          </FormControl>
        </Box>
      </Container>
    </Layout>
  );
};

export default MultiSelectPage;
