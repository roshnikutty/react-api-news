import React from 'react';
import { Search } from './Search';
import { shallow } from 'enzyme';

describe(`<Search />`, () => {
    it('should render without crashing', () => {
        shallow(<Search />);
    })
});
