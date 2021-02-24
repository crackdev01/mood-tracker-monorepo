import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MoodEntry from '../../../containers/mood-entry/MoodEntry';

Enzyme.configure({ adapter: new Adapter() });

describe('MoodEntry', () => {
  test('renders', () => {
    const w = shallow(<MoodEntry />);
    expect(w.debug()).toMatchSnapshot();
  });
});
