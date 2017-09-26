<template>
  <div class="main_container">
    <h1>Album</h1>
    <div id="album_container">
      <div id="album_picture">
        <img id="album_image" src="../assets/img/evolve_imagineDragon.jpg">
      </div>

      <div id="album_info">
        <div id="album_artist"><h2 class="artist_name">Imagine Dragons</h2></div>
        <div id="album_title"><h4>Evolve</h4></div>
        <div id="album_date">Relese : march 2017</div>
        <div id="album_nb_song">10 Songs</div>
        <div id="album_genre">Folk</div>
        <div id="album_duration">38:25 minutes</div>
      </div>

      <div id="itunes_logo">
        <!--<button class="iTune" onclick="href = https://itunes.apple.com/us/artist/imagine-dragons/id358714030""><img src="../assets/img/Get_it_on_iTunes.svg"> </button>-->
        <a target="_blank" href="https://itunes.apple.com/us/artist/imagine-dragons/id358714030"><img
          src="../assets/img/iTunes.png" class="get_on_iTunes"/></a>
      </div>
    </div>

    <p></p>
    <p></p>


    <div id="song_container" class="song_list">
      <table id="album_songs">
        <tr id="tab_song_header">
          <th>No</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Duration</th>
          <th>Listen</th>
          <th>Add to<br/> playlist</th>
        </tr>

        <tr class="tab_song">
          <td class="no_song">1</td>
          <td class="title_song"> Believer</td>
          <td class="artist_song">Imagine Dragons</td>
          <td class="album_song">Evolve</td>
          <td class="duration_song">3:23</td>
          <td class="action_td_column">
            <button class="song_button play_song_button" title="Listen" onclick=""><span class="fa fa-play"></span>
            </button>
          </td>
          <td class="action_td_column">
            <button class="song_button add_to_playlist_button" title="Add to playlist" onclick=""><span
              class="fa fa-plus"></span></button>
          </td>
        </tr>

        <!--for remise1 to delete after JM-->
        <tr>
          <td> 2 </td>
          <td>Rise Up</td>
          <td>Imagine Dragons</td>
          <td>Evolve</td>
          <td>4:06</td>
          <td class="action_td_column">
            <button class="song_button play_song_button" title="Listen" onclick=""><span class="fa fa-play"></span>
            </button>
          </td>
          <td class="action_td_column">
            <button class="song_button add_to_playlist_button" title="Add to playlist" onclick=""><span
              class="fa fa-plus"></span></button>
          </td>
        </tr>
        <tr>
          <td> 3 </td>
          <td>Thunder</td>
          <td>Imagine Dragons</td>
          <td>Evolve</td>
          <td>3:22</td>
          <td class="action_td_column">
            <button class="song_button play_song_button" title="Listen" onclick=""><span class="fa fa-play"></span>
            </button>
          </td>
          <td class="action_td_column">
            <button class="song_button add_to_playlist_button" title="Add to playlist" onclick=""><span
              class="fa fa-plus"></span></button>
          </td>
        </tr>
        <tr>
          <td> 4 </td>
          <td>I Don’t Know Why</td>
          <td>Imagine Dragons</td>
          <td>Evolve</td>
          <td>3:54</td>
          <td class="action_td_column">
            <button class="song_button play_song_button" title="Listen" onclick=""><span class="fa fa-play"></span>
            </button>
          </td>
          <td class="action_td_column">
            <button class="song_button add_to_playlist_button" title="Add to playlist" onclick=""><span
              class="fa fa-plus"></span></button>
          </td>
        </tr>
        <tr>
          <td> 5 </td>
          <td>Dancing In The Dark</td>
          <td>Imagine Dragons</td>
          <td>Evolve</td>
          <td>3:52</td>
          <td class="action_td_column">
            <button class="song_button play_song_button" title="Listen" onclick=""><span class="fa fa-play"></span>
            </button>
          </td>
          <td class="action_td_column">
            <button class="song_button add_to_playlist_button" title="Add to playlist" onclick=""><span
              class="fa fa-plus"></span></button>
          </td>
        </tr>
        <tr>
          <td> 6 </td>
          <td>Start Over</td>
          <td>Imagine Dragons</td>
          <td>Evolve</td>
          <td>5:02</td>
          <td class="action_td_column">
            <button class="song_button play_song_button" title="Listen" onclick=""><span class="fa fa-play"></span>
            </button>
          </td>
          <td class="action_td_column">
            <button class="song_button add_to_playlist_button" title="Add to playlist" onclick=""><span
              class="fa fa-plus"></span></button>
          </td>
        </tr>
        <tr>
          <td> 7 </td>
          <td>Walking The Wire</td>
          <td>Imagine Dragons</td>
          <td>Evolve</td>
          <td>3:33</td>
          <td class="action_td_column">
            <button class="song_button play_song_button" title="Listen" onclick=""><span class="fa fa-play"></span>
            </button>
          </td>
          <td class="action_td_column">
            <button class="song_button add_to_playlist_button" title="Add to playlist" onclick=""><span
              class="fa fa-plus"></span></button>
          </td>
        </tr>
        <tr>
          <td> 8 </td>
          <td>Yesterday</td>
          <td>Imagine Dragons</td>
          <td>Evolve</td>
          <td>6:01</td>
          <td class="action_td_column">
            <button class="song_button play_song_button" title="Listen" onclick=""><span class="fa fa-play"></span>
            </button>
          </td>
          <td class="action_td_column">
            <button class="song_button add_to_playlist_button" title="Add to playlist" onclick=""><span
              class="fa fa-plus"></span></button>
          </td>
        </tr>

      </table>

    </div>

  </div>
</template>

<style>

  #album_container {
    display: flex;
  }

  #album_picture {
    justify-content: flex-start;
  }

  #album_picture #album_image {
    width: 35vh;
    height: 35vh;
  }

  #album_songs {
    width: 100%;
  }

  #itunes_logo {
    flex: auto;
  }

  #album_artist .artist_name {
    margin-top: 0;
  }

  #album_info {
    margin-left: 10px;
  }

  img {
    display: flex;
    justify-content: flex-start;
  }

  .main_container {
    overflow: auto;
  }

  #album_songs th {
    text-align: center;
  }

  #album_songs td.action_td_column {
    text-align: center;
  }

  .song_button {
    border-radius: 5px;
    background-color: #ffffff;
    color: #383838;
  }

  .song_button:hover {
    background-color: #383838;
    color: #ffffff;
  }

  .get_on_iTunes {
    float: right;
    width: 110px;
    height: 40px;
  }
</style>
