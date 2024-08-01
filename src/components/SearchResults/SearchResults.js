import React from 'react';
import styles from './searchResults.module.css';

const SearchResults = ({ searchResults, onClick }) => {

    if (!searchResults) {
        console.log('No results');
        return null;
    } else {
        // console.log('results:', searchResults);
        return (
            <div className={styles.div}>
                {searchResults.map((result) => (
                    <div className={styles.lists} key={result.id}>
                        <div>
                            <img className={styles.img} src={result.images[0].url} alt={result.name} />
                        </div>
                        <div className={styles.p}>
                            <h2>{result.name}</h2>
                            <p>{result.publisher}</p>
                        </div>
                        <div className={styles.plusSign}>
                            <button onClick={() => onClick(result)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
        );

    }

};


export default SearchResults;