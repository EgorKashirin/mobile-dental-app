import React from 'react';
import styled from "styled-components/native";
import {Appointment} from "./components/Appointment";
import {SectionList} from "react-native"
import {SectionTitle} from "./components/SectionTitle";
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    title: "14 сентября",
    data: [
      {
        time: '15:30',
        diagnosis: "Отбеливание",
        active:true,
        user: {
          fullname: "Есения Белоусова",
          avatar: "https://sun1-17.userapi.com/s/v1/ig2/TlX7y2ihCpb9W7L6bTJH-DjgYeYtrsGEH7b6oGClFT-ovZOmwdYnKG2s2b6BUSB-JVq0eafDc3Nv1NvhlomNl72M.jpg?size=100x0&quality=96&crop=356,683,797,797&ava=1"
        }},{
        time: '15:30',
        diagnosis: "Пломба",
        user: {
          fullname: "Алексей Гончаров",
          avatar: "https://sun1-98.userapi.com/s/v1/if1/F6rDEzMORU1t_G5V711Z2AAQF_3MnAewqNPQLsyQMy-cU34xC5lL58GPE32_eEYgr-6ubn4H.jpg?size=100x0&quality=96&crop=63,68,353,353&ava=1"
        }
      }
    ]
  },
  {
    title: "16 сентября",
    data: [
      {
        time: '15:30',
        diagnosis: "Отбеливание",
        user: {
          fullname: "Есения Белоусова",
          avatar: "https://sun1-17.userapi.com/s/v1/ig2/TlX7y2ihCpb9W7L6bTJH-DjgYeYtrsGEH7b6oGClFT-ovZOmwdYnKG2s2b6BUSB-JVq0eafDc3Nv1NvhlomNl72M.jpg?size=100x0&quality=96&crop=356,683,797,797&ava=1"
        }},{
        time: '15:30',
        diagnosis: "Пломба",
        user: {
          fullname: "Алексей Гончаров",
          avatar: "https://sun1-98.userapi.com/s/v1/if1/F6rDEzMORU1t_G5V711Z2AAQF_3MnAewqNPQLsyQMy-cU34xC5lL58GPE32_eEYgr-6ubn4H.jpg?size=100x0&quality=96&crop=63,68,353,353&ava=1"
        }
      }
    ]
  },
];

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtracton={(item,index)=>item+index}
        renderItem={({item})=> <Appointment {...item} />}
        renderSectionHeader={({section:{title}})=>(
            <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2A86FF;
  box-shadow: 0 4px 10px rgba(42,134,255,0.4);
  right: 35px;
  bottom: 35px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;