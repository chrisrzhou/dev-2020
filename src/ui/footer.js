import React from 'react';

import { Flex, Text } from '~/ui';

export default function Footer() {
  return (
    <Flex mt={6} py={3}>
      <Text color="light" variant="small">
        © 2020 <a href="https://github.com/chrisrzhou">Chris Zhou</a>
      </Text>
    </Flex>
  );
}
