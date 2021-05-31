import styled,{css} from "styled-components/native";
import React from "react";

export const Badge = ({text,active,style,type = "blue"}) => {
    return <DateContainer active={active} style={style} type={type}>
        <GroupDate type={type} active={active}>{text}</GroupDate>
    </DateContainer>
}

const DateContainer = styled.View`
  background:${props => props.active ? "#2a86ff" : "#e9f5ff"}
  border-radius: 18px;
  width: 70px;
  height: 32px;
  align-items: center;
  justify-content: center;
  
  ${(p)=>p.type === "green" && css `
    background: #84d26936;
  `}
`;

const GroupDate = styled.Text`
  color:${props => props.active ? "#ffffff" : "#4294ff"}
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  ${(p)=>p.type === "green" && css `
    color: #61bb42;
  `}
`