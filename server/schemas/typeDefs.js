const { gql } = require("apollo-server-express");

// Query type:
// me: Which returns a User type.

// Mutation type:
// login: Accepts an email and password as parameters; returns an Auth type.
// addUser: Accepts a username, email, and password as parameters; returns an Auth type.
// saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)
// removeBook: Accepts a book's bookId as a parameter; returns a User type.

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

"""
   input saveBook {
      bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }
"""

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

     saveBook(bookId: String!, authors: [String], description: String!, title: String!, image: String, link: String): User

"""   # saveBook(input: Book): User"""

    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
