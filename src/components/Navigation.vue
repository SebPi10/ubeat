<template>
  <header id="header">
    <nav id="principal_nav">
      <ul class="nav nav-left">
        <li class="nav-item">
          <router-link to="/"><img src="../assets/img/logo.png" height="50" width="100" alt="UBeat" title="Ubeat">
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-eleme" href="#"><span>Playlists</span></a>
        </li>
      </ul>
      <ul class="nav nav-right">
        <li class="nav-item">
          <div class="input-group navSearchDropdown">
            <span class="input-group-addon fa fa-search"></span>
            <input id="navInputSearch" type="text" class="form-control" placeholder="Search..." aria-label="Search..."
                   onkeyup="filterNavSearch();" onfocus="onFocusInputSearch();">
            <span class="input-group-btn">
              <button id="resetSearchInputBtn" class="btn btn-secondary" type="button" onclick="clearNavSearchInput();">X</button>
            </span>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-eleme dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
             aria-expanded="false"><span>Username</span></a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#"><span>Profile</span></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"><span>Logout</span></a>
          </div>
        </li>
      </ul>
    </nav>
    <div id="navSearchList">
    </div>
  </header>
</template>

<style>
  /** Header **/
  #header {
    height: 50px;
    width: 100%;
  }

  #principal_nav {
    top: 0;
    position: fixed;
    height: 50px;
    width: 100%;
    display: flex;
    background-color: purple;
  }

  #principal_nav ul.nav-left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  #principal_nav ul.nav-right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  #principal_nav ul.nav li.nav-item {
    min-width: 100px;
    text-align: center;
  }

  #principal_nav .nav > li > a {
    height: 50px;
    padding: 0;
  }

  #principal_nav .nav > li > a.nav-eleme {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  #principal_nav .nav > li > a.nav-eleme:hover{
    background-color: forestgreen;
    color: purple;
  }

  #principal_nav .nav > li > a.nav-eleme:focus{
    background-color: yellow;
    color: #8a6d3b;
  }

  #principal_nav ul.nav li.nav-item .navSearchDropdown {
    width: 175px;
  }

  #navSearchList {
    right: 100px;
    top: 50px;
    position: fixed;
    height: 50vh;
    width: 50vw;
    background-color: darkred;
    display:none;
    visibility: hidden;
  }
</style>
