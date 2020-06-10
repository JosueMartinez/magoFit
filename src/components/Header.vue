<template>
    <div>
		<vs-navbar v-model="activeItem" class="nabarx header-section" ref="menuTop">
			<div slot="title">
				<vs-navbar-title>
					<router-link to="/" class="site-logo">
						<img src="@/assets/img/logo-small.jpg" alt="">
					</router-link>
				</vs-navbar-title>
			</div>
			
			<vs-navbar-item index="0" v-for="(item, index) in linkEntries" :key="index">
				<router-link :to="item.routeTo" exact>{{ item.name }}</router-link>
			</vs-navbar-item>
			
			<ul class="main-menu">
				<li class="header-right">
					<div class="hr-box">
						<div class="row">
							<div class="col-md-2"><font-awesome-icon :icon="['fas', 'map-marker-alt']" size="1x" /></div>
							<div class="col-md-10"><h6>{{address}}</h6></div>
						</div>
					</div>
				</li>
			</ul>
		</vs-navbar>
		<div class="clearfix"></div>
    </div>
</template>

<script>

import constants from '../Utils/Constants'

export default {
	name: 'Header',
	data() {
		return {
			linkEntries: constants.linkEntries,
			address: constants.contacts.address,
			activeItem: 0
		}
	},
	watch: {
		$route() {
		const button = this.$refs.menuTop.$el.querySelector(
			".vs-navbar--btn-responsive"
		);
		button.click();    
		}
	}
}
</script>