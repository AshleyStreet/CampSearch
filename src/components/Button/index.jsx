import React from 'react';
import styled from 'styled-components';

class Button extends React.Component {
  render() {
      const { btnText, btnType } = this.props;
      const Button = styled.a`
            height: 45px;
            width: 214px;
            position: relative;
            display: inline-block;
        `;

      const ButtonText = styled.span`
        font-size: 18px;
        font-family: Helvetica, sans-serif;
        font-weight: bold;
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;

      let StyledButton;

      btnType === 'search' ?
        StyledButton = styled(Button) `
            background-color: #403E3B;

            &:after {
                content: '';
                color: #FFFFFF;
                position: absolute;
                background-color: #FFFFFF;
                height: 4px;
                width: 20px;
                top: 50%;
                right: 13%;
                transform: translate(50%, 50%);
            }
         `
         :
         StyledButton = styled(Button)`
            background-color: #344359;
          `;
    return (
        <StyledButton>
            <ButtonText>{btnText}</ButtonText>
        </StyledButton>
    )
  }
};
export default Button;
