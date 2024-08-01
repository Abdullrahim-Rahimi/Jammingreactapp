import './App.css';
import React, { useState, useEffect } from 'react';
import ConnectToSpotifyButton from './components/Atoms/ConnectToSpotifyButton';
import GetSearchResult from './api/SpotifySearchService';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import PlayList from './components/PlayList/PlayList';
import SavePlayListButton from './components/Atoms/SavePlayListButton';
import GetUserSavedShows from './api/GetUserSavedShows'

function App() {

  // const [savedUserShows, setSavedUserShows] = useState([]);
  const [searchResultsState, setSearchResultsState] = useState([]);
  const [playListState, setPlayListState] = useState([]);

  useEffect(() => {
    const fetchUserShows = async () =>{
      const results = await fetchSavedShows();
      console.log('fetch in effect:', results);
      return results;
    }
    setPlayListState(fetchUserShows);
  
  return () => {
    console.log('Cleanup');
  };
}, []);

async function fetchSavedShows() {
  const results = await GetUserSavedShows();
  console.log('The main fetch function:', results);
  setPlayListState(results);
  return results;
}

async function handleOnSearch(searchTerm) {
  const results = await GetSearchResult(searchTerm);
  // console.log("HandleOnSearch func:", results);
  setSearchResultsState(results);
};

function handleAddToList(addItemToPlayList) {
  console.log('Add to list');
  console.log('handle Add Item to list:', playListState);
  if (playListState.find((item) => item.id === addItemToPlayList.id)) {
    console.log('Item already in list');
    return;
  }
  setPlayListState([...playListState, addItemToPlayList]);
}

function handleRemoveFromList(idToRemove) {
  console.log('Remove from list');
  setPlayListState(playListState.filter((item) => item.id !== idToRemove));
}

async function SavePlayList() {
  console.log('Save PlayList');
  try {
    const response = await fetch('http://localhost:5000/savedlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playListState),
    });

    if (response.ok) {
      console.log('Playlist has been saved'); 
      // setPlayListState([]); // Clear the playlist after saving
    } else {
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Request failed with error:', error);
  }

  // localStorage.setItem('playList', JSON.stringify(playListState));
}

return (
  <body className="body">
    <div className="App">
      <ConnectToSpotifyButton />
      <SearchBar onClick={handleOnSearch} />
      <div className="searchResults">
        <SearchResults searchResults={searchResultsState} onClick={handleAddToList} />
        {console.log('App.js - playListState:', playListState)}
        {/* {searchResultsState !== null && <PlayList addToPlaylist={playListState} onClick={handleRemoveFromList} />} */}
        <SavePlayListButton playList={playListState} onClick={SavePlayList} />
      </div>
    </div>
  </body>
);
}

export default App;
