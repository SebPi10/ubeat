<template>
  <nav>
    <!--<ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/album">Album</router-link>
      </li>
      <li>
        <router-link to="/artist">Artist</router-link>
      </li>
    </ul>-->
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/"><img src="../assets/img/favicon.png" height="50" width="50" alt="UBeat" title="Ubeat"></router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Playlists</a>
      </li>
      <li>
        <div id="navSearchDropdown">
          <input type="text" placeholder="Search..." id="searchInput" onkeyup="filterNavSearch();">
          <button onclick="clearNavSearchInput();" id="resetSearchInputBtn">X</button>
          <div id="navSearchList">
          </div>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
           aria-expanded="false">Username</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Profile</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style>
</style>
