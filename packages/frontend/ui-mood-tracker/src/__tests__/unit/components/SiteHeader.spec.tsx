import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import SiteHeader from '../../../components/site-header/SiteHeader';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux');

const useSelectorMock = useSelector as jest.Mock<typeof useSelector>;
const useLocationMock = useLocation as jest.Mock<any>;

jest.mock('react-router-dom', () => ({
  // @ts-ignore
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn(),
  useLocation: jest.fn(),
}));

describe('SiteHeader', () => {
  test('renders', () => {
    useSelectorMock.mockReturnValueOnce({
      accessToken: 'mock-access-token',
      decodedAccessToken: {
        username: 'mock-user',
      },
    } as any);
    useLocationMock.mockReturnValueOnce({
      location: {
        pathname: '/mood-entry',
      },
    });
    const w = shallow(<SiteHeader />);
    expect(w.debug()).toMatchSnapshot();
  });
});
