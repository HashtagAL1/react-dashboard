import React from 'react';
import Navigation from '../components/shared/navigation';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

test('navigation render', () => {
    const navigation = shallow(<Navigation />);
    expect(navigation.find('li').length).toEqual(3);
    expect(navigation.find('button').length).toEqual(1);
    expect(navigation.find('Link').length).toEqual(3);
});