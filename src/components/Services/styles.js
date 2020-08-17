import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        alignItems: 'flex-start',
        marginTop: 8,
        paddingRight: 26,
    }
}))``;

export const Option = styled.TouchableOpacity`
    flex-direction: row;
    margin: 8px 0;
    align-items: center;
    width: ${windowWidth};
`;

export const Img = styled.Image``;

export const Content = styled.View`
    margin: 0 16px;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
`;

export const Label = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-right: 2px;
`;

export const Description = styled.Text`
    color: #92929c;
    font-size: 12px;
    margin-right: 76px
`;
