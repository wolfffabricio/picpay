import React from 'react';
import { Entypo } from '@expo/vector-icons'

import { Container, Option, Img, Content, HeaderContent, Label, Description } from './styles';

export default function Services({ items }) {
    return (
        <Container>
            {items.map((item) => (
                <Option>
                    <Img source={item.img}/>
                    <Content>
                        <HeaderContent>
                            <Label>{item.title}</Label>
                            <Entypo name={item.titleIcon} color='#959499' size={18} />
                        </HeaderContent>
                        <Description>{item.description}</Description>
                    </Content>
                </Option>
            ))}
        </Container>
    );
}