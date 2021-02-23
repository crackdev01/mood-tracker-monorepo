import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EditEntryModal from '../../../../../components/mood-entry/edit-entry/EditEntryModal';
import { mockMoods } from '../../../../fixtures';
import { MoodActions } from '../../../../../store/mood/types';

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('EditEntryModal', () => {
  const props = { mood: mockMoods[0] };
  test('renders', () => {
    mockDispatch.mockReturnValueOnce({});
    const w = shallow(<EditEntryModal {...props} />);
    expect(w.debug()).toMatchSnapshot();
  });

  test('triggers editMoodEntry', () => {
    mockDispatch.mockReturnValueOnce({});
    const w = shallow(<EditEntryModal {...props} />);
    w.find('Dropdown').at(0).simulate('change', undefined, { value: 'curious' });
    w.find('Dropdown').at(1).simulate('change', undefined, { value: 4 });
    w.find('Button').at(1).simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith({
      type: MoodActions.EDIT_MOOD,
      payload: {
        id: mockMoods[0].mood_id,
        status: 'curious',
        intensity: 4,
      },
    });
  });
});
