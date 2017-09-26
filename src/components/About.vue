<template>
  <div class="main_container">
    <h1>About</h1>
    <div id="about_container">
      <div id="about_ubeat_container">
        <div id="about_ubeat_title"><h2>What about UBeat ?</h2></div>
        <div id="music_about_ubeat_txt">
          <h3>Music</h3>
          <div>
            You can either play some music that you like or Ubeat can help you discover a ton of music that you will enjoy.
          </div>
        </div>
        <div id="playlists_about_ubeat_txt">
          <h3>Playlists</h3>
          <div>
            With UBeat, you can build the perfect playlist or even copy one already created to enjoy anytime.
          </div>
        </div>
      </div>
      <div id="about_us_container">
        <div id="about_us_text">
          <div id="about_us_title"><h2>But, what about us ?</h2></div>
          <div id="team_about_us_txt">
            <h3>Our team</h3>
            <div>
              <ul>
                <li>Assane Faye Sene</li>
                <li>Josée Martel</li>
                <li>Louis-Charles Drouin-Zara</li>
                <li>Luc Geffrault</li>
                <li>Olivier Parent</li>
                <li>Sébastien Pierre</li>
              </ul>
            </div>
          </div>
          <div id="who_about_us_txt">
            <h3>Who are we ?</h3>
            <div>
              We are students at Laval University in the course <b>GLO-3102 - Développement d'application web</b>.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  #about_container {
    display: flex;
  }

  #about_ubeat_container {
    justify-content: flex-start;
  }

  #about_us_container {
    justify-content: flex-start;
  }

  .main_container {
    overflow: auto;
  }
</style>
