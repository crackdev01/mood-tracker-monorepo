import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SiteHeader from '../../../../components/site-header/SiteHeader';

import { mockUser } from '../../../fixtures';
import { UserActions } from '../../../../store/user/types';

Enzyme.configure({ adapter: new Adapter() });

const useSelectorMock = useSelector as jest.Mock<any>;
const useLocationMock = useLocation as jest.Mock<any>;
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  Link: jest.fn(),
  useLocation: jest.fn(),
}));

describe('SiteHeader', () => {
  beforeEach(mockDispatch.mockReturnValueOnce({}));

  describe('renders', () => {
    test('only displays header for unauthenticated user', () => {
      useSelectorMock.mockImplementationOnce((s) =>
        s({ userReducer: { user: { accessToken: null } } })
      );
      useLocationMock.mockReturnValueOnce(() => ({
        location: {
          pathname: '/mood-entry',
        },
      }));
      const w = shallow(<SiteHeader />);
      expect(w.debug()).toMatchSnapshot();
    });

    test('displays header entries for authenticated user', () => {
      useSelectorMock.mockImplementationOnce((s) => s({ userReducer: { user: mockUser } }));
      useLocationMock.mockReturnValueOnce({
        location: {
          pathname: '/mood-entry',
        },
      });
      const w = shallow(<SiteHeader />);
      expect(w.debug()).toMatchSnapshot();
      // FIXME: snapshot doesn't have user info.
    });

    test('changes language on click', () => {
      useSelectorMock.mockImplementationOnce((s) => s({ userReducer: { user: mockUser } }));
      useLocationMock.mockReturnValueOnce({
        location: {
          pathname: '/mood-entry',
        },
      });
      const w = shallow(<SiteHeader />);
      w.find('DropdownItem').at(1).simulate('click');
      // TODO: assert if changeLanguage was triggered.
    });

    test('triggers logout call', () => {
      useSelectorMock.mockImplementationOnce((s) => s({ userReducer: { user: mockUser } }));
      useLocationMock.mockReturnValueOnce({
        location: {
          pathname: '/mood-entry',
        },
      });
      const w = shallow(<SiteHeader />);
      w.find('DropdownItem').at(2).simulate('click');
      expect(mockDispatch).toHaveBeenCalledWith({
        type: UserActions.LOGOUT_USER,
      });
      // TODO: assert if changeLanguage was triggered.
    });
  });
});
