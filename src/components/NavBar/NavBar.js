import React from 'react';
import styled, { css } from 'styled-components/macro';
import tw from 'tailwind.macro';

const Navbar = styled.div`
    border-bottom: 1px solid #B2B2B2;

    ${tw`
        w-full
        bg-white
        h-12
        flex
        justify-center
        items-center
        py-1
        fixed
    `};
`;

export const Search = styled.input`
    background-color: #E6ECF0;

    ${tw`
        border-none
        w-2/6
        text-base
        rounded-full 
        py-2
        px-4
        outline-none
    `}

    ${props => 
        props.status &&
        css`
            width: 100%;
        `
    }
`;

export const Icon = styled.i`
    color: #657685;

    &:hover {
        color: #1EA1F2;
    }

    ${tw`
        mr-16
    `}

    ${props =>
        props.active &&
        css`
            color: #1EA1F2;
        `
    }

    ${props => 
        props.user &&
        css`
            margin-left: 1rem;
            margin-right: 0.5rem;
        `
    }

    ${props => 
        props.bottomIcon &&
        css`
            margin-left: 0;
            margin-right: 0.5rem;
        `
    }

    ${props =>
        props.retweet &&
        css`
            &:hover {
                color: #17BF63;
            }
        `
    }

    ${props =>
        props.like &&
        css`
            &:hover {
                color: #E23066;
            }
        `
    }

    ${props =>
        props.nohover &&
        css`
            &:hover {
                color: #657685;
            }
        `
    }
`;

const Username = styled.p`
    ${tw`
        font-bold
    `}
`;

const Flexdiv = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const NavBar = () => {
    return (
        <Navbar>
            <div>
                <Icon active className="fas fa-home fa-lg"></Icon>
                <Icon className="fas fa-hashtag fa-lg"></Icon>
                <Icon className="fas fa-bell fa-lg"></Icon>
                <Icon className="fas fa-envelope fa-lg"></Icon>
            </div>
            <Search placeholder="Search Twitter" />
            <Flexdiv>
                <Icon user nohover className="fas fa-user-circle fa-2x"></Icon>
                <Username>Chris</Username>
            </Flexdiv>
        </Navbar>
    )
}

export default NavBar;