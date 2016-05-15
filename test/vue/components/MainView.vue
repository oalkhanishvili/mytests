<style>
    .test{
        position: fixed;
        z-index: 9999;
        background: cyan;
        width: 100vh;
        height: 100vh;
        left:0;right:0;
        margin-right: auto;
        margin-left: auto;
    }
</style>
<template>
   <div class="container">
       <h1>Popup information</h1>
       <h2>If you want it pockemon</h2>
       <div class="row">
         <div class="col-xs-6 col-md-3" v-for="n in 4">
             <a href="#" class="thumbnail">
                 <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=170%C3%97180&w=170&h=180" alt="...">
             </a>
         </div>
       </div>
   </div>
   <section class="about-us">
     <div class="container">
       <about-us></about-us>
     </div>
   </section>
</template>

<script>
    import AboutUs from './about.vue';

    export default{
        components: {
          AboutUs
        }
    }
</script>
