import React from 'react';

import { Container, ItemContainer, Item, ItemTitle, View } from './styles';

export default function SettingItem({items}) {
    return (
        <Container>
            {items.map((item) => (
                <ItemContainer>
                    <Item>
                        <ItemTitle>{item.title}</ItemTitle>
                    </Item>
                    <View />
                </ItemContainer>
            ))} 
        </Container>
    );
}