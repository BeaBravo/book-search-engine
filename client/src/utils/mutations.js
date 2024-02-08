import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation Login($password: String!, $username: String) {
    login(password: $password, username: $username) {
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