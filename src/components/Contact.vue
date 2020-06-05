<template>
    <div>
        <SectionHeader :text="headerText" :image="headerImage" :color="headerColor"/>

        <section class="contact-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-4">
					<h2 class="contact-title">Contact Info</h2>
					<div class="contact-info-warp">
						<h4>Location</h4>
						<div class="contact-info">
							<img src="img/icons/1-dark.png" alt="">
							<div class="cf-text">
								<p>{{contacts.address}}</p>
							</div>
						</div>
					</div>
					<div class="contact-info-warp">
						<h4>Subscriptions</h4>
						<div class="contact-info">
							<img src="img/icons/2-dark.png" alt="">
							<div class="cf-text">
								<p>{{contacts.phone}}</p>
							</div>
						</div>
					</div>
					<div class="contact-info-warp">
						<h4>E-mail</h4>
						<div class="contact-info">
							<img src="img/icons/3-dark.png" alt="">
							<div class="cf-text">
								<p>{{contacts.email}}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-8">
					<h2 class="contact-title">Get in touch</h2>
					<ValidationObserver v-slot="{ handleSubmit }" ref="form">
						<form class="contact-form" @submit.prevent="handleSubmit(sendMail)">
							<div class="row">
								<div class="col-md-6">
									<ValidationProvider rules="required" v-slot="{ errors }">
										<input type="text" placeholder="Your name" v-model="form.name">
										<span class="text-danger">{{errors[0]}}</span>
									</ValidationProvider>
								</div>
								<div class="col-md-6">									
									<ValidationProvider rules="required|email" v-slot="{ errors }">
										<input type="text" placeholder="Your e-mail" v-model="form.email">
										<span class="text-danger">{{errors[0]}}</span>
									</ValidationProvider>
								</div>
								<div class="col-md-12">
									<ValidationProvider rules="required" v-slot="{ errors }">
										<input type="text" placeholder="Subject" v-model="form.subject">
										<span class="text-danger">{{errors[0]}}</span>
									</ValidationProvider>
									<ValidationProvider rules="required" v-slot="{ errors }">
										<textarea placeholder="Message" name="message" v-model="form.message"></textarea>
										<span class="text-danger">{{errors[0]}}</span>
									</ValidationProvider>
									<div class="row">
										<input type="submit" class="site-btn" value="Send Message" />
									</div>
								</div>
							</div>
						</form>
					</ValidationObserver>
				</div>
			</div>
		</div>
        <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450908.96660435543!2d-81.89883329633665!3d28.002268990117003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd6ac339a94f0f%3A0x38be38b0aeedeb98!2sPolk%20County%2C%20FL%2C%20USA!5e0!3m2!1sen!2sdo!4v1590773307561!5m2!1sen!2sdo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
	</section>

    </div>
</template>

<script>

import SectionHeader from './Utils/TopSectionHeader'
import constants from '../Utils/Constants'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

export default {
    name: 'Contact',
    components: {
		SectionHeader,
    },
    data() {
        let isBaseball = this.$store.state.baseball; 

        return {
            headerText: 'Contact',
            baseballData: isBaseball,
            headerImage: isBaseball ? 'bb-home-top.jpg' : 'fitness-contact-top.jpg',
            headerColor: isBaseball ? 'black' : 'black',
			contacts: constants.contacts,
			emailService: constants.emailService,
			form: {
				name: '',
				email: '',
				message: '',
				subject: ''
			}
        }
	},
	methods: {
		sendMail() {

			emailjs.send(this.emailService.serviceId, this.emailService.templateId, this.form , this.emailService.userId)
				.then(() => {
					Swal.fire({
						title: 'Success!',
						text: 'Your e-mail has been sent',
						icon: 'success',  // 'success' 
						toast: true,
						timer: 2000,
						position: 'top-end',
						showConfirmButton: false
						})

						this.clearForm();
				}, () => {
					Swal.fire({
						title: 'Error!',
						text: 'Please try again later',
						icon: 'error',
						toast: true,
						timer: 2000,
						position: 'top-end',
						showConfirmButton: false
						})
				});			
		},
		clearForm() {
			this.$nextTick(() => {
				this.form = {};
				this.$refs.form.reset();
				});
		}
	},
}
</script>