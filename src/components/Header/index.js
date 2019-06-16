import React from 'react';

import styled from 'styled-components';

import { colors } from '../../styles';

const Container = styled.div`
  width: 100%;
  height: 72px;
  background: ${colors.background};
`;

export default function Header() {
  return <Container />;
}
