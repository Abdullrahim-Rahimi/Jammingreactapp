import React, { useEffect, useState } from 'react';

const client_id = process.env.REACT_APP_client_id;
const client_secret = process.env.REACT_APP_client_secret;

const ConnectToSpotifyButton = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || '');
    const [buttonColor, setButtonColor] = useState('white');

    useEffect(() => {
        //console.log(accessToken);
     }, [accessToken]);

    const handleClick = async () => {
        try {
            // Make API call to get the access token
            // console.log(client_id); 
            // console.log(client_secret);
            const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${btoa(`${client_id}:${client_secret}`)}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'grant_type=client_credentials'
            });
            const tokenData = await tokenResponse.json();

            // Update the access token and button color
            setAccessToken(tokenData?.access_token);
            setButtonColor('green');

            // Store the access token in localStorage
            localStorage.setItem('accessToken', tokenData.access_token);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div>
                <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>
                    Connect to Spotify
                </button>
            </div>
            <div>
                <p>{accessToken}</p>
            </div>
        </div>
    );
};

export default ConnectToSpotifyButton;
