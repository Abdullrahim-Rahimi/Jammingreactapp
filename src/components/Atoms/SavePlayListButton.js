

const SavePlayListButton = ({ playList, onClick }) => {
    return (
        <div>
            {playList !== "" && <button onClick={onClick}>Save Playlist</button>}
        </div>
    );
}

export default SavePlayListButton;