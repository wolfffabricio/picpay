import React from 'react';

import img8 from '../../../../images/08.png';

import { Wrapper, Placeholder, Img, TitleLabel, Description, AcceptButton, ButtonTitle } from './styles';

export default function Local() {
    return (
        <Wrapper>
            <Placeholder>
                <Img source={img8} />
                <TitleLabel>Descubra estabelecimentos perto de você</TitleLabel>
                <Description>
                    Temos estabelecimentos próximos de você que aceitam PicPay, para saber quais 
                    são é só autorizar o acesso à sua localização.
                </Description>
                <AcceptButton>
                    <ButtonTitle>Autorizar agora</ButtonTitle>
                </AcceptButton>
            </Placeholder>
        </Wrapper>
    ); 
}