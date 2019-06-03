<template>
  <div class="projects">
      <div class="project-box">
          <img src="../assets/rust.png" alt="bureau rust">
      </div>
      <div class="project-box">
          <img src="../assets/tdsearch.png" alt="TDsearch">
      </div>
      <div class="project-box">
          <img src="../assets/notarissen.jpg" alt="notarissen">
      </div>
      <div class="project-box">
          <img src="../assets/games.jpg" alt="speelmuurtje">
      </div>
      <div class="project-box">
          
      </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Home page',
      // all titles will be injected into this template
      titleTemplate: null,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'projects page' },
        { name: 'keywords', content: 'bureau rust,tdsearch,speelmuurtje' },
    ]
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .projects{
        margin-top: 200px;
    }
    .project-box{
        width: 50%;
        overflow: hidden;
        float: left;
        padding: 20px;
        box-sizing: border-box;
        
        
    }
    .project-box img{
        width: 100%;
        position: relative;
        box-shadow: 2px 2px 2px black;
    }
    @media screen and (max-width:960px){
        .project-box{
            width: 100%;
        }
    }
</style>
