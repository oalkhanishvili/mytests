<style type="text/css">
.parallax-wrp{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background-image: url(../img/parallax-1-2050x700.jpg);
}
.parallax-wrp > .parallax-image-wrapper{
  z-index: 2;
  position: absolute;
}

</style>
<template keep-alive>
  <div class="parallax">
    <div class="row">
      <div class="col-sm-12">
        <h2>disho of the day</h2>
      </div>
      <div class="parallax-wrp">
        <div
      		class="parallax-image-wrapper parallax-image-wrapper-100"
      		data-bottom-top="transform:translate3d(0px, 0%, 0px)"
      		data-top-bottom="transform:translate3d(0px, 0%, 0px)">

      		<img src="../img/parallax-item1.png"
      			class="parallax-image parallax-image-100"
      			data-bottom-top="transform: translate3d(0px, -20%, 0px);"
      			data-top-bottom="transform: translate3d(0px, 20%, 0px);"
      		></img>
          <img src="../img/parallax-item1.png"
      			class="parallax-image parallax-image-100"
      			data-bottom-top="transform: translate3d(200%, -40%, 200px);"
      			data-top-bottom="transform: translate3d(250%, 40%, 0px);"
      		></img>
      		<!--the +/-80% translation can be adjusted to control the speed difference of the image-->
      	</div>

      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="product-wrp">
          <div class="show-product">
            <div class="image">
                <img alt="Skinny carbonara" title="Skinny carbonara" class="img-responsive" data-src="http://livedemo00.template-help.com/opencart_58387/image/cache/catalog/Ebi-sashimi-shrimp1-237x216.jpg" src="http://livedemo00.template-help.com/opencart_58387/image/cache/catalog/Ebi-sashimi-shrimp1-237x216.jpg">
            </div>
            <div class="caption">
              <div class="name">
                <h2>Name of food</h2>
              </div>
              <div class="description">
                <p>
                  description of the food
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import skrollr from 'skrollr';
  export default{
      ready(){
        skrollr.init({
          smoothScrolling: false,
          mobileDeceleration: 0.004
        });
      }
    }
</script>
