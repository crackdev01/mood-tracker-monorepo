import React from 'react';
import { useSelector } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MoodList from '../../../../../components/mood-entry/mood-list/MoodList';
import { mockMoods } from '../../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const useSelectorMock = useSelector as jest.Mock<any>;
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('MoodList', () => {
  let w: any;
  let useEffectMock;
  beforeEach(() => {
    useSelectorMock.mockReturnValueOnce(mockMoods);
    // FIXME: useEffect is not being triggered.
    useEffectMock = jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    w = shallow(<MoodList />);
  });

  test('renders', () => {
    expect(w.debug()).toMatchSnapshot();
  });
});
