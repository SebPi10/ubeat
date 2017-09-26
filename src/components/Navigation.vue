<template>
  <header id="header">
    <nav id="principal_nav">
      <ul class="nav nav_left">
        <li class="nav-item nav_square">
          <input type="checkbox" id="btn_menu"/>
          <a class="nav-link nav_eleme" href="#"><span class="fa fa-bars"></span></a>
        </li>
        <li class="nav-item">
          <router-link to="/"><img id="img_logo" src="../assets/img/logo.png" alt="UBeat" title="Ubeat">
          </router-link>
        </li>
      </ul>
      <ul class="nav nav_right">
        <li class="nav-item">
          <div class="input-group nav_search_dropdown">
            <span class="input-group-addon search_input_logo fa fa-search"></span>
            <input id="nav_input_search" type="search" class="form-control" placeholder="Search..."
                   aria-label="Search..."
                   onkeyup="filterNavSearch();" onfocus="onFocusInputSearch();">
            <button id="reset_search_input_btn" class="btn btn-secondary" type="button"
                    onclick="clearNavSearchInput();"><span class="fa fa-times"></span></button>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav_eleme dropdown-toggle" data-toggle="dropdown" href="#" role="button"
             aria-haspopup="true"
             aria-expanded="false"><span class="fa fa-user-circle-o"></span>&nbsp;<span>Username</span></a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#"><span><span class="fa fa-user"></span>&nbsp;Profile</span></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"><span><span class="fa fa-sign-out"></span>&nbsp;Logout</span></a>
          </div>
        </li>
      </ul>
    </nav>
    <nav id="secondary_nav">
      <div id="side_menu">
        <router-link to="/">Home</router-link>
        <a href="#">Playlists</a>
        <router-link to="/artist">Artists</router-link>
        <router-link to="/album">Albums</router-link>
        <a href="#">Users</a>
        <a href="#">About</a>
      </div>
    </nav>
    <div id="navSearchList">
    </div>
  </header>
</template>
<style>
  /** Header **/
  #header {
    height: 8vh; /*50px*/
    width: 100%;
  }

  #principal_nav {
    top: 0;
    position: fixed;
    height: 8vh; /*50px*/
    width: 100%;
    display: flex;
    background-color: #20B2AA;
  }

  /*Test***********************/
  #header #btn_menu
  {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }
  /***********************/

  #principal_nav #img_logo {
    height: 8vh; /*50px*/
    width: 16vh;
  }

  #principal_nav ul.nav_left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  #principal_nav ul.nav_right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  #principal_nav ul.nav li.nav-item {
    min-width: 16vh; /*100px*/
    text-align: center;
  }

  #principal_nav ul.nav li.nav_square {
    min-width: 8vh; /*50px*/
    text-align: center;
    font-size: large;
  }

  #principal_nav .nav > li > a {
    height: 8vh; /*50px*/
    padding: 0;
  }

  #principal_nav .nav > li.dropdown > a {
    padding-left: 15px;
    padding-right: 15px;
  }

  #principal_nav .nav > li.dropdown .dropdown-menu a.dropdown-item:hover {
    background-color: #42ddd4;
    color: #ffffff;
  }

  #principal_nav .nav > li.dropdown .dropdown-menu a.dropdown-item:focus {
    background-color: #14716c;
    color: #ffffff;
  }

  #principal_nav .nav > li > a.nav_eleme {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }

  #principal_nav .nav > li > a.nav_eleme:hover {
    background-color: #42ddd4;
    color: #ffffff;
  }

  #principal_nav .nav > li > a.nav_eleme:focus {
    background-color: #14716c;
    color: #ffffff;
  }

  #principal_nav ul.nav li.nav-item .nav_search_dropdown {
    border-radius: 5px;
    width: 32vh;
  }

  #nav_input_search {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }

  .search_input_logo {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }

  #reset_search_input_btn {
    position: absolute;
    right: 0;
    z-index: 3;
    background-color: transparent;
    color: #818181;
    border-radius: 5px;
    opacity: 0.5;
  }

  #reset_search_input_btn:hover,
  #reset_search_input_btn:focus {
    border-color: transparent;
    color: #818181;
    opacity: 1;
  }

  #navSearchList {
    right: 16vh;
    top: 8vh; /*50px*/
    position: fixed;
    height: 72vh;
    width: 50vw;
    background-color: #ffffff;
    display: none;
    visibility: hidden;
  }

  /**Side menu**/
  #side_menu {
    width: 0px;
    position: fixed;
    z-index: 1;
    top: 8vh; /*50px*/
    bottom: 20vh; /*124px*/
    left: 0;
    background-color: #ffffff;
    overflow-x: hidden;
    transition: 0.5s;
  }

  #side_menu a {
    padding: 8px 8px 8px 15px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s
  }

  /* When you mouse over the navigation links, change their color */
  #side_menu a:hover {
    background-color: #42ddd4;
    color: #ffffff;
  }

  #side_menu a:focus, .offcanvas a:focus {
    background-color: #14716c;
    color: #ffffff;
  }
</style>
