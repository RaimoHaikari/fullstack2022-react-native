import { gql } from '@apollo/client';

export const ADD_REVIEW = gql`
mutation Mutation($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      rating
      text
      createdAt
      repository {
        ownerName
        name
      }
    }
  }
`;

export const LOGIN = gql`
    mutation Mutation($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;

export const SIGN_UP = gql`
  mutation Mutation($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
      createdAt
      reviews {
        totalCount
      }
      reviewCount
    }
  }
`;

