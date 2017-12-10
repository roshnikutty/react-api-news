import React from 'react';
import { shallow } from 'enzyme';
import { DisplaySearchResults } from './DisplaySearchResults';

describe(`<DisplaySearchResults />`, () => {
    it(`it should render searched articles`, () => {
        //sample test results
        const searchedTestArticles = [
            {
                headline: `Headline 1`,
                summary: 'Summary of headline 1',
                url: 'www.someurl1.com'
            }, {
                headline: `Headline 2`,
                summary: 'Summary of headline 2',
                url: 'www.someurl2.com'
            }
        ];
        shallow(<DisplaySearchResults searchedArticles={searchedTestArticles} />);
    });

    it(`should not display when there are no search results`, () => {
        const searchedArticlesNotFound = [];
        const wrapper = shallow(<DisplaySearchResults
            searchedArticles={searchedArticlesNotFound} />)
        wrapper.update();
        expect(wrapper.find('div')).toHaveLength(0);
    });
});