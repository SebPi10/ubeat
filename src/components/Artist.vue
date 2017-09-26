<template>
    <div class="main_container">
        <h1>Artist</h1>
        <div class="artist_infos_container">
          <div>
            <img src="../assets/img/ImagineDragons.jpg" class="artist_picture" />
            <div class="artist_infos">
              <h2 class="artist-name">Imagine Dragons</h2>
              <p>Pop rock, rock alternatif</p>
            </div>
          </div>

          <a href="https://itunes.apple.com/us/artist/imagine-dragons/id358714030"><img src="../assets/img/iTunes.png" class="get_on_iTunes" /></a>
        </div>
    </div>
</template>

<style>
  .artist_infos_container {
    width: 100%;
  }

  .artist_picture {
    float: left;
    width: 225px;
    height: 225px;
  }

  .artist_infos {
    float: left;
    margin-left: 10px;
    margin-right: 120px;
  }

  .artist-name {
    margin-top: 0;
    font-weight: bold;
  }

  .get_on_iTunes {
    float: right;
    width: 110px;
    height: 40px;
  }
</style>
