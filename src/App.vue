<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';

  export default {
    name: 'app',
    components: {
      'nav-menu': Navigation
    }
  };
</script>

<style>
  /** Body **/
  body {
    padding: 0;
    background-color: orange;
  }

  /** Footer **/
  #footer {
    bottom: 0;
    width: 100%;
    position: fixed;
    background-color: deeppink;
  }

  #footer #music_zone {
    display: flex;
  }

  #footer #music_zone #music_player_zone {
    width: 60%;
    height: 100px;
    align-self: flex-start;
    background-color: blue;
  }

  #footer #music_zone #music_info_zone {
    width: 40%;
    height: 100px;
    align-self: flex-end;
    background-color: chartreuse;
  }

  #footer #copyright_zone {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #footer #copyright_zone p {
    margin: 2px 0 2px 0;
    color: yellow
  }
</style>
