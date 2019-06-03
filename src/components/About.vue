<template>
  <div class="About">
      <div class="content-left">
          <p>
                Mijn naam is Wouter Boerenkamps ik ben 18 jaar en ik woon in breugel.
                ik ben een leerling op het koning willem 1 college in den bosch.
                mijn hobby's zijn boogschieten,fietsen,wandelen en zwemmen.

          </p>
      </div>
      <div class="content-right">
          <div class="image-box">
              <img src="../assets/school.png" alt="logo koning willem 1 college">
          </div>
          <div class="image-box">
              <img src="../assets/boogschieten.jpg" alt="logo haagse rozenknopjes">
          </div>
          <div class="image-box">
              <img src="../assets/wandelen.jpg" alt="een bospad">
          </div>
          <div class="image-box">
              <img src="../assets/zwemmen.jpg" alt="logo otterbad eindhoven">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'About',
      // all titles will be injected into this template
      titleTemplate: null,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'about page' },
        { name: 'keywords', content: 'wouter Boerenkamps, hobbys, handboogschieten,zwemmen,wandelen' },
    ]
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.About{
    margin-top: 200px;
    display: table;
    vertical-align: middle;
    padding: 40px;
}
.content-left{
    display: table-cell;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
    width: 50%;
    font-size: 30px;
}
.content-left p{
    display: inline-block;
    vertical-align: center;
}
.content-right{
    display: table-cell;
    width: 50%;
    position: relative;
    padding: 50px;
    box-sizing: border-box;
}
.image-box{
    height: 50%;
    float: left;
    width: 50%;
}
.content-right img{
    max-width: 50%;
    }
    @media screen and (max-width:1200px){
        .About{
            display: block;
            text-align: center;

        }
        .content-left,.content-right{
            display: block;
            text-align: center;
            width: 100%;
        }
        .content-right{
            margin-bottom: 50px;
            overflow: hidden;
        }
    }
    @media screen and (max-width:960px){
        .image-box{
            width: 100%;
        }
    }
</style>
