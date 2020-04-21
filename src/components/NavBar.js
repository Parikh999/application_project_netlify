import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class NavBar extends Component {
  render() {
    return(
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {
        /*https://www.iconfinder.com/search/?q=online+shopping&from=navbar&price=free
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" height="65" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              shopper's food cart
            </Link>
          </li>
        </ul>
        <div className="ml-auto">
          <Link to='/login'>
            <ButtonContainer>
              <span className="mr-1">
                Login
              </span>
            </ButtonContainer>
          </Link>
          <Link to='/cart'>
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-shopping-cart"/>
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background:var(--mainBlue);
  .nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
`;