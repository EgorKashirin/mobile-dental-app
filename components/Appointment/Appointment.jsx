import React from 'react';
import { View } from 'react-native';
import styled from "styled-components/native";
import {GrayText} from "../GrayText";
import {Badge} from "../Badge";

export const Appointment = ({item,navigate}) => {
    const {user,diagnosis,active,time} = item;
    return (
                <GroupItem onPress={navigate.bind(this,"PatientCard",item)}>
                        <Avatar source={{
                            uri: user.avatar
                        }} />
                        <View style={{flex: 1}}>
                            <FullName>{user.fullname}</FullName>
                            <GrayText>{diagnosis}</GrayText>
                        </View>
                        <Badge text={time} active={active} />
                    </GroupItem>
    );
}

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