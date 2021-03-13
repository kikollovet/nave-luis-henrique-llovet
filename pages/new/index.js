import React from 'react';
// import styled from 'styled-components';
import { Box } from '../../src/components/foundation/layout/Box';
import FormNaver from '../../src/components/foundation/patterns/FormNaver';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      width="100%"
      height="100%"
    >
      <FormNaver />
    </Box>
  );
}
