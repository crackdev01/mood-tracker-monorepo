import React from 'react';
import { useSelector } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../../../containers/home/Home';
import { mockUser } from '../../fixtures';
import { MoodActions } from '../../../store/mood/types';

Enzyme.configure({ adapter: new Adapter() });

const useSelectorMock = useSelector as jest.Mock<any>;
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));
/* Enzyme doesn't support automatic triggering of useEffect on load yet.
 * So `useEffect` has to be mocked while requiring rest of `react`.
 * https://github.com/enzymejs/enzyme/issues/2086
 */
jest.mock('react', () => ({
  ...jest.requireActual('react') as any,
  useEffect: (f: any) => f(),
}));

describe('Home', () => {
  test('renders', () => {
    mockDispatch.mockReturnValueOnce({})
    useSelectorMock.mockImplementationOnce((s) => s({ userReducer: { user: mockUser } }));
    const w = shallow(<Home />);
    expect(w.debug()).toMatchSnapshot();
    expect(mockDispatch).toHaveBeenCalledWith({
      type: MoodActions.FETCH_MOODS,
    })
  });
});
