import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
    height: ${windowHeight - 155};
`;

export const ScrollView = styled.ScrollView``;

export const Container = styled.View`
    margin: 0 16px;
`;

export const TitleLabel = styled.Text`
    color: #fff;
    margin-top: 16px;
    font-size: 18px;
    font-weight: bold;
`;

export const View = styled.View`
    height: 1px;
    background: #1e222b;
    margin-top: 30px
`;
