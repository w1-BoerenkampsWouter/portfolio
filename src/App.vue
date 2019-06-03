<template>
  <div id="app">

    <div class="header">
      <ul>
        <router-link to="/Contact" class="">
        <li>
          <h2>Contact</h2>
        </li>
        </router-link>
        <router-link to="/About" class="">
        <li>
          <h2>About</h2>
        </li>
        </router-link>
        <router-link to="/Projects" class="">
        <li>
          <h2>Projects</h2>
        </li>
        </router-link>
        <router-link to="/" class="">
        <li>
          <h2>Home</h2>
        </li>
        </router-link>
      </ul>
    </div>
    
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background: url(./assets/mountain4.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}

.header{
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  overflow: hidden;
  z-index: 999;
  background-color: #110720;
}
.header ul{
  margin: 0;
  position: relative;
  overflow: hidden;
  padding: 0;
  list-style: none;
  text-align: center;
}
.header  h2{
  color: #fff;
}
.header li{
  float: right;
  text-align: center;
  margin-right: 50px;
}
.header li:hover h2{
  text-decoration: underline;
}

</style>
