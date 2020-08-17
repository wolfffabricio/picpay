import React from 'react';
import { Foundation, MaterialIcons } from '@expo/vector-icons';
import Services from '../../../../components/Services';

import img01 from '../../../../images/01.png';
import img1 from '../../../../images/doacoes/01.png';
import img2 from '../../../../images/doacoes/02.png';
import img3 from '../../../../images/doacoes/03.png';
import img4 from '../../../../images/doacoes/04.png';
import img5 from '../../../../images/doacoes/05.png';
import img6 from '../../../../images/doacoes/06.png';
import img7 from '../../../../images/doacoes/07.png';

const items = [
    {
        key: String(Math.random()),
        img: img1,
        title: 'Amigos do bem',
        titleIcon: 'shopping-bag',
        description: 'Doe e ajude o sertão nordestino contra a COVID-19',
    },
    {
        key: String(Math.random()),
        img: img2,
        title: 'Mesa Brasil TO',
        titleIcon: 'shopping-bag',
        description: 'Doe para ajudar a instituíção a oferecer ações educativas e de distribuição de alimentos par...',
    },
    {
        key: String(Math.random()),
        img: img3,
        title: 'CUFA (Mães da favela)',
        titleIcon: 'shopping-bag',
        description: 'Doe e ajude as favelas a combater a COVID-19',
    },
    {
        key: String(Math.random()),
        img: img4,
        title: 'Instituto Ronald McDonald',
        titleIcon: 'shopping-bag',
        description: 'Doe e ajude a prevenir crianças e adolescentes com câncer da COVID-19',
    },
    {
        key: String(Math.random()),
        img: img5,
        title: 'Médicos sem fronteiras',
        titleIcon: 'shopping-bag',
        description: 'Doe e ajude MSF a responder a responder à pandemia de COVID-19 e outras emergências pelo mundo!...',
    },
    {
        key: String(Math.random()),
        img: img6,
        title: 'UNICEF',
        titleIcon: 'shopping-bag',
        description: 'Doe e ajude a UNICEF a fornecer vacinas, materiais escolares e recursos necessários pa...',
    },
    {
        key: String(Math.random()),
        img: img7,
        title: 'Visão mundial',
        titleIcon: 'shopping-bag',
        description: 'Doe e ajude a arrecadar recursos para evitar o contágio pela COVID-19, para crianças e ado...',
    }
]

import { 
    Wrapper, 
    ScrollView, 
    Container, 
    TitleLabel, 
    Card, 
    CardHeader,
    CardBody, 
    Img, 
    Content, 
    CardTitle, 
    Description, 
    View,
    HeaderList,
    HeaderTitle,
    SeeAllButton,
    SeeAllTitle,
} from './styles';

export default function Store() {
    return (
        <Wrapper>
            <ScrollView>
                <Container>
                    <TitleLabel>Destaques</TitleLabel>

                    <Card>
                        <CardHeader>
                            <Foundation name="info" size={30} color="#fff" />
                        </CardHeader>
                        <CardBody>
                            <Img source={img01} />
                            <Content>
                                <CardTitle>R$10 de volta</CardTitle>
                                <Description>
                                    Usando um cartão de crédito na sua primeira recarga de celular, 
                                    você ganha R$10 de volta.
                                </Description>
                            </Content>
                        </CardBody>
                    </Card>
                    <View />

                    <HeaderList>
                        <HeaderTitle>Central de Doações</HeaderTitle>
                        <SeeAllButton>
                            <SeeAllTitle>Ver todos</SeeAllTitle>
                            <MaterialIcons name="keyboard-arrow-right" size={18} color="#10c86e" />
                        </SeeAllButton>
                    </HeaderList>

                    <Services items={items} />
                </Container>
            </ScrollView>
        </Wrapper>
    );
}