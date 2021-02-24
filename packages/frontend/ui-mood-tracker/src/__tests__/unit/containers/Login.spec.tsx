import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from '../../../containers/login/Login';
import { UserActions } from '../../../store/user/types';
import { mockUserPayload } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('Login', () => {
  test('renders', () => {
    const w = shallow(<Login />);
    expect(w.debug()).toMatchSnapshot();
  });

  test('triggers login', () => {
    mockDispatch.mockReturnValueOnce({});

    const w = shallow(<Login />);
    w.find('Input').at(0).simulate('change', undefined, { value: mockUserPayload.username });
    w.find('Input').at(1).simulate('change', undefined, { value: mockUserPayload.password });
    w.find('Button').at(0).simulate('click');

    expect(mockDispatch).toHaveBeenCalledWith({
      type: UserActions.FETCH_USER,
      payload: mockUserPayload,
    });
  });
});
