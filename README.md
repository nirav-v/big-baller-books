# book-look-up

Big-Baller-Books utilizes the google books API in a full stack web application that allows users to login in, google different books, and save or delete books from their personal list. The code in this application was recently refactored from using a restful API with multiple routes, to using graphQL with Apollo Server. This eliminates the need for multiple endpoints to be requested, and instead allows a single query to be made to the server to retrieve exactly the data that is needed. This improves the overall performance of the site.

It is built with React and apollo client on the front-end, and Node.js for the backend with express, graphql, and apollo server. User authorization to save books and view profile info is done using JSON Web Tokens to verify credentials before rendering the requested page.

The user interface is quite intuitive, featuring a nav bar with signup or login options, as well as the ability to search books even when not logged in. 

![Screen Shot 2022-06-05 at 2 46 55 PM](https://user-images.githubusercontent.com/98481913/172071948-3e98c694-eb29-4a7d-82b6-9eee6142f096.png)

Once logged in, you can search and book title the same as with the google search engine. You can scroll thrugh results and save individual books to your account's book list. You can also delete any books from your account's saved books and re-add them later if you choose. 

![Screen Shot 2022-06-05 at 2 47 25 PM](https://user-images.githubusercontent.com/98481913/172071965-b54dc57c-aa61-4cce-9665-1a7ab08b93f2.png)
![Screen Shot 2022-06-05 at 2 48 33 PM](https://user-images.githubusercontent.com/98481913/172071999-55504d4e-a0c3-4b02-823a-5b56c6b6b298.png)
