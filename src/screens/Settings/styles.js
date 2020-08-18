import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #1e222b;
    flex: 1;
`;

export const ScrollView = styled.ScrollView``;

export const Container = styled.View``;

export const Header = styled.View`
    background: #1e222b;
    flex-direction: column;
    align-items: center
    height: 320px;
`;

export const HelpButton = styled.TouchableOpacity`
    margin-top: 16px;
    margin-right: 16px;
    flex-direction: row;
    align-self: flex-end;
`;

export const HelpLabel = styled.Text`
    color: #0db060;
    font-size: 16px;
    font-weight: bold;
`;

export const Img = styled.Image`
    margin-top: 30px;
    width: 100px;
    height: 100px;
`;

export const UserNickname = styled.Text`
    margin-top: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;

export const UserName = styled.Text`
    margin-top: 5px;
    color: #8e8e93;
    font-size: 18px;
`;

export const MyProfileButton = styled.TouchableOpacity`
    margin-top: 8px;
    flex-direction: row;
    align-items: center;
`;

export const MyAccountLabel = styled.Text`
    align-self: flex-start;
    margin-top: 28px;
    margin-left: 16px;
    color: #0db060;
    font-weight: bold;
`;

export const MyProfileLabel = styled.Text`
    color: #0db060;
`;

export const SectionContainer = styled.View`
    padding: 0 16px;
    padding-top: 26px;
    padding-bottom: 8px;
`;

export const SectionTitle = styled.Text`
    color: #0db060;
    font-weight: bold;
    background: #1e222b;
`;

export const Item = styled.TouchableOpacity`
    background: #000;
    border: 0.2px solid #4f4f4f;
    height: 55px;
    padding: 16px;
    justify-content: space-evenly;
`;

export const ItemLogoutTitle = styled.Text`
    color: red;
    font-size: 14px;
    font-weight: bold;
`;

export const BottomSpace = styled.View`
    height: 60px;
`;