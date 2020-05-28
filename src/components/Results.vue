<template>
    <div>

        <!-- Section Header -->
        <SectionHeader :text="headerText" :image="headerImage" :color="headerColor"/>
        <!-- Section Header End -->

        <section class="service-section">  
			<div class="container">

                <h4 class="text-center">WHAT CLIENTS SAY ABOUT OUR JOB</h4>
                
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
                    body: 'Coach Francisco  is an awesome coach. When my 6 year old son started baseball he needed a lot of help. We found Ed through a friend and started taking lessons. He taught my son so much about baseball and helped him with hitting and catching, but most importantly he helped him gain the confidence that he was lacking in baseball. He is a dedicated coach that truly wants to help players improve on and off the field. I highly recommend him.',
                    by: '',
                    relation: '',
                    child: ''
                },
                {
                    body: 'Coach Rosario is great! He helped my 9yr old son sharpen his baseball skills that he needed to become a better player overall. My son is now throwing harder, farther, and with more accuracy! His hitting has improved greatly. He is making more contact with the ball and hits harder than before. We are truly greatful for Coach Rosario help. I would recommend him to anyone who is interested in improving their game!',
                    by: '',
                    relation: '',
                    child: ''
                },
                {
                    body: 'Coach Francisco is Fantastic!!! My son enthusiastically started baseball at 10 years old. Although he had the drive and the desire, it was difficult for him to break into the sport later than most of his teammates that have been playing together for several years. He started his first fall season last year the bottom of the batting order and was physically afraid to swing at the ball. Coach Francisco not only gave my son the fundamental skills he needed to be successful but more importantly he gave him the confidence and mental strength to go out there and do his best!!!',
                    by: '',
                    relation: '',
                    child: ''
                },
                {
                    body: 'My son not only improved his swing and batting average but also gave him the confidence to try new positions both in the infield and outfield. Thanks to coach Rosario, my son has had a positive experience playing baseball . I would highly recommend Coach Francisco to anyone who wants to get that extra edge or just wants to be at the top of their game!!!',
                    by: '',
                    relation: '',
                    child: ''
                },
                {
                    body: 'Coach Francisco is fantastic! My son has been with the Wizard for a little over a year. A few years back my boy had a difficult season which brought his confidence way down. Since working with Francisco my boy has his spark back!! He is improving with each lesson/practice and game. We recently joined A new team and his current coaches made the comment that they did not want to give Him any “tips”. Francisco has improved all aspects of my son’s game (pitching, hitting, fundamentals, and confidence).',
                    by: '',
                    relation: '',
                    child: ''
                },
                {
                    body: 'My son William who is 10 was having a hard time hitting the ball. I had Francisco work with him and with only a couple of lessons, I was amazed on how improved he had gotten. He went from a no hitter to getting hits everytime up at base. He loves working with Francisco. He has worked with a coach before but has never been so enthusiatic as he is with Francisco. We are also working on his pitching and he has improved on that as well. I highly reecommend Coach Francisco, he’s just great!!!!!',
                    by: '',
                    relation: '',
                    child: ''
                },
            ],
            fitnessTestimonials : [
                {                    
                    testimonial: 'My husband and I have been members of So many different Fitness Gym . It wasn’t until January of this year that I decided to give personal training another try .However, from the moment I met Francisco , I knew he was a person that could help me achieve new goals and also the one that would help change my life for the better. I started training with Francisco on January 27, 2020 . During the last 3 ½ months, I have been challenged and pushed by Francisco, and he has taught me a great deal. He makes working out fun and inspires me to reach new goals.'
                },
                {                    
                    testimonial: 'After a few months I took some friends advice and got a personal trainer.  What a difference it made in helping me get the most out of my workouts.  I have been fortunate enough to work with Francisco,. His have really helped me put in the time and energy to get in shape. He listen to me and encourage me and challenge me to give it my all. He have helped me develop my mind set in a positive way and I have changed from a person who thinks I can to I know I can!'
                },
                {                    
                    testimonial: 'I began training since February 2020. Since then, I have lost over 15 pounds, 3 clothing sizes and countless inches. I owe all of that to the dedication and persistence of my trainer Francisco “ ElMagoFit”. The results I’ve gotten from my trainer haven’t been all physical either. Mentally, I’ve never been in better shape. My self-confidence has grown while my waist has shrunk.'
                },
                {                    
                    testimonial: 'I have been working with Coach Francisco for almost 3 months now, and I couldn’t be happier with the results and experience. Francisco is extremely encouraging and pushes me to achieve the goals we have set. The workouts are always different and I look forward to each session. Francisco is very personable and a well rounded person and trainer. He has helped me tone and strengthen my body so I will be able to compete to the best of my ability’s in college level  . I would definitely recommend Francisco ; he is a great trainer .'
                },
                {
                    testimonial: 'I will always express my sincere gratitude for the personal training you have provided me over the past 4 months . I can’t express enough my thanks for the results we have achieved from our many hours  working on building strength, muscle growth while learning the proper form and technique in weight lifting and overall good health. When I started my goal was 100 lbs on the bench press…With your help I was able to obtain a personal best at 215 LBS.  Not bad for an old guy weighing in at 185 lbs.'
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