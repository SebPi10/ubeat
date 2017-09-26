<template>
  <div class="main_container">
    <h1>Artist</h1>
    <div id="artist_container">
      <div id="artist_picture">
        <img id="artist_image" src="../assets/img/ImagineDragons.jpg">
      </div>
      <div id="artist_info">
        <div id="artist"><h2>Imagine Dragons</h2></div>
        <div id="artist_genre">Pop rock, rock alternatif</div>
      </div>

      <div id="itunes_logo">
        <a target="_blank" href="https://itunes.apple.com/us/artist/imagine-dragons/id358714030"><img
          src="../assets/img/iTunes.png" class="get_on_iTunes"/></a>
      </div>
    </div>
    <div id="albums_container" class="albums_list">
      <div id="albums_title"><h3 class="albums_txt">Albums</h3></div>
      <table id="artist_albums">
        <tr id="tab_albums_header">
          <th>Album</th>
          <th>Name</th>
          <th>Date</th>
          <th>Duration</th>
          <th>Listen</th>
          <th>Add to<br/> playlist</th>
        </tr>

        <tr class="tab_song">
          <td id="artiste_album_picture">
            <router-link to="/album"><img id="artist_album_image" title="Take a look at the album"
                                          src="../assets/img/evolve_imagineDragon.jpg"></router-link>
          </td>
          <td class="album_song">Evolve</td>
          <td class="album_date">2017</td>
          <td id="album_duration">38:25 minutes</td>
          <td class="action_td_column">
            <button class="album_button play_album_button" title="Listen" onclick=""><span class="fa fa-play"></span>
            </button>
          </td>
          <td class="action_td_column">
            <button class="album_button add_to_playlist_button" title="Add to playlist" onclick=""><span
              class="fa fa-plus"></span></button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
  #artist_container {
    display: flex;
  }

  #artiste_album_picture {
    justify-content: flex-start;
  }

  #artiste_album_picture #artist_image {
    width: 35vh;
    height: 35vh;
    margin: auto;
  }

  #artist h2 {
    margin-top: 0;
  }

  #artist_info {
    margin-left: 10px;
  }

  img {
    display: flex;
    justify-content: flex-start;
  }

  #albums_container {
    padding-top: 20px;
  }

  #artist_albums {
    width: 100%;
  }

  #artiste_album_picture #artist_album_image {
    width: 15vh;
    height: 15vh;
    margin: auto;
  }

  #artist_albums th,
  #artist_albums td {
    text-align: center;
  }

  #artist_albums td.action_td_column {
    text-align: center;
  }

  .album_button {
    border-radius: 5px;
    background-color: #ffffff;
    color: #383838;
  }

  .album_button:hover {
    background-color: #383838;
    color: #ffffff;
  }

  .main_container {
    overflow: auto;
  }

  #itunes_logo {
    flex: auto;
  }

  .get_on_iTunes {
    float: right;
    width: 110px;
    height: 40px;
  }
</style>
