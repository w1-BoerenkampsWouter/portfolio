<template>
  <div class="content">
      
      <h1>{{name}}</h1>
      <h2>{{description}}</h2>
    </div>
</template>

<script>
export default {
  name: 'content',
  data() {
    return {
      name: 'Wouter Boerenkamps',
      description: 'Student applicatie en media ontwikkeling'
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
        { name: 'description', content: 'this portfolios homescreen' },
        { name: 'keywords', content: 'wouter Boerenkamps, home screen' },
    ]
    },
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 80vh;
  z-index: 2;
  color: #fff;
}
.content h1,.content h2{
  display: inline-block;
}
.content h1{
    position: absolute;
    top:30%;
    left: 20%;
    font-size: 45px;
}
.content h2{
    position: absolute;
    top: 40%;
    left: 30%;
}
@media screen and (max-width:768px){
        .content h1, .content h2{
            position: static;
            
        }
    }
</style>
