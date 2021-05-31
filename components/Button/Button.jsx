import React from 'react';
import styled from "styled-components/native";

export const Button = ({children,style}) => {
    return (
        <ButtonWrapper style={style}>
            <ButtonText>{children}</ButtonText>
        </ButtonWrapper>
    );
};

const ButtonText  = styled.Text`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
`

const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #2A86FF;
  color: #fff;
  text-align: center;
  height: 45px;
`