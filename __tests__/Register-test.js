import React from 'react';
import Register from '../src/screens/Register';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Register />).toJSON();
  expect(tree).toMatchSnapshot();
});
