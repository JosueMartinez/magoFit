<template>
    <div>

        <!-- Section Header -->
        <SectionHeader :text="headerText" :image="headerImage" :color="headerColor"/>
        <!-- Section Header End -->

        <section class="service-section">  
			<div class="container">
                
                <!-- Baseball Testimonials -->
				<div class="row" v-if="baseballData">
                    <TextTestimonial v-for="(item,index) in testimonials" :key="index" :testimonial="item"/>
				</div>
                <!-- Baseball Testimonials End -->

                <!-- Fitness Results -->
                <div class="row" v-if="!baseballData">
                    <BeforeAfter v-for="(item,index) in testimonials" :key="index" :result="item" />
                </div>
                <!-- Fitness Results End -->
			</div>
        </section>
    </div>
</template>

<script>

import SectionHeader from './Utils/TopSectionHeader'
import TextTestimonial from './Utils/TextOnlyTestimonial'
import BeforeAfter from './Utils/BeforeAfter'

export default {
    name: 'Results',
    components: {
        SectionHeader,
        TextTestimonial,
        BeforeAfter
    },
    data() {
        let isBaseball = this.$store.state.baseball; 

        return {
            headerText: isBaseball ? 'Testimonials' : 'Results',
            baseballData: isBaseball,
            headerImage: isBaseball ? 'bb-home-top.jpg' : 'fitness-home-2.jpg',
            headerColor: isBaseball ? 'black' : 'white',
            baseballTestimonials : [
                {
                    body: 'Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. ',
                    by: 'juan perez',
                    relation: 'father',
                    child: 'kid'
                },
                {
                    body: 'Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. ',
                    by: 'juan perez',
                    relation: 'father',
                    child: ''
                },
                {
                    body: 'Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. ',
                    by: 'juan perez',
                    relation: 'father',
                    child: ''
                },
                {
                    body: 'Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. ',
                    by: 'juan perez',
                    relation: 'father',
                    child: ''
                },
            ],
            fitnessTestimonials : [
                {
                    beforePic: '',
                    afterPic: '',
                    duration: '3 weeks',
                    weightLost: '12 kg',
                    client: 'John Doe',
                    testimonial: 'Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. '
                },
                {
                    beforePic: '',
                    afterPic: '',
                    duration: '3 weeks',
                    weightLost: '12 kg',
                    client: 'John Doe',
                    testimonial: 'Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. '
                },
                {
                    beforePic: '',
                    afterPic: '',
                    duration: '3 weeks',
                    weightLost: '12 kg',
                    client: 'John Doe',
                    testimonial: 'Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. '
                },
                {
                    beforePic: '',
                    afterPic: '',
                    duration: '3 weeks',
                    weightLost: '12 kg',
                    client: 'John Doe',
                    testimonial: 'Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. '
                },
                {
                    beforePic: '',
                    afterPic: '',
                    duration: '3 weeks',
                    weightLost: '12 kg',
                    client: 'John Doe',
                    testimonial: 'Donec nec sapien in urna fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci. '
                }
            ]
        }
    },
    computed:{
        testimonials(){
            return  this.baseballData ? this.baseballTestimonials : this.fitnessTestimonials;
        }
    }
}
</script>