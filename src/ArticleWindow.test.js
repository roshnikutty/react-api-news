import React from 'react';
import { shallow } from 'enzyme';
import { ArticleWindow } from './ArticleWindow';

describe(`<ArticleWindow />`, () => {
    it(`should render without crashing`, () => {
        shallow(<ArticleWindow />);
    });
    it(`should render iframe`, () => {
        let wrapper = shallow(<ArticleWindow />);
        expect(wrapper.find('iframe')).toHaveLength(1);
    });
});