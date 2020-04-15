<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// <!--====== Javascripts & Jquery ======-->
	import '../node_modules/jquery/src/jquery';
	import './assets/js/bootstrap.min.js';
	import './assets/js/jquery.slicknav.js';
	import './assets/js/owl.carousel.min.js';
	import './assets/js/circle-progress.min.js';
	import './assets/js/main.js';
  

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

/* <!-- Google font --> */
	@import 'https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i&display=swap';

	/* <!-- Stylesheets --> */
	@import './assets/css/bootstrap.min.css';
	@import './assets/css/font-awesome.min.css';
	/* @import './assets/css/owl.carousel.min.css'; */
	@import './assets/css/flaticon.css';
	@import './assets/css/slicknav.min.css';

	/* <!-- Main Stylesheets --> */
	@import './assets/css/style.css';

	/* Font-awesome */
	@import '<https://static.fontawesome.com/css/fontawesome-app.css';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
