<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';
  import Album from '@/components/Album';

  export default {
    name: 'app',
    components: {
      'nav-menu': Navigation,
      'album-view': Album
    }
  };

</script>

<style>
  /** Body **/
  body {
    padding: 0;
    background-color: #e6e6e6;
  }

  /** Footer **/
  #footer {
    bottom: 0;
    width: 100%;
    position: fixed;
    background-color: #e6e6e6;
  }

  #footer #music_zone {
    display: flex;
  }

  #footer #music_zone #music_player_zone {
    width: 60%;
    height: 100px;
    align-self: flex-start;
    background-color: #383838;
    border: #20B2AA solid 1px;
    border-radius: 5px;
  }

  #footer #music_zone #music_info_zone {
    width: 40%;
    height: 100px;
    align-self: flex-end;
    background-color: #383838;
    border: #20B2AA solid 1px;
    border-radius: 5px;
  }

  #footer #copyright_zone {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #footer #copyright_zone p {
    margin: 2px 0 2px 0;
    color: #000000;
  }
</style>
