
import { gql } from "@apollo/client";

export const GET_USER = gql`
query User {
  User {
    id
    firstName
    lastName
    email
    avatar
  }
}`;

export const GET_ALL_USERS = gql`
query allUsers {
  allUsers (count: 100) {
    id
    firstName
    lastName
    email
    avatar
  }
}`;

export const GET_POST = gql`
query Post {
  Post {
    id
    title
    body
    published
    createdAt
    author {
      id
      firstName
      lastName
      email
      avatar
    }
    likelyTopics {
      label
      likelihood
    }
  }
}`;

export const GET_ALL_POSTS = gql`
query allPosts {
  allPosts (count: 100000) {
    id
    title
    body
    published
    createdAt
    author {
      id
      firstName
      lastName
      email
      avatar
    }
    likelyTopics {
      label
      likelihood
    }
  }
}`;

export const GET_ALL_TODOS = gql`
query allTodos {
  allTodos (count: 10) {
    id
    title
    completed
  }
}
`;


