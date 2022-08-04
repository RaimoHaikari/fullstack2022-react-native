import { render, within } from '@testing-library/react-native';
import { RepositoryListContainer } from "../components/RepositoryList";
import { formatNumber } from "../utils/HelperFunctions";

/*
 * Tsekataan, että tietueen otsikkotiedot vastaavat oletettua
 */ 
const headerTests = (repositoryItem, avatarItem, edge) => {

  expect(within(repositoryItem).getByText(edge.node.fullName)).toBeDefined();
  expect(within(repositoryItem).getByText(edge.node.description)).toBeDefined();
  expect(within(repositoryItem).getByText(edge.node.language)).toBeDefined();

  expect(avatarItem.props.source.uri).toBe(edge.node.ownerAvatarUrl);

}

/*
 * Tarkistetaan, että speksit on ilmoitettu oikein.
 */
const specsTest = (starCountItem, forksCountItem, reviewsCountItem, ratingsCountItem, edge) => {

  // - tähtien lkm ja otsikko ilmoitettu kuten pitää
  expect(starCountItem.props.children[0].props.children).toBe(formatNumber(edge.node.stargazersCount));
  expect(starCountItem.props.children[1].props.children).toBe('Stars');

  // - forks count lkm ja otsikko ilmoitettu kuten pitää
  expect(forksCountItem.props.children[0].props.children).toBe(formatNumber(edge.node.forksCount));
  expect(forksCountItem.props.children[1].props.children).toBe('Forks');

  // reviews count lkm ja otsikko ilmoitettu kuten pitää
  expect(reviewsCountItem.props.children[0].props.children).toBe(formatNumber(edge.node.reviewCount));
  expect(reviewsCountItem.props.children[1].props.children).toBe('Reviews');

  // ratings count lkm ja otsikko ilmoitettu kuten pitää
  expect(ratingsCountItem.props.children[0].props.children).toBe(formatNumber(edge.node.ratingAverage));
  expect(ratingsCountItem.props.children[1].props.children).toBe('Rating');

}

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      // eslint-disable-next-line jest/expect-expect
      it('renders repository information correctly', () => {

        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };

        /* npm test -- tests/note_api.test.js */
 
        const { getAllByTestId  } = render(<RepositoryListContainer repositories={repositories} />);
        
        const repositoryItems = getAllByTestId('repositoryItem');
        const avatarItems = getAllByTestId('avatarImage');
        const starCountItems = getAllByTestId('Stars-specs');
        const forksCountItems = getAllByTestId('Forks-specs');
        const reviewsCountItems = getAllByTestId('Reviews-specs');
        const ratingsCountItems = getAllByTestId('Rating-specs');

        const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
        const [firstAavatarItem, secondAvatarItem] = avatarItems;
        const [firstStarCountItem, secondStarCountItem] = starCountItems;
        const [firstForksCountItem, secondForksCountItem] = forksCountItems;
        const [firstReviewsCountItem, secondReviewsCountItem] = reviewsCountItems;
        const [firstRatingsCountItem, secondRatingsCountItem] = ratingsCountItems;

        headerTests(
          firstRepositoryItem, 
          firstAavatarItem,
          repositories.edges[0]
        );

        headerTests(
          secondRepositoryItem,
          secondAvatarItem,
          repositories.edges[1]
        );

        specsTest(
          firstStarCountItem,
          firstForksCountItem,
          firstReviewsCountItem,
          firstRatingsCountItem,
          repositories.edges[0]
        )

        specsTest(
          secondStarCountItem,
          secondForksCountItem,
          secondReviewsCountItem,
          secondRatingsCountItem,
          repositories.edges[1]
        )


      });
    });
  });