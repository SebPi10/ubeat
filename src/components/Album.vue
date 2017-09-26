<template>
    <div class="main_container">
        <h1>Album</h1>
        <div>GLO-3102 Album page</div>

      <div id="album_container">
        <div id="album_picture">
          <img id="album_image" src="../assets/img/evolve_imagineDragon.jpg">
        </div>

        <div class="album_info">
          <div id="album_artist">Imagine Dragons</div>
          <div id="album_title">Evolve</div>
          <div id="album_date">Relese : march 2017</div>
          <div id="album_nb_song">10 Songs</div>
          <div id="album_genre">Folk</div>
          <div id="album_duration">38:25 minutes</div>
        </div>

        <div>
          <!--<button class="iTune" onclick="href = https://itunes.apple.com/us/artist/imagine-dragons/id358714030""><img src="../assets/img/Get_it_on_iTunes.svg"> </button>-->
          <a href="https://itunes.apple.com/us/artist/imagine-dragons/id358714030"><img src="../assets/img/iTunes.png" class="get_on_iTunes" /></a>
        </div>
      </div>

      <p></p>
      <p></p>


      <div id="song_container" class="song_list">
        <table>
          <tr id="tab_song_header">
            <th>Title</th>
            <th>No</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Duration</th>
            <th>Listen</th>
          </tr>

          <tr class="tab_song">
            <td class="title_song"> Believer</td>
            <td class="no_song">1</td>
            <td class="artist_song">Imagine Dragons</td>
            <td class="album_song">Evolve</td>
            <td class="duration_song">3:23</td>
            <td><button class="play_song_button" onclick=""><img src="../assets/img/playButton.png"></button></td>
          </tr>

          <!--for remise1 to delete after JM-->
          <tr>
            <td>Rise Up</td>
            <td> 2 </td>
            <td>Imagine Dragons</td>
            <td>Evolve</td>
            <td>4:06</td>
            <td><button class="play_song_button" onclick=""><img src="../assets/img/playButton.png"></button></td>
          </tr>
          <tr>
            <td>Thunder</td>
            <td> 3 </td>
            <td>Imagine Dragons</td>
            <td>Evolve</td>
            <td>3:22</td>
            <td><button class="play_song_button" onclick=""><img src="../assets/img/playButton.png"></button></td>
          </tr>
          <tr>
            <td>I Don’t Know Why</td>
            <td> 4 </td>
            <td>Imagine Dragons</td>
            <td>Evolve</td>
            <td>3:54</td>
            <td><button class="play_song_button" onclick=""><img src="../assets/img/playButton.png"></button></td>
          </tr>
          <tr>
            <td>Dancing In The Dark</td>
            <td> 5 </td>
            <td>Imagine Dragons</td>
            <td>Evolve</td>
            <td>3:52</td>
            <td><button class="play_song_button" onclick=""><img src="../assets/img/playButton.png"></button></td>
          </tr>
          <tr>
            <td>Start Over</td>
            <td> 6 </td>
            <td>Imagine Dragons</td>
            <td>Evolve</td>
            <td>5:02</td>
            <td><button class="play_song_button" onclick=""><img src="../assets/img/playButton.png"></button></td>
          </tr>
          <tr>
            <td>Walking The Wire</td>
            <td> 7 </td>
            <td>Imagine Dragons</td>
            <td>Evolve</td>
            <td>3:33</td>
            <td><button class="play_song_button" onclick=""><img src="../assets/img/playButton.png"></button></td>
          </tr>
          <tr>
            <td>Yesterday</td>
            <td> 8 </td>
            <td>Imagine Dragons</td>
            <td>Evolve</td>
            <td>6:01</td>
            <td><button class="play_song_button" onclick=""><img src="../assets/img/playButton.png"></button></td>
          </tr>

        </table>

      </div>

    </div>
</template>

<style>

  #album_container{
    display:flex;
  }

  #album_picture{
    justify-content:flex-start;
  }

  img{
    display:flex;
    justify-content:flex-start;
  }

  .main_container {
    overflow: auto;
  }

  /*h1{*/
  /*display:flex;*/
  /*justify-content:center;*/
  /*}*/
</style>
