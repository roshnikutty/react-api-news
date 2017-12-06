# NY Times API

### this application is built using node version 7.9.0 and npm version 4.2.0

To run this application if you have other versions of Node, please use one of the following (listed below with links to documentation and terminal commands):

nvm: https://github.com/creationix/nvm
nave: https://github.com/isaacs/nave
n: https://github.com/tj/n"

## About the Application

1. This application displays the news from the last 7 days using New York Times Newswire API endpoint.
  - Clicking on the news displays the articles in the iframe on the right

2. Every News item's section is displayed in a grey box below the details of the article.

3. Clicking on each news article opens the article in an iFrame to the right of the page.

4. Search news on the top of the landing page utilizes New York Times's Search API endpoint.  -  Please click the "Search" button to view resullts
 -  To get back to News refresh the browser window


5. If the Search yields no search results, a React component with the message "There are no results for this search." will be displayed.

6. I have used infinite scrolling

7. Some of the NYT news articles do not give permission to open in iFrames. For these, I have created a separate link "Open in a new tab"

8. For responsiveness, on smaller screen-widths, I have removed the iFrames from not showing and instead using the link "Open in a new tab" to access the article

## How do you use this Application?
  1. Clone this repo
  2. run the following on command line 
      ```
      npm install
      npm start
      ```
  3. The App opens up on port 3000
      https://localhost:3000
