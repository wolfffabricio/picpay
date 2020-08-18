import React from 'react';

import { Container, CardContainer, CardOption, TextDescription, DateLabel, View, } from './styles';

export default function Notification({ items }) {
    return (
        <Container>
            {items.map((item) => (
                <CardContainer>
                    <CardOption>
                        <TextDescription>{item.description}</TextDescription>
                        <DateLabel>{item.date}</DateLabel>
                    </CardOption>
                    <View />
                </CardContainer>
            ))}
        </Container>
    );
}