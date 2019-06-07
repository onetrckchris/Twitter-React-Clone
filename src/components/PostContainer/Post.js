import React from 'react';
import styled, { css } from 'styled-components/macro';
import tw from 'tailwind.macro';

import { Icon } from '../NavBar/NavBar';

const IndividualPost = styled.div`
    border-bottom: 1px solid #E6ECF0;

    ${tw`
        flex
        flex-col
        p-3
        pb-5
    `}
`;

const PostHeader = styled.div`
    ${tw`
        flex
    `}
`;

const Thumbnail = styled.img`
    ${tw`
        rounded-full
        h-12
    `}
`;

const PostContent = styled.div`
    ${tw`
        pl-3
    `}

    ${props => 
        props.bottomContent &&
        css`
            padding-left: 60px;
        `
    }
`;

const PostUsername = styled.h4`
    font-size: 0.9rem;

    ${tw`
        m-0
    `}
`;

const Handle = styled.span`
    color: #657685;

    ${tw`
        font-normal
    `}
`;

const PostText = styled.h4`
    font-size: 0.9rem;

    ${tw`
        mt-1
        font-normal
    `}
`;

const Hashtag = styled.span`
    font-size: 0.9rem;

    ${tw`
        m-0
        font-medium
        text-blue-500
    `}
`;

const PostImg = styled.img`
    ${tw`
        w-full
        rounded-lg
        mb-4
    `}
`;

const IconData = styled.span`
    color: #657685;

    ${tw`
        mr-10
    `}
`;

const Post = props => {
    return (
        <IndividualPost>
            <PostHeader>
                <Thumbnail src={props.post.thumbnailUrl} />
                <PostContent>
                    <PostUsername>{props.post.username}{' '}<Handle>{props.post.handle}</Handle></PostUsername>
                    <PostText>{props.post.postText} {props.post.hashtags.map(hashtag => (
                        <Hashtag key={hashtag.id}>{hashtag.text}</Hashtag>
                    ))}</PostText>
                </PostContent>
            </PostHeader>
            <PostContent bottomContent>
                <PostImg src={props.post.imageUrl} />
                <Icon bottomIcon className="far fa-comment fa-lg"></Icon>
                <IconData>{props.post.comments}</IconData>
                <Icon bottomIcon className="fas fa-retweet fa-lg"></Icon>
                <IconData>{props.post.retweets}</IconData>
                <Icon bottomIcon className="far fa-heart fa-lg"></Icon>
                <IconData>{props.post.likes}</IconData>
            </PostContent>
        </IndividualPost>
    )
}

export default Post;