import React from 'react';
import { Box } from '@chakra-ui/react';
import Select from 'react-select';

export interface MultiSelectProps {
  list: [];
  ref?: any;
  noOptionsMessage?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  return (
    <>
      <Box>
        <Select
          ref={props.ref}
          isMulti
          options={props.list}
          noOptionsMessage={() => {
            return props.noOptionsMessage;
          }}
        />
      </Box>
    </>
  );
};
