<template>
  <header id="header">
    <nav id="principal_nav">
      <ul class="nav nav-left">
        <li class="nav-item nav_square">
          <a class="nav-link nav_eleme" href="#"><span class="fa fa-bars"></span></a>
        </li>
        <li class="nav-item">
          <router-link to="/"><img src="../assets/img/logo.png" height="50" width="100" alt="UBeat" title="Ubeat">
          </router-link>
        </li>
      </ul>
      <ul class="nav nav-right">
        <li class="nav-item">
          <div class="input-group nav_search_dropdown">
            <span class="input-group-addon fa fa-search"></span>
            <input id="nav_input_search" type="search" class="form-control" placeholder="Search..." aria-label="Search..."
                   onkeyup="filterNavSearch();" onfocus="onFocusInputSearch();">
            <span class="input-group-btn">
              <button id="reset_search_input_btn" class="btn btn-secondary" type="button" onclick="clearNavSearchInput();">X</button>
            </span>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav_eleme dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
             aria-expanded="false"><span class="fa fa-user-circle-o"></span>&nbsp;<span>Username</span></a>
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
    background-color: #20B2AA;
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

  #principal_nav ul.nav li.nav_square {
    min-width: 50px;
    text-align: center;
    font-size: large;
  }

  #principal_nav .nav > li > a {
    height: 50px;
    padding: 0;
  }

  #principal_nav .nav > li.dropdown > a {
    padding-left: 15px;
    padding-right: 15px;
  }

  #principal_nav .nav > li > a.nav_eleme {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  #principal_nav .nav > li > a.nav_eleme:hover{
    background-color: #42ddd4;
    color: #ffffff;
  }

  #principal_nav .nav > li > a.nav_eleme:focus{
    background-color: #14716c;
    color: #ffffff;
  }

  #principal_nav ul.nav li.nav-item .nav_search_dropdown {
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
