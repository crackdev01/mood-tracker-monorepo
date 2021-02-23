import React from 'react';
import { useSelector } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Statistics from '../../../containers/statistics/Statistics';
import { mockMoods } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const useSelectorMock = useSelector as jest.Mock<any>;
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Statistics', () => {
  beforeEach(
    useSelectorMock.mockImplementationOnce((s) => s({ moodReducer: { mood: mockMoods } }))
  );

  test('renders default', () => {
    const w = shallow(<Statistics />);
    expect(w.debug()).toMatchSnapshot();
  });

  test('renders input field on changing to custom limiter value', () => {
    const w = shallow(<Statistics />);
    w.find('Dropdown').at(0).simulate('change', undefined, { value: 1 });
    const inputField = w.find('Input').at(0);
    expect(inputField.exists()).toBeTruthy();
    inputField.simulate('change', undefined, { value: 10 });
    expect(w.debug()).toMatchSnapshot();
  });
});
