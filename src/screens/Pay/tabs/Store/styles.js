import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
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

export const Card = styled.TouchableOpacity`
    margin-top: 16px;
    height: 160px;
    border-radius: 8px;
    padding: 0 8px;
    background: #166f66;
`;

export const CardHeader = styled.View`
    margin-top: 8px;
    align-items: flex-end;
`;

export const CardBody = styled.View`
    flex-direction: row;
`;

export const Img = styled.Image`
    width: 80px;
    height: 80px;
`;

export const Content = styled.View`
    margin: 0 12px;
    flex: 1;
`;

export const CardTitle = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 12px;
    margin-right: 22px;
    text-align: justify;
`;

export const View = styled.View`
    height: 1px;
    background: #1e222b;
    margin-top: 30px
`;

export const HeaderList = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`;

export const HeaderTitle = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const SeeAllButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const SeeAllTitle = styled.Text`
    color: #10c86e;
    font-size: 14px;
    font-weight: bold;
`;

