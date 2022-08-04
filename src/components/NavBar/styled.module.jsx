import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  background-color: #acacac;

  text-decoration: none;
  box-shadow: 0px 3px 20px #7a7a7a;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
`;

export const WellcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    margin-right: 10px;

    font-size: 16px;
    font-weight: 300;
    margin-top: 0px;
    letter-spacing: 2px;
    font-weight: 300;
    color: white;

    text-decoration: inherit;

    text-shadow: 1px 1px 0 #7a7a7a;
  }

  & button {
    padding: 3px 10px;
    border-radius: 5px;

    background-color: white;
    color: #acacac;
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: 1px;

    border: none;
    cursor: pointer;
    box-shadow: -10px 0px 13px -7px #fcfbfb, 10px 0px 13px -7px #fffefe,
      5px 5px 15px 5px rgba(255, 254, 254, 0.486);

    text-shadow: 0 0 10px #ffffff;
  }
`;

export const MyNavLink = styled(NavLink)`
  padding: 5px 10px;
  margin-right: 20px;

  font-size: 16px;
  font-weight: 300;
  margin-top: 0px;
  letter-spacing: 2px;
  font-weight: 300;
  color: white;

  text-decoration: inherit;

  text-shadow: 1px 1px 0 #7a7a7a;
  &.active {
    border: 1px solid white;
    border-radius: 10px;

    box-shadow: 2px 2px 2px 0px white, inset 2px 2px 10px 0px white,
      2px 2px 10px 5px rgba(0, 0, 0, 0);
  }
`;
