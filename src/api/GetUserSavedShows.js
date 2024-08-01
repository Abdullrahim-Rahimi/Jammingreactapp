

async function GetUserSavedShows() {

    // const token = localStorage.getItem('accessToken');
    
    // const url = 'https://api.spotify.com/v1/me/shows?offset=0&limit=20&locale=en-US,en;q=0.9';

    //console.log('GetUserSavedShows token:', token);

    try {
        const response = await fetch('http://localhost:5000/savedlist');
        
        
        // const response = await fetch(url, {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     },
        // });
        //console.log('GetUserSavedShows token:', token);

        if (response.ok) {
            const data = await response.json();
            console.log('GetUserSavedShows data:', data);
            return data;
        } else {
            console.error('Request failed with status:', response.status);
        }
    } catch (error) {
        console.error('Request failed with error:', error);
    }
}

export default GetUserSavedShows;