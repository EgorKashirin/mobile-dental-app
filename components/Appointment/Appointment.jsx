import React from 'react';
import { View } from 'react-native';
import styled from "styled-components/native";

export const Appointment = ({user,diagnosis,active,time}) => {
    return (
                <GroupItem>
                        <Avatar source={{
                            uri: user.avatar
                        }} />
                        <View style={{flex: 1}}>
                            <FullName>{user.fullname}</FullName>
                            <GrayText>{diagnosis}</GrayText>
                        </View>
                        <DateContainer active={active}>
                            <GroupDate active={active}>{time}</GroupDate>
                        </DateContainer>
                    </GroupItem>
    );
}
const DateContainer = styled.View`
  background:${props => props.active ? "#2a86ff" : "#e9f5ff"}
  border-radius: 18px;
  width: 70px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

const GroupDate = styled.Text`
  color:${props => props.active ? "#ffffff" : "#4294ff"}
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
`

const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width:1px;
  border-bottom-color: #f3f3f3;
`;