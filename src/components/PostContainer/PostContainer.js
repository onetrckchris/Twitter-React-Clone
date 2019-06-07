import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

import { Icon } from '../NavBar/NavBar';
import { Search } from '../NavBar/NavBar';

import Post from './Post';

const PostContainerStyle = styled.div`
    width: 600px;

    ${tw`
        flex
        mt-2
        flex-col
        bg-white
        rounded
    `}
`;

const Header = styled.div``;

const HeaderTitle = styled.h1`
    border-bottom: 1px solid #E6ECF0;

    ${tw`
        text-lg
        text-black
        p-3
        m-0
    `}
`;

const Status = styled.div`
    border-bottom: 1px solid #E6ECF0;

    ${tw`
        py-3
        pr-4
        flex
    `}
`;

const PostContainer = props => {
    return (
        <PostContainerStyle>
            <Header>
                <HeaderTitle>Home</HeaderTitle>
                <Status>
                    <Icon user className="fas fa-user-circle fa-2x"></Icon>
                    <Search status placeholder="What's Happening?"></Search>
                </Status>
            </Header>
            {props.data.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </PostContainerStyle>
    )
}

export default PostContainer;