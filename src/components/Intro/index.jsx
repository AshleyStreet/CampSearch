import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

class Intro extends React.Component {
  render() {
    const Wrapper = styled.div`
        height: 427px;
        padding-top: 50px;
        background-color: red;
        text-align: center;
    `;

    const TitleWrapper = styled.div`
        border-top: 1px solid #FFFFFF;
        border-bottom: 1px solid #FFFFFF;
        padding: 10px 0;
        text-align: center;
        width: 90%;
        margin: 0 auto;
    `;

    const Title = styled.h1`
        color: #FFFFFF;
        font-size: 32px;
        font-family: Helvetica, sans-serif;
        font-weight: bold;
        margin: 0;
    `;

    const Subheading = styled.h2`
        color: #FFFFFF;
        font-size: 26px;
        font-family: Helvetica, sans-serif;
        font-weight: bold;
        text-align: center;
        padding-top: 26px;
        margin: 0 auto;
        width: 60%;z
    `;

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>CAMPSEARCH</Title>
            </TitleWrapper>
            <Subheading>UNDERTAKE YOUR NEXT EXPERIENCE</Subheading>
            <Button
                btnText = "Search Now"
                btnType = "search"
            />
        </Wrapper>
    )
  }
};
export default Intro;
