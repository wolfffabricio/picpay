import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
`;

export const Placeholder = styled.View`
    margin: 80px 24px
    align-items: center;
`;

export const Img = styled.Image`
    width: 90px;
    height: 90px;
`;

export const TitleLabel = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-top: 16px;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-top: 16px;
    text-align: center;
`;

export const AcceptButton = styled.TouchableOpacity`
    background: #10c86e;
    width: 200px;
    height: 40px;
    margin-top: 16px;
    justify-content: center;
    border-radius: 22px;
`;

export const ButtonTitle = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;
