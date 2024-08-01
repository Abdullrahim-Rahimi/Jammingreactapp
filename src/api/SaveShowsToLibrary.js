

async function SaveShowsToLibrary(shows) {
    const token = localStorage.getItem('accessToken');
    const url = `https://api.spotify.com/v1/me/shows?ids=${shows.join(',')}`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            console.log('Shows saved to library');
        } else {
            console.error('Request failed with status:', response.status);
        }
    } catch (error) {
        console.error('Request failed with error:', error);
    }
}