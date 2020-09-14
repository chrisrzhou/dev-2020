import { Link } from 'gatsby';
import React from 'react';

import { Flex, Logo } from '~/ui';

export default function Nav() {
  return (
    <Flex alignItems="baseline" justifyContent="space-between" py={3} space={4}>
      <Logo />
      <Flex flex="1 1 auto" justifyContent="space-between" space={3}>
        <Flex space={3}>
          <Link to="/about">About</Link>
        </Flex>
        <Flex space={3}>
          <a href="https://github.com/chrisrzhou/dev-2020">GitHub</a>
        </Flex>
      </Flex>
    </Flex>
  );
}
