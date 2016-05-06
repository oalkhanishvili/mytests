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
    <header-component></header-component>
   <div class="test">
       <h1>Popup information</h1>
       <h2>If you want it pockemon</h2>
   </div>
    <div class="row">
    <div class="col-xs-6 col-md-3" v-for="n in 4">
        <a href="#" class="thumbnail">
            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=170%C3%97180&w=170&h=180" alt="...">
        </a>
    </div>
    ...
    </div>
</template>

<script>
    import HeaderComponent from '/Users/otura/gulp/test/vue/components/header.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            HeaderComponent
        }
    }
</script>