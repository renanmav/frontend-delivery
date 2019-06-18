import styled from 'styled-components';

import { colors, metrics } from '~/styles';

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: ${metrics.contentWidth}px;

  padding: ${metrics.basePadding * 1.5}px ${metrics.basePadding * 6}px;

  h4 {
    font-weight: bold;
    color: ${colors.background};
    font-size: 18px;
  }
`;

export const Order = styled.div`
  width: 100%;
  box-shadow: 0px 0px 10px ${colors.darkTransparent};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin * 1.5}px;

  color: ${colors.background};

  #info {
    display: flex;
    flex-direction: column;

    padding-bottom: ${metrics.basePadding / 2}px;
    margin-bottom: ${metrics.baseMargin}px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    p {
      font-size: 18px;
    }

    span {
      font-size: 11px;
      line-height: 14px;
      color: ${colors.regular};
    }

    strong {
      font-size: 16px;
      margin-top: 5px;
    }
  }

  #produtos {
    display: flex;
    flex-wrap: wrap;
    flex: 1;

    padding-bottom: ${metrics.basePadding / 2}px;
    margin-bottom: ${metrics.baseMargin}px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  #obs {
    font-size: 14px;
    color: ${colors.dark};
  }
`;

export const Product = styled.div`
  display: flex;
  flex: 1;
  max-width: 200px;

  margin: ${metrics.baseMargin / 2}px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding / 2}px;

  img {
    height: 60px;
    margin-right: ${metrics.baseMargin}px;
  }

  p {
    font-size: 13px;
  }

  span {
    font-size: 11px;
    line-height: 10.77px;
    color: ${colors.dark};
  }
`;
