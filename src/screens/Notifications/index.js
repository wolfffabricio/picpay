import React from 'react';
import Notification from '../../components/Notification';

import { Wrapper, ScrollView, Container, Header, TitleLabel, ConfigButton, ButtonTitle } from './styles';

const items = [
    {
        description: 'Tem boleto parado aí? 🤔 Aproveite para parcelar com o PicPay e ganhar até 20% de volta. Só hoje, tá? Toque aqui',
        date: 'Hoje às 13:15',
    },
    {
        description: 'Dia dos Pais com Recebidos 🎁 Envie um recebidinho ao seu pai e mostre que ele é um grande influenciador para você.',
        date: 'Ontem às 10:11',
    },
    {
        description: 'Sem dinheiro para o presente dos pais? 😱 Compre no boleto, parcele hoje com PicPay e ganhe até 10% de volta. Toque e entenda.',
        date: '6 de ago às 12:59',
    },
    {
        description: '@marcio.alves8236 curtiu seu pagamento',
        date: '6 de ago às 11:45',
    },
    {
        description: 'Vai receber sue Auxílio Emergencial? Tranfira-o para o PicPay e utilize para pagar o que quiser com o celular. Toque e saiba mais!',
        date: '5 de ago às 10:32',
    },
    {
        description: '➗seu boleto e ganhe 💰 Parcele um boleto hoje com PicPay e ganhe até 10% de volta. Toque e saiba mais!',
        date: '4 de ago às 12:11',
    },
    {
        description: 'Chegou a promoção Friboi 😍. Uma promo com milhares de prêmios e um total de 0 defeitos. Toque e saiba mais.',
        date: '3 de ago às 16:28',
    },
    {
        description: 'DICA: Como ganhar Cashback agora! 😎 Envie $ para um amigo hoje com PicPay, parcele o pagamento e ganhe até 8% de volta.',
        date: '3 de ago às 16:23',
    },
    {
        description: 'Quem tem boleto, tem cashback! 😎 Parcele um boleto hoje com PicPay e ganhe até 10% de volta. Toque aqui e aproveite!',
        date: '3 de ago às 12:09',
    },
    {
        description: 'Oi, tutupom? 😉 Hoje vou mostrar que dá para parcelar o recebido do Dia dos Pais. Toque e saiba mais.',
        date: '31 de jul às 12:15',
    },
    {
        description: 'Fim de mês aperta, né? 📆 Mas parcelando um boleto hoje com PicPay, vc ganha até 10% de volta. Toque e veja',
        date: '30 de jul às 15:11',
    },
]

export default function Notifications() {
    return (
        <Wrapper>
            <ScrollView>
                <Header>
                    <TitleLabel>Notificações</TitleLabel>
                    <ConfigButton>
                        <ButtonTitle>Configurar</ButtonTitle>
                    </ConfigButton>
                </Header>
                <Container>
                    <Notification items={items}/>
                </Container>
            </ScrollView>
        </Wrapper>
    );
}