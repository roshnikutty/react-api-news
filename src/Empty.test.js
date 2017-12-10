import React from 'react';
import { shallow } from 'enzyme';
import { Empty } from './Empty';


describe('<Empty />', () => {
    it('renders without crashing', () => {
        shallow(<Empty visible={true}/>)
    });
    it('renders no output when visibility is false', () => {
        const wrapper=shallow(<Empty visible={false}/>);
        wrapper.update();
        expect((wrapper).find('div')).toHaveLength(0);
    })
})