import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../App';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../containers/Home/Home', () => () => 'Home');

describe('App.vue', () => {
  test('renders', () => {
    const w = shallow(<App />);
    expect(w.debug()).toMatchSnapshot();
  });
});
