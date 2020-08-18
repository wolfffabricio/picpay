import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import SettingItem from '../../components/SettingItem';
import SettingSimpleItem from '../../components/SettingSimpleItem';

import avatar from '../../images/person.png';

import { 
    Wrapper, 
    ScrollView, 
    Container, 
    Header,
    HelpButton,
    HelpLabel,
    Img,
    UserNickname,
    UserName,
    MyProfileButton,
    MyAccountLabel,
    MyProfileLabel,
    SectionContainer,
    SectionTitle,
    Item,
    ItemLogoutTitle,
    BottomSpace,   
} from './styles';

const myAccountItems = [
    {
        title: 'Meu PicPay',
        subtitle: '@wolff_vegas',
    },
    {
        title: 'Meu número',
        subtitle: '(52) 99999 8888',
    },
    {
        title: 'Meu E-mail',
        subtitle: 'picpay.clone@gmail.com',
    },
    {
        title: 'Dados Pessoais',
        subtitle: 'Nome CPF e data de nascimento',
    },
]

const myAccountSimpleItems = [
    {
        title: 'Conta Bancária',
    },
    {
        title: 'Taxas e limites',
    },
    {
        title: 'Meus endereços',
    },
    {
        title: 'Meus favoritos',
    },
    {
        title: 'Validar Identidade',
    },
]

const promotions = [
    {
        title: 'Usar código promocional',
    },
    {
        title: 'Convide seus amigos',
    },
]

const mySubscriptions = [
    {
        title: 'Ver Minhas Assinaturas',
    },
]

const forMyBusiness = [
    {
        title: 'PicPay PRO',
    },
    {
        title: 'Para estabelecimentos',
    },
    {
        title: 'Venda por assinaturas',
    },
]

const settings = [
    {
        title: 'Usar digital para pagar',
    },
    {
        title: 'Alterar senha',
    },
    {
        title: 'Privacidade',
    },
    {
        title: 'Notificações',
    },
    {
        title: 'Contas vinculadas',
    },
]

const general = [
    {
        title: 'Precisa de ajuda?',
    },
    {
        title: 'Sobre o PicPay',
    },
    {
        title: 'Desativar minha conta',
    },
]

export default function Settings() {
    return (
        <Wrapper>
            <ScrollView>
                <Container>
                    <Header>
                        <HelpButton>
                            <HelpLabel>Ajuda</HelpLabel>
                        </HelpButton>

                        <Img source={avatar} />

                        <UserNickname>@wolff_vegas</UserNickname>
                        <UserName>Fabricio Wolff</UserName>

                        <MyProfileButton>
                            <MyProfileLabel>Ver meu perfil</MyProfileLabel>
                            <MaterialIcons name="keyboard-arrow-right" size={14} color="#0db060" />
                        </MyProfileButton>

                        <MyAccountLabel>Minha conta</MyAccountLabel>
                    </Header>

                    <SettingItem items={myAccountItems} />
                    <SettingSimpleItem items={myAccountSimpleItems}/>

                    <SectionContainer>
                        <SectionTitle>Promoções</SectionTitle>
                    </SectionContainer>
                    <SettingSimpleItem items={promotions}/>

                    <SectionContainer>
                        <SectionTitle>Minhas assinaturas</SectionTitle>
                    </SectionContainer>
                    <SettingSimpleItem items={mySubscriptions}/>

                    <SectionContainer>
                        <SectionTitle>Para o meu negócio</SectionTitle>
                    </SectionContainer>
                    <SettingSimpleItem items={forMyBusiness}/>

                    <SectionContainer>
                        <SectionTitle>Configurações</SectionTitle>
                    </SectionContainer>
                    <SettingSimpleItem items={settings}/>

                    <SectionContainer>
                        <SectionTitle>Geral</SectionTitle>
                    </SectionContainer>
                    <SettingSimpleItem items={general}/>

                    <SectionContainer />
                        <Item>
                            <ItemLogoutTitle>Sair</ItemLogoutTitle>
                        </Item>
                    <BottomSpace />
                </Container>
            </ScrollView>
        </Wrapper>
    );
}