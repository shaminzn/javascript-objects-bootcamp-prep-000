var playlist = {

}

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song })
}

updatePlaylist()

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
}

playlist;
