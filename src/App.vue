<template>
  <div id="app" class="side_menu_open">
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
    background-color: #e6e6e6;
  }

  #app {
    height: 80vh;
  }

  /**Side menu**/
  .side_menu_open #side_menu {
    width: 20vw; /*250px*/
  }

  .side_menu_open .main_container {
    margin-left: 20vw; /*250px*/
  }

  .main_container {
    height: 72vh;
    transition: margin-left .5s;
    padding: 20px;
  }

  /** Footer **/
  #footer {
    bottom: 0;
    height: 20vh;
    width: 100%;
    position: fixed;
    background-color: #e6e6e6;
  }

  #footer #music_zone {
    display: flex;
  }

  #footer #music_zone #music_player_zone {
    width: 60%;
    height: 16vh; /*100px*/
    align-self: flex-start;
    background-color: #383838;
    border: #20B2AA solid 1px;
    border-radius: 5px;
  }

  #footer #music_zone #music_info_zone {
    width: 40%;
    height: 16vh; /*100px*/
    align-self: flex-end;
    background-color: #383838;
    border: #20B2AA solid 1px;
    border-radius: 5px;
  }

  #footer #copyright_zone {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4vh;
  }

  #footer #copyright_zone p {
    margin: 2px 0 2px 0;
    color: #000000;
  }
</style>
