import React from 'react';

import { Wrapper, Container, TitleLabel, View, } from './styles';

import Services from '../../../../components/Services';

import img1 from '../../../../images/01.png';
import img6 from '../../../../images/06.png';
import img7 from '../../../../images/07.png';
import img12 from '../../../../images/12.png';
import imgPerson from '../../../../images/person.png';

const items = [
    {
        img: img12,
        title: 'Pagar nas Maquininhas',
        titleIcon: 'location-pin',
        description: 'Pague com o PicPay em máquinas Cielo e GetNet escaneando o QR code na máquina',
    },
    {
        img: img6,
        title: 'Pagar Contas',
        titleIcon: 'shopping-bag',
        description: 'Pague sua conta de luz, água, boletos, bancários etc.',
    },
    {
        img: img7,
        title: 'Cobrar',
        titleIcon: 'shopping-bag',
        description: 'Cobre um amigo',
    },
    {
        img: img1,
        title: 'Recarga de  Celular',
        titleIcon: 'shopping-bag',
        description: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios',
    }
]

const contactItems = [
    {
        img: imgPerson,
        title: '@pedrooNinja',
        titleIcon: '',
        description: 'João Pedro Silva',
    },
    {
        img: imgPerson,
        title: '@ammson',
        titleIcon: '',
        description: 'Antônio Mattos',
    },
    {
        img: imgPerson,
        title: '@fernanda.gomes',
        titleIcon: '',
        description: 'Fernanda Gomes',
    },
    {
        img: imgPerson,
        title: '@lidiane.mendonca',
        titleIcon: '',
        description: 'Lidiane de Souza Mendonça',
    },
    {
        img: imgPerson,
        title: '@sidnei.santos328',
        titleIcon: '',
        description: 'Sidnei Santos',
    }
]

export default function Main() {
    return (
        <Wrapper>
            <Container>
                <TitleLabel>Serviços</TitleLabel>
                <Services items={items} />
                <View />
                <TitleLabel>Contatos</TitleLabel>
                <Services items={contactItems} />
            </Container>
        </Wrapper>
    );
}