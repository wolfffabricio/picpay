import React from 'react';

import { Container, ItemContainer, Item, ItemTitle, ItemSubtitle, View } from './styles';

export default function SettingItem({items}) {
    return (
        <Container>
            {items.map((item) => (
                <ItemContainer>
                    <Item>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemSubtitle>{item.subtitle}</ItemSubtitle>
                    </Item>
                    <View />
                </ItemContainer>
            ))}
            
        </Container>
    );
}