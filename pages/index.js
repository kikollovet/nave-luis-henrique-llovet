import React from 'react';
// import styled from 'styled-components';
import { Box } from '../src/components/foundation/layout/Box';
import FormLogin from '../src/components/foundation/patterns/FormLogin';

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
      <FormLogin />
    </Box>
  );
}
