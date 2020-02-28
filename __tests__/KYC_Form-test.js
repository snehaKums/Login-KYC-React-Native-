import React from 'react';
import KYC_Form from '../src/screens/KYC_Form';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<KYC_Form />).toJSON();
  expect(tree).toMatchSnapshot();
});
