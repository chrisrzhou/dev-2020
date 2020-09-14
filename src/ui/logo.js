import { Link } from 'gatsby';
import React from 'react';

import { Box, Text } from '~/ui';

export default function Logo() {
  return (
    <Text
      as={Link}
      to="/"
      sx={{
        fontSize: 3,
        ':hover': {
          color: 'primary',
        },
      }}>
      <Box as="span" color="primary">
        chris
      </Box>
      <Box as="span" color="light">
        r
      </Box>
      <Box as="span" color="secondary">
        zhou
      </Box>
    </Text>
  );
}
