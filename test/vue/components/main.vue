<style>
    .test{
        position: fixed;
        z-index: 9999;
        background: cyan;
        width: 300px;
        height: 300px;
    }
</style>
<template>
    <header-component></header-component>
   <div class="test">
       <h1>Popup information</h1>
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