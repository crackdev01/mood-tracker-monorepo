import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DeleteEntryModal from '../../../../../components/mood-entry/delete-entry/DeleteEntryModal';
import { mockMoods } from '../../../../fixtures';
import { MoodActions } from '../../../../../store/mood/types';

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('DeleteEntryModal', () => {
  const closeModalMock = jest.fn();
  const props = {
    displayModal: true,
    closeModal: closeModalMock,
    mood: mockMoods[0],
  };

  test('renders', () => {
    mockDispatch.mockReturnValueOnce({});
    const w = shallow(<DeleteEntryModal {...props} />);
    expect(w.debug()).toMatchSnapshot();
  });

  test('triggers deleteMoodEntry', () => {
    mockDispatch.mockReturnValueOnce({});
    const w = shallow(<DeleteEntryModal {...props} />);
    w.find('Button').at(1).simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith({
      type: MoodActions.DELETE_MOOD,
      payload: { id: mockMoods[0].mood_id },
    });
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });
});
