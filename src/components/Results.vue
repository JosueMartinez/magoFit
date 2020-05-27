<template>
    <div>

        <!-- Section Header -->
        <SectionHeader :text="headerText" :image="headerImage" :color="headerColor"/>
        <!-- Section Header End -->

        <section class="service-section">  
			<div class="container">
				<div class="row">
                    <TextTestimonial v-for="(item,index) in testimonials" :key="index"
                     :body="item.body" :by="item.by" :relation="item.relation" :child="item.child" />
				</div>
			</div>
        </section>
    </div>
</template>

<script>

import SectionHeader from './Utils/TopSectionHeader'
import TextTestimonial from './Utils/TextOnlyTestimonial'

export default {
    name: 'Results',
    components: {
        SectionHeader,
        TextTestimonial
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