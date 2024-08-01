

async function GetSearchResult(searchTerm) {

    const token = localStorage.getItem('accessToken');

    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        searchTerm
    )}&type=show&market=US`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.shows.items;
            // console.log(data.shows.items);
        } else {
            console.error("Request failed with status:", response.status);
        }
    } catch (error) {
        console.error("Request failed with error:", error);
    }
}

export default GetSearchResult;
