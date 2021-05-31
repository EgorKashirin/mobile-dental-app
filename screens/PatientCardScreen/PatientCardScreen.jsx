import React from 'react';
import styled from "styled-components/native";
import {GrayText} from "../../components/GrayText";
import {Button} from "../../components/Button";
import {Foundation,MaterialCommunityIcons,MaterialIcons} from "@expo/vector-icons";
import {Badge} from "../../components/Badge";

export const PatientCardScreen = ({navigation}) => {
    return (
        <Container>
            <PatientDetails>
                <PatientFullName>
                    {navigation.getParam('user',{}).fullname}
                </PatientFullName>
                <GrayText>{navigation.getParam('user',{}).phone}</GrayText>
                <PatientButtons>
                    <FormulaButton>Формула зубов</FormulaButton>
                    <PhoneButton>
                        <Foundation name="telephone" size={24} color="white" />
                    </PhoneButton>
                </PatientButtons>
            </PatientDetails>

            <PatientAppointments>
                <PatientDetails>
                    <AppointmentCard>
                        <MoreButton>
                            <MaterialIcons name="more-vert" size={24} color="#a3a3a3" />
                        </MoreButton>
                        <AppointmentCarRow>
                            <IconContainer>
                                <MaterialCommunityIcons name="tooth-outline" size={24} color="#a3a3a3" />
                            </IconContainer>
                            <AppointmentCardLabel>Зуб: <StrongText>12</StrongText></AppointmentCardLabel>
                        </AppointmentCarRow>
                        <AppointmentCarRow>
                            <IconContainer>
                                <Foundation name="clipboard-notes" size={24} color="#a3a3a3" />
                            </IconContainer>
                            <AppointmentCardLabel>Диагноз: <StrongText>пульпит</StrongText></AppointmentCardLabel>
                        </AppointmentCarRow>
                        <AppointmentCarRow>
                            <BadgeBlue text="11.10.2019 - 15:40" active />
                            <BadgeGreen>
                                <Badge text="1500 Р" type="green" />
                            </BadgeGreen>
                        </AppointmentCarRow>
                    </AppointmentCard>
                </PatientDetails>
            </PatientAppointments>

        </Container>
    );
};

const BadgeBlue = styled(Badge)`
  width: 150px;
`

const BadgeGreen = styled.View`
  margin-left: 25px;
`;

const IconContainer = styled.View`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StrongText = styled.Text`
  font-weight: 600;
`

const AppointmentCarRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCard = styled.View`
  box-shadow:0 5px 20px rgba(0,0,0,0.11);
  padding: 20px 25px;
  border-radius: 10px;
  background: white;
`;

const PatientDetails = styled.View`
  padding: 25px;
`;

const PatientAppointments = styled.View`
 flex: 1;
  background: #f8fafd;
`

const FormulaButton = styled(Button)`
  flex: 1;
  margin: 0 10px;
`;

const MoreButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent; 
  position: absolute;
  right: 25px;
  top: 25px;
  width: 32px;
  height: 32px;
`

const PhoneButton = styled(Button)`
  background-color: #84d269;
  width: 45px;
  height: 45px;
`

const PatientButtons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

const PatientFullName = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 3px;
`;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const PatientCardNavigationOptions = {
    title: "Карта пациента",
};