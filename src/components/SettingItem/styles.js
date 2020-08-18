import styled from 'styled-components/native';

export const Container = styled.View``;

export const ItemContainer = styled.View``;

export const Item = styled.TouchableOpacity`
    background: #000;
    border: 0.2px solid #4f4f4f;
    height: 70px;
    padding: 16px;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const ItemTitle = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

export const ItemSubtitle = styled.Text`
    color: #8e8e93;
    font-size: 14px;
    font-weight: 100;
`;

export const View = styled.View`
    height: 1px;
    background: #1e222b;
    margin-top: 0px
`;