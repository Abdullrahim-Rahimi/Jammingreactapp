import React, { useState } from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({onClick}) => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className={styles.div}>
            <div className={styles.searchBar}>
                    <input
                        className={styles.insideSearchBar}
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={() => onClick(searchTerm)}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;