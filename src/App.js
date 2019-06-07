import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

import NavBar from './components/NavBar/NavBar';
import PostContainer from './components/PostContainer/PostContainer';
import twitterDummyData from './twitter-dummy-data';

const AppStyled = styled.div`
  ${tw`
    flex
    flex-col
    items-center
  `}
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: twitterDummyData
    }
  }

  render() {
    return (
      <AppStyled>
        <NavBar />
        <PostContainer data={this.state.data} />
      </AppStyled>
    )
  }
}

export default App;
