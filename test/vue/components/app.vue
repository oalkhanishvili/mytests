<style>
  .red {
    color: #f00;
  }
  /* always present */
  .expand-transition {
    transition: all .3s ease;
    transform: translateX(0);
    overflow: hidden;
  }
  /* .expand-enter defines the starting state for entering */
  /* .expand-leave defines the ending state for leaving */
  .expand-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .expand-leave{
    transform: translateX(100%);
    opacity: 0;
  }

</style>

<template>

<div class="page_wrp">
  <header>
    <div class="header__top">
      <div class="container">

        <!--placeholder div to prevent jumpy content when nav gets pinned-->
        <div style="padding:1em;" data-0="display:none;" data-top-top="display:block;" data-anchor-target="#nav" data-edge-strategy="set">&nbsp;</div>

        <nav id="top-links" class="nav toggle-wrap">
          <a class="toggle fa fa-user" href="#"></a>
          <ul class="toggle_cont" style="display: none; margin-top: 15px; opacity: 0;">
            <li class="toggle-wrap">
            <a href="http://livedemo00.template-help.com/opencart_58387/index.php?route=account/account" class="toggle"> My Account </a>
              <ul class="toggle_cont toggle_cont__right" style="display: none; margin-top: 15px; opacity: 0;">
                <li> <a href="http://livedemo00.template-help.com/opencart_58387/index.php?route=account/login">Sign In</a> </li>
                <li> <a href="http://livedemo00.template-help.com/opencart_58387/index.php?route=account/register">Registration</a> </li>
              </ul>
            </li>
            <li> <a href="http://livedemo00.template-help.com/opencart_58387/index.php?route=account/wishlist" id="compare-total2">
              Wish List </a> </li>
            <li> <a href="http://livedemo00.template-help.com/opencart_58387/index.php?route=checkout/cart"> Shopping Cart </a> </li>
            <li> <a href="http://livedemo00.template-help.com/opencart_58387/index.php?route=checkout/checkout"> Checkout </a> </li>
          </ul>

          <!-- <a v-link="{ path: '/' }"><button class="btn-default">Home</button></a>
          <a v-link="{ path: '/foo' }"><button class="btn-hot">Foo</button></a>
          <a v-link="{ path: '/bar' }"><button class="btn-cool">Bar</button></a> -->
        </nav>
      </div>
    </div>
    <div class="container background">
      <h1>Test Page</h1>

      <h1>Hello App!</h1>
      <div class="container">
        <div class="row">
          <div  data-0="position:relative;top:30%;transition: all 2s;"
          data--100-top="position:fixed;top:0;left:0;width:100%;background:red;transition: all 2s;" data-edge-strategy="set">
            <ul id="nav" class="container">
              <li><a v-link="{ path: '/' }">Home</a></li>
              <li><a v-link="{ path: '/foo' }">Foo</a></li>
              <li><a v-link="{ path: '/bar' }">Foo</a></li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </header>

  <router-view
      keep-alive
  >
  </router-view>

  <!-- footer -->
  <footer></footer>
</div>
</template>
<script type="text/javascript">
window.onload = function() {
  skrollr.init({
    forceHeight: false
  });
}
</script>
