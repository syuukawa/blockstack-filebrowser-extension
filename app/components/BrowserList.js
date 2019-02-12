import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../StyledComponents/button';

const Wrapper = styled.section`
  color: white;
  position: relative;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 20px 0 25px;
  font-size: 18px;
`;

const List = styled.ul`
  margin-bottom: 10px;
  padding: 0;
  margin: 0;
  padding: 20px 20px 40px 25px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  background-color: #202228;
  border-radius: 4px;
  margin-bottom: 10px;

  &:hover {
    background-color: #141516;
  }
`;

const ItemName = styled.div`
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Size = styled.p`
  opacity: 0.5;
  margin: 0;
`;

class BrowserList extends Component {
  render() {
    const { data } = this.props;

    return (
      <Wrapper>
        <Header>
          {data.length}
          {' '}
          total files
        </Header>
        <List>
          {
            data.map(value => (
              <Link to="/users">
                <Item key={value}>
                  <ItemName>{value}</ItemName>
                  <Size>0kb</Size>
                </Item>
              </Link>
            ))
          }
        </List>
        <Button>Add File</Button>
      </Wrapper>
    );
  }
}

export default BrowserList;
