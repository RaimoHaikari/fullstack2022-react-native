import { gql } from "@apollo/client";

/*
query Query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
    edges {
      node {
        name
      }
    }
  }
}
*/
export const GET_REPOSITORIES = gql`
  query QueryP($after: String, $first: Int, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(after: $after, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      totalCount
      edges {
        node {
          id
          name
          ownerName
          createdAt
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

/*
query Query($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    reviews(first: $first, after: $after) {
*/
export const GET_REPOSITORY = gql`
  query SingleRepositoryQuery($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      id
      name
      ownerName
      createdAt
      fullName
      reviewCount
      ratingAverage
      forksCount
      stargazersCount
      description
      language
      ownerAvatarUrl
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

export const ME = gql`
  query MeQuery {
    me {
      id
      username
    }
  }
`;

/*
  query SingleRepositoryQuery($first: Int, $after: String) {
    repository(id: $repositoryId) {

*/
export const MY_REVIEWS = gql`
  query myReviewsQuery($first: Int, $after: String) {
    me {
      username
      id
      reviews(first: $first, after: $after) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            text
            id
            repositoryId
            rating
            createdAt
          }
        }
      }
    }
  }
`;