import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    height: 50px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
`;

const Menu = styled.ul`
    display: flex;
`;
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    list-style: none;
`;

const Button = styled.button`
    border: 2px solid white;
    background-color: crimson;
    padding: 10px 15px;
    font-weight: bold;
    border-radius: 10px;
    color: white;
    cursor: pointer;
`;

export const Navbar = () => {
  return (
    <Container> 
        <Wrapper>
            <Left>
                <Logo>Agency</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact Us</MenuItem>
                </Menu>
            </Left>  
            <Button>JOIN NOW</Button>
        </Wrapper>
    </Container>
  )
}
