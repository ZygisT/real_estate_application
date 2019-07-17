# Real estate application

__This application has been created using React.js, Express.js and MongoDB.__

**About app:**
This is real estate app that has the primary purpose of displaying listings of houses and blog posts. The house data is being pulled from an external Javascript file meanwhile blog posts are being fetched from MongoDB.

**Application features:**
* Data Filtering (Listings and Blog posts)
* MongoDB (Data storage)
* Mobile Responsive (Full App)

**Objective:**
The objective of this project was to use React.js, Express.js and MongoDB to create a stylish single page real estate application that manipulates data (filter, sort, push, slice, map etc.) and displays that data in the form of listings of houses and blog posts.

**My Role:**
The app has been written (coded) by me from start to finish.
(Panning the structure of the app, searching for design inspiration,searching, processing and supplying project assets).

**Project difficulties & solutions:**
One of the most challenging parts of application was to filter house listings data. 
I've used _.filter()_, _.sort()_, _.map()_ and _spread operator_ array methods to process the data in the parent component which passes the processed data into listings component where the data is being _.map()_ and rendered.

The second problem I've faced was Blog Posts page not displaying the posts. Turned out while using _Axios_ and sending a request to database it takes a split second for data to arrive into application and React could not render data that wasn't there. To solve this problem I simply created _isFetching_ state that has initial value of _true_ while the data is being fetched and then is set to _false_ when data arrives. Afterwards I wrote a simply ternary operator that checks if _isFetching_ is true or false. If data has been fetched I execute function to loop and render posts.
However I've noticed that in the process application gives no visual feedback to the user of whats happening. To solve this issue I used a simple "loader spinner" and displayed it while _isFetching_ is true (fetching data) to improve user experience and allow them to understand whats going on.

Another challage was to create search bar feature to search blog posts and sort posts by date.
To be able to search for posts I have made sure all posts data were lowercased, created arrays to hold posts tags, merged all data into an array (array per post) and then _.join()_ all array data into single string of data. Afterwards I've used _.match()_ method to match search bar string with posts data string to find posts.
The date of the post was a timestamp and to sort posts by date I've used _.sort()_ method and _new Date()_ object to format and display the date properly.

_This project is not intended for distribution or monetazation of any kind._
_All images and icons in this project are used purely for `educational purposes.`_

