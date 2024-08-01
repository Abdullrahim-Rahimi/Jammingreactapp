import React, { useState } from 'react';
import styles from './playList.module.css';

const PlayList = async ({ addToPlaylist, onClick }) => {

    console.log('PlayList - addToPlaylist:', addToPlaylist);

    const [searchResults, setSearchResults] = useState([]);

    setSearchResults(await addToPlaylist);
    console.log('PlayList - searchResults:', searchResults);

    if (!searchResults) {
        console.log('No results');
        return null;
    }

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
                            <button onClick={() => onClick(result.id)}>-</button>
                        </div>
                </div>
            ))}
        </div>
    );
};

export default PlayList;