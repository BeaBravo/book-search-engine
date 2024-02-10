import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation Login($password: String!, $username: String, $email: String) {
    login(password: $password, username: $username, email: $email) {
      token
      user {
        username
        _id
        email
        bookCount
        savedBooks {
          bookId
          description
          image
          link
          title
          authors
        }
      }
    }
  }`

export const ADD_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        _id
        bookCount
        savedBooks {
          authors
          bookId
          description
          image
          link
          title
        }
      }
    }
  }`

export const SAVE_BOOK = gql`
  mutation SaveBook($criteria: saveBookInput!) {
    saveBook(criteria: $criteria) {
      _id
      bookCount
      email
      username
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;

export const DELETE_BOOK = gql`
mutation DeleteBook($bookId: String!) {
  deleteBook(bookId: $bookId) {
    _id
    username
    bookCount
    email
  }
}
`;