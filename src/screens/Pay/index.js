import React from 'react';
import { MaterialCommunityIcons, AntDesign, } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainScreen from './tabs/Main';
import LocalScreen from './tabs/Local';
import StoreScreen from './tabs/Store';

import { Wrapper, Container, Header, SearchButton, SearchLabel, } from './styles';

const Tab = createMaterialTopTabNavigator();

export default function Pay() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

                    <SearchButton>
                        <AntDesign name="search1" size={20} color="#92929c" />
                        <SearchLabel>A quem você quer pagar?</SearchLabel>
                    </SearchButton>
                </Header>

                <Tab.Navigator 
                    initialRouteName="Main"
                    tabBarOptions={{
                        style: {
                            backgroundColor: '#000',
                        },
                        indicatorStyle:{
                            backgroundColor:'#10c86e'
                        },
                        labelStyle: { 
                            textTransform: 'none',
                        },
                        activeTintColor: '#10c86e',
                        inactiveTintColor: '#959499',
                    }}
                >
                    <Tab.Screen 
                        name="Main" 
                        component={MainScreen}
                        options={{ tabBarLabel: 'Principais' }}
                    />
                    <Tab.Screen 
                        name="Local" 
                        component={LocalScreen}
                        options={{ tabBarLabel: 'Local' }} 
                    />
                    <Tab.Screen 
                        name="Store" 
                        component={StoreScreen}
                        options={{ tabBarLabel: 'Store' }} 
                    />
                </Tab.Navigator>
            </Container>
        </Wrapper>
    );
}