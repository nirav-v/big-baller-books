 import { gql } from '@apollo/client';
 
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      _id
    }
  }
}
 `

 export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
 `

 export const SAVE_BOOK = gql`
 
 mutation SaveBook($description: String!, $title: String!, $bookId: String!, $image: String, $link: String, $authors: [String]) {
  saveBook(description: $description, title: $title, bookId: $bookId, image: $image, link: $link, authors: $authors) {
    _id
    username
    email
    savedBooks {
      authors
      bookId
      description
      title
      image
      link
    }
  }
}

 `

