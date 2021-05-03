import React from 'react';
import renderer from 'react-test-renderer';
import LikeButton from './common/components/LikeButton/index.native';

//Unit testing to check UI components
test('renders correctly', () => {
  const tree = renderer.create(<LikeButton />).toJSON();
  expect(tree).toMatchSnapshot();
});