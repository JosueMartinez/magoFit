<template>
    <div>
        <!-- Section Header -->
        <SectionHeader v-if="baseballData" :text="headerText" :image="headerImage" :color="color" />
        <BigSectionHeader v-if="!baseballData" :text="headerText" :image="headerImage" />        
        <!-- Section Header End -->

        <!-- About section -->
        <!-- Baseball -->
        <section v-if="baseballData" class="about-section-baseball">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-lg-5">
                        <div class="section-title text-center">
                            <h2><span>Welcome</span> to The Wizard Baseball Program</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="about-text">
                            <p>
                                The Wizard Baseball Program specializes in elite baseball training. 
                                This program is designed for individuals ages six and up proven to improve skills and performance.
                                Get to know our staff, learn more about their credentials, and their hobbies. 
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-text">
                            <p>
                                Founder and Owner Francisco Rosario has passion for Baseball 
                                and wants to learn more about those who have the same passion for the game.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-img">
                            <img src="@/assets/img/bb-home.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="text-center pt-4">
                    <a href="#" class="site-btn">Contact Us</a>
                </div>
            </div>
        </section>

        <section v-if="baseballData" class="message-for-parents graybg">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-lg-6">
                        <h2 class="message-title">Message For <span>Parents</span></h2>
                    </div>
                    <div class="col-lg-6">
                        <h4 class="message-body">We train individuals and turn them into great athletes.  Your child's safety will always be our number one priority</h4>
                    </div>
                    
                    
                </div>
            </div>
        </section>
        <!-- Baseball End -->

        <!-- Fitness -->
        <section class="add-section blackbg" v-if="!baseballData">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 ml-auto">
                        <div class="add-text">
                            <h2>Whatever your fitness <span>goal</span> is, our fitness team will help you <span>reach it!</span></h2>						
                        </div>
                    </div>
                    <div class="col-lg-6 ml-auto">
                        <div class="add-text">
                            <ul>
                                <li v-for="(item,index) in fitnessGoals" :key="index"><font-awesome-icon :icon="['fas', 'check-circle']" size="1x" /> {{item}}</li>
                            </ul>
                            <a href="#" class="site-btn">Send Us a Message</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Fitness End -->
        <!-- About section end -->

        <!-- Service section -->

        <!-- Baseball -->
        <section v-if="baseballData" class="service-section">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-lg-4 col-sm-6">
                        <div class="section-title text-center">
                            <h2>Our Program <span>Includes</span></h2>
                        </div>
                    </div>
                </div>

                <!-- Baseball Program -->
                <div  v-if="baseballData">
                    <div v-for="(items,index) in groupedBaseballProgram" class="row" :key="index">
                        <div v-for="(item,index) in baseballProgram" class="col-lg-4 icon-box-item" :key="index">
                            <div class="ib-icon">
                                <font-awesome-icon :icon="['fas', 'baseball-ball']" size="1x" />
                            </div>
                            <h4>{{ item.Title }}</h4>
                            <p>{{item.Description}}</p>
                        </div>
                    </div>
                </div>
                <!-- Baseball Program END -->                
            </div>
        </section>
        <!-- Baseball End -->

        <!-- Fitness -->
        <section  v-if="!baseballData" class="program-section">
            <div class="container">
                 <div class="row justify-content-md-center">
                    <div class="col-lg-4 col-sm-6">
                        <div class="section-title text-center">
                            <h2>Our Program <span>Includes</span></h2>
                        </div>
                    </div>
                </div>
                
				<div class="row">
                    <dotInfo v-for="(item,index) in fitnessProgram" :text="item.Title" :icon="item.Icon" :key="index" />
				</div>
            </div>
        </section>
        <!-- Fitness End -->
        
        <!-- Service section End -->

    </div>
</template>

<script>

import SectionHeader from './Utils/TopSectionHeader'
import BigSectionHeader from './Utils/BigSectionHeader'
import dotInfo from './Utils/dotInfo'

export default {
    name: 'Home',
    components: {
        SectionHeader,
        BigSectionHeader,
        dotInfo,
    },
    data() {
        let isBaseball = this.$store.state.baseball; 
        return {
            baseballData: isBaseball,
            headerImage: isBaseball ? 'bb-home-top.jpg' : 'fitness-home-2.jpg',
            headerText: isBaseball ? "Practice with Purpose.  Play With Passion." : "Don’t be afraid of being a beginner",
            color: 'black',
            baseballProgram: [
                {Title: "Minor Athletics Classes", Description: "Specifically designed for athletes under 7 years of age. These classes teach confidence and the fundamentals of baseball." },
                {Title: "Youth Baseball Classes", Description: "Designed for the athletes that are 12 years and older that want to level their game up for the future, while having fun." },
                {Title: "Private Lessons", Description: "This program offers each player the extra work needed to improve their game specifically. Private baseball lessons for hitting, defense, pitching, speed and agility’s are available." },
                {Title: "Team Practices", Description: "Are you looking to improve your team before any type of tournament and/or game? Our professional baseball coach Francisco Rosario can help you with a more intense practice designed to your needs." },
                {Title: "Baseball Camps", Description: "A camp where athletes aged 5 & up are trained in different aspects of the baseball sport. This camp will offer numerous benefits for baseball players." },
                {Title: "Clinics", Description: "Kids participating In Sports Clinics are geared towards the child who has a particular interest in learning how to play the game, the right way, while having fun." },
            ],
            fitnessProgram: [
                {Title: "Muscle Tone", Icon: "dumbbell"},
                {Title: "Weight loss", Icon: "weight"},
                {Title: "Core Strength", Icon: "dumbbell"},
                {Title: "Nutrition Plan", Icon: "apple-alt"},
                {Title: "Training Programs", Icon: "calendar-check"},
                {Title: "Training Gears", Icon: "dumbbell"}
            ],
            fitnessGoals: [
                "Regardless of prior injuries or limitations,  we can still help you", 
                "No gym membership needed, we can help you from home.",
                "We have your best interest at heart, it's all about you. We want the best for you!",
                "If you're ready for the body you desire, the confidence, self-esteem, strength, mobility and capability which comes with it, send us a message.",
                "We can't wait to help you reach your fitness goal!",
                "We help great individuals ensure their bodies keep them being great!"
            ]
        }
    },
    computed: {
        groupedBaseballProgram(){
            return this.chunk(this.baseballProgram,3);
        },
        // groupedFitnessProgram(){
        //     return this.chunk(this.fitnessProgram,3);
        // }

    },
    methods: {
        chunk (arr, len) {
            const chunks = []
            let i = 0
            const n = arr.length

            while (i < n) {
                chunks.push(arr.slice(i, i += len))
                i+=len+1;
            }

            return chunks
            }
    },    
}
</script>

<style scoped>
    span{
        background: gray;
        color: white
    }  

    .program-section{
        padding: 20px 0 55px;
    }
    
    .message-title{
        color: white;
    }

    .message-body{
        color: white;
    }

    .message-for-parents{
        padding: 84px 0;
    }
</style>