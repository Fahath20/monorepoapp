import React from 'react';
import styled from 'styled-components/native';

export default class StyledComponent extends React.Component {

	render() {
		return (
			<Container>
				<Titlebar>
                    <Avatar source={require('../../../assets/favicon.png')} />
					<Title>Welcome back,</Title>
					<Name>Fahath</Name>
				</Titlebar>
			</Container>
		);
	}
}

const Container = styled.View`
	flex: 1;
	background-color: white;
	justify-content: center;
	align-items: center;
`;

const Titlebar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	background: black;
	border-radius: 22px;
	margin-left: 20px;
`;
const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: #b8bece;
`;

const Name = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
`;