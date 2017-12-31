import React from 'react';
import { shallow, mount } from 'enzyme';

import { App } from './App';
import { ArticleWindow } from './ArticleWindow';
// import  DisplaySearchResults from './DisplaySearchResults';
import { Empty } from './Empty';
import { resultingState } from './reducers/testData';

describe(`<App>`, () => {
    it(`should render without crashing`, () => {
        const mockCallback = jest.fn();
        shallow(<App dispatch={mockCallback}
            landingPageArticles={resultingState}
            clickedArticleUrl={""} searchItem={""}
            contentVisibility={true} emptyVisibility={false} />);
    });
});