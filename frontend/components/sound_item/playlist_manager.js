// Returns the song to play by SoundItem.
// If playlist runs out of songs returns false so SoundItem can handle that case
export default class PlaylistManager {
  constructor(playlist) {
    this.playlist = playlist;
    this.tracks = playlist.tracks;
    this.currentIndex = -1;
  }

  currentTrack() {
    this.currentIndex += 1;
    if (this.currentIndex === this.tracks.length - 1) return false;
    return this.props.tracks[this.currentIndex];
  }
}
