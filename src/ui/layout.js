import React from 'react';

import { Box, Flex, Footer, Nav } from '~/ui';

export default function Layout({ children }) {
  return (
    <Flex
      flexDirection="column"
      mx="auto"
      px={4}
      space={4}
      sx={{ maxWidth: 840, minHeight: '100vh' }}>
      <Nav />
      <Box sx={{ flex: '1 1 auto' }}>{children}</Box>
      <Footer />
    </Flex>
  );
}
