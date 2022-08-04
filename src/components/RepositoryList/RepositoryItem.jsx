import { View } from 'react-native';

import Header from './Header';
import Specs from './Specs';

const RepositoryItem = ({description, forksCount, fullName, language, ratingAverage, reviewCount, stargazersCount, ownerAvatarUrl}) => {
    
    return (
        <View testID="repositoryItem">
            <Header 
                fullName={fullName}
                description={description}
                language={language}
                ownerAvatarUrl={ownerAvatarUrl}
            />
            <Specs 
                stars={stargazersCount}
                forks={forksCount}
                reviews={reviewCount}
                rating={ratingAverage}
            />
        </View>
    )
};

export default RepositoryItem;