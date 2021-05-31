import React,{useState,useEffect} from 'react';
import {SectionList} from "react-native";
import {Appointment} from "../../components/Appointment";
import {SectionTitle} from "../../components/SectionTitle";
import {Ionicons} from "@expo/vector-icons";
import styled from "styled-components/native";
import axios from "axios";

export const HomeScreen = ({navigation}) => {
    const {navigate} = navigation;
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('https://api.jsonbin.io/b/60b39b0d44f488301b814a24/1').then(({data})=>{
            setData(data.data);
        });
    },[])

    return (
        <Container>
            {data &&
            <SectionList
                sections={data}
                keyExtracton={(item, index) => index}
                renderItem={({item}) => <Appointment navigate={navigate} item={item}/>}
                renderSectionHeader={({section: {title}}) =>  (
                    <SectionTitle>{title}</SectionTitle>
                )}
            />
            }
            <PlusButton>
                <Ionicons name="ios-add" size={36} color="white" />
            </PlusButton>
        </Container>
    );
};

export const HomeScreenNavigationOptions = {
    title: "Пациенты",
};

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
  background-color: #fff;
`;