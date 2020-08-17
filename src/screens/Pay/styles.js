import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
`;

export const Container = styled.ScrollView.attrs(() => ({
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 25,
    }
}))``;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 280px;
    height: 40px;
    background: #1e222b;
    border: 1px;
    border-color: #92929c;
    flex-direction: row;
    align-items: center;
    border-radius: 22;
    justify-content: center;
`;

export const SearchLabel = styled.Text`
    color: #92929c;
    margin-left: 16px;
`;
