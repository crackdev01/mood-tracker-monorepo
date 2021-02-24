import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LocationModal from '../../../../components/location/LocationModal';

import { UserActions } from '../../../../store/user/types';

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('LocationModal', () => {
  test('renders', () => {
    mockDispatch.mockReturnValueOnce({});
    const closeModalMock = jest.fn();
    const props = {
      displayModal: true,
      closeModal: closeModalMock,
    };
    const w = shallow(<LocationModal {...props} />);
    expect(w.debug()).toMatchSnapshot();
  });

  test('triggers close modal on providing permission for location', () => {
    mockDispatch.mockReturnValueOnce({});
    const closeModalMock = jest.fn();
    const props = {
      displayModal: true,
      closeModal: closeModalMock,
    };
    const w = shallow(<LocationModal {...props} />);
    w.find('Button').at(0).simulate('click');
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });

  test('triggers close modal on denial of location permission', () => {
    mockDispatch.mockReturnValueOnce({});
    const closeModalMock = jest.fn();
    const props = {
      displayModal: true,
      closeModal: closeModalMock,
    };
    const w = shallow(<LocationModal {...props} />);
    w.find('Button').at(1).simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith({
      type: UserActions.SET_LOCATION_DENIED,
    });
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });
});
