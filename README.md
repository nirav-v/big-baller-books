# Big-Baller-Books

## Description
Big-Baller-Books utilizes the google books API in a full stack web application that allows users to login in, google different books, and save or delete books from their personal list. The code in this application was recently refactored from using a restful API with multiple routes, to using graphQL with Apollo Server. This eliminates the need for multiple endpoints to be requested, and instead allows a single query to be made to the server to retrieve exactly the data that is needed. This improves the overall performance of the site.

[deployed app](https://thawing-inlet-86138.herokuapp.com/)
It is built with React and apollo client on the front-end, and Node.js for the backend with express, graphql, and apollo server. User authorization to save books and view profile info is done using JSON Web Tokens to verify credentials before rendering the requested page.

## Usage
The user interface is quite intuitive, featuring a nav bar with signup or login options, as well as the ability to search books even when not logged in. 

![Screen Shot 2022-06-05 at 2 46 55 PM](https://user-images.githubusercontent.com/98481913/172071948-3e98c694-eb29-4a7d-82b6-9eee6142f096.png)

When logged in, you can search a book title and save any of the books in the list of search results. To ensure you don't accidentally save the same book twice, the save button will become disabled and display 'book already saved'. Additionally, you can click on the saved books tab to view a list of all the books you have saved and delete any of them by clicking the corresponding delete button. 

![Screen Shot 2022-06-05 at 2 47 25 PM](https://user-images.githubusercontent.com/98481913/172071965-b54dc57c-aa61-4cce-9665-1a7ab08b93f2.png)
![Screen Shot 2022-06-05 at 2 48 33 PM](https://user-images.githubusercontent.com/98481913/172071999-55504d4e-a0c3-4b02-823a-5b56c6b6b298.png)

 <img src = "https://img.shields.io/badge/License-GNU AGPLv3-green" />
