# NY Times 

### This application displays the news from the last 7 days using New York Times Newswire API endpoint.
  - Clicking on the news displays the articles in the iframe on the right

### Every News item's section is displayed in a grey box below the details of the article.

### Clicking on each news article opens the article in an iFrame to the right of the page.

### Search news on the top of the landing page utilizes New York Time's Search API endpoint.

### If the Search yields no search results, a React component with the message "There are no results for this search." will be displayed.

### I have used infinite scrolling

### Some of the NYT news articles do not give permission to open in iFrames. For these, I have created a separate link "Open in a new tab"

### For responsiveness, on smaller screen-widths, I have removed the iFrames from not showing and instead using the link "Open in a new tab" to access the article

How do you use this Application?
  1. Clone this repo
  2. run the following on command line 
      ```
      npm install
      npm start
      ```
  3. The App opens up on port 3000
      https://localhost:3000
