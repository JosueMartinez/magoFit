<template>
    <div>
        <header class="header-section">
		<a href="home.html" class="site-logo">
			<img src="assets/logo.png" alt="">
		</a>
		<ul class="main-menu">
			<li v-for="(item, index) in linkEntries" :key="index">
				<router-link :to="item.routeTo" exact>{{ item.name }}</router-link>
			</li>
			<li class="header-right">
				<div class="hr-box">
					<div class="row">
						<div class="col-md-2"><font-awesome-icon :icon="['fas', 'map-marker-alt']" size="1x" /></div>
						<div class="col-md-10"><h6>{{address}}</h6></div>
					</div>
				</div>
			</li>
		</ul>
	</header>
	<div class="clearfix"></div>
    </div>
</template>

<script>

import constants from '../Utils/Constants'

export default {
	name: 'Header',
	data() {
		return {
			linkEntries: [
				{name: 'home', routeTo: '/home'},
				{name: 'about', routeTo: '/about'},
				{name: 'services', routeTo: '/services'}
			],
			address: constants.contacts.address
		}
	},
}
</script>