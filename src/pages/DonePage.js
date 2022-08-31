import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import { TiTick } from "react-icons/ti";

const DonePage = () => {
  return (
    <DoneContainer>
      <Image src={process.env.PUBLIC_URL + "/logo_on_white.png"} />
      <ConfirmBox>
        <div><TiTick size={50} color={"green"}/></div>
            <SuccessTitle>Account created successfully</SuccessTitle>
            <SuccessStory>Go to the home page and login from there</SuccessStory>
      </ConfirmBox>
      <HomeBtn href='https://alricantoken.com'>Go to homepage</HomeBtn>
    </DoneContainer>
  )
}


export const HomeBtn = styled.a`
    font-family: Roboto, sans-serif;
    color: #01050f;
    margin: 15px 0 8px 0;
    background-color: ${colors.accent};
    color: #fff;
    padding: 12px;
    text-decoration: none;
    border-radius: 6px;
    transition: all .25s ease-in-out;
    :hover {
        opacity: .5;
    }
`;
export const SuccessStory = styled.p`
    font-family: Roboto, sans-serif;
    color: #01050f;
    margin: 15px 0 8px 0;
`;
export const SuccessTitle = styled.h3`
    font-family: Inter, sans-serif;
    color: ${colors.accent};
    margin: 0;
    text-transform: uppercase;
`;
export const DoneContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ConfirmBox = styled.div`
    background-color:${colors.accentShadow};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    border-top: 3px solid ${colors.accent};
`;
export const Image = styled.img`
    max-width: 300px;
`;

export default DonePage
