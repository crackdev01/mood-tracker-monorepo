import React from 'react';
import { useSelector } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddEntryModal from '../../../../../components/mood-entry/add-entry/AddEntryModal';
import { mockUser } from '../../../../fixtures';
import { MoodActions } from '../../../../../store/mood/types';

Enzyme.configure({ adapter: new Adapter() });

const useSelectorMock = useSelector as jest.Mock<any>;
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

describe('AddEntry', () => {
  test('renders', () => {
    useSelectorMock.mockImplementationOnce((s) => s({ userReducer: { user: mockUser } }));
    mockDispatch.mockReturnValueOnce({});
    const w = shallow(<AddEntryModal />);
    expect(w.debug()).toMatchSnapshot();
  });

  // FIXME: useSelectorMock not returning user info.
  test.skip('triggers postMoodEntry', () => {
    useSelectorMock.mockImplementationOnce((s) => s({ userReducer: { user: mockUser } }));
    mockDispatch.mockReturnValueOnce({});
    const w = shallow(<AddEntryModal />);
    w.update();
    w.find('Dropdown').at(0).simulate('change', undefined, { value: 'confident' });
    const intensityDropdown = w.find('Dropdown').at(1);
    expect(intensityDropdown.exists()).toBeTruthy();
    intensityDropdown.simulate('change', undefined, { value: 4 });
    w.find('Button').simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith({
      type: MoodActions.ADD_MOOD,
      payload: {
        user: mockUser.decodedAccessToken?.uuid,
        status: 'confident',
        intensity: 4,
      },
    });
  });
});
