/* eslint-disable */
import { useState } from 'react';
import { Pressable, FlatList, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import useRepositories from '../../hooks/useRepositories';

import theme from "../../theme";

import RepositoryItem from './RepositoryItem';
import ListHeader from './ListHeader';

const styles = StyleSheet.create({
    separator: {
      height: 10,
      marginTop: 10,
      backgroundColor: theme.colors.listSeparator
    },
    reposirtoryItemContainer: {
        borderWidth: 1,
        padding: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => {

    return (
        <Pressable 
            onPress={item.callback} 
            disabled={false}
        >
            <RepositoryItem 
                fullName={item.fullName}
                description={item.description}
                language={item.language}
                stargazersCount={item.stargazersCount}
                forksCount={item.forksCount}
                reviewCount={item.reviewCount}
                ratingAverage={item.ratingAverage}
                ownerAvatarUrl={item.ownerAvatarUrl}
            />
        </Pressable>
    )
};

/*
 * Testauskäyttöä varten.
 * - tietoja ei lueta palvelimelta, vaan käytetään parametrin välittämää testiaineistoa
 */
export const RepositoryListContainer = ({ repositories }) => {

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList 
            data={repositoryNodes}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
} 

/*
 *
 */
const RepositoryList = () => {

    const navigate = useNavigate();

    const [activeSortingIndex, setActiveSortingInde] = useState(1);
    const [searchStr, setSearchStr] = useState('');

    const sortingOptions = [
        {
          title: "Date of repository's first review asc",
          orderBy: "CREATED_AT",
          orderDirection: "ASC",
          index: 0
        },
        {
          title: "Date of repository's first review desc",
          orderBy: "CREATED_AT",
          orderDirection: "DESC",
          index: 1
        },
        {
          title: "Highest rated repositories",
          orderBy: "RATING_AVERAGE",
          orderDirection: "DESC",
          index: 2
        },
        {
          title: "Lowest rated repositories",
          orderBy: "RATING_AVERAGE",
          orderDirection: "ASC",
          index: 3
        }
    ];

    /*

    */
    const { repositories, refetch, fetchMore } = useRepositories({
        first: 6,
        orderBy: sortingOptions[activeSortingIndex].orderBy, 
        orderDirection: sortingOptions[activeSortingIndex].orderDirection,
        searchKeyword: searchStr
    });

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => {

            const node = edge.node;

            return {
                ...node,
                callback: () => navigate(`/repository/${node.id}`)
            }
        })
        : [];

    const sortingCriteriaHandler = (val) => {
        setActiveSortingInde(val.index);
    }

    const searchSrtHandler = str => {
        setSearchStr(str);
    };

    const onEndReach = () => {
        fetchMore();
    }

    return (
        <View  style={{flex: 1}}>
            <FlatList 
                data={repositoryNodes}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemSeparator}
                ListHeaderComponent={
                    <ListHeader 
                        sortingOptions={sortingOptions}
                        changeHandler = {sortingCriteriaHandler}
                        searchSrtHandler = {searchSrtHandler}
                        searchStr = {searchStr}
                        activeIndex = {activeSortingIndex}
                    />
                }
                onEndReached={onEndReach}
                onEndReachedThreshold={0.5}
            />
        </View>
        
    );
};

export default RepositoryList;