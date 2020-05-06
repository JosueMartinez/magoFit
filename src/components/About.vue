<template>
    <div>
        <section class="about-section">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-lg-5">
                        <div class="section-title text-center">
                            <h2>Francisco Rosario<span>El Mago</span></h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="about-text">
                            <p>  Francisco was born and raised in the Dominican Republic.  At an early age, Francisco found love for the game of baseball,
                                which taught him the value of discipline, teamwork, and most importantly self-confidence while demonstrating great attitude.  
                                Francisco also learned to love basketball, track and field, among other sports.  After graduating from High School, Francisco 
                                relocated to the US to play baseball at Western Oklahome State College.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-text">
                            <p> In College, he signed a free agent contract to play professional baseball for the New York Yankees 
                                where his hard work and perseverance earned him a rise to AA level. 
                                Following his baseball career, Francisco’s playing skills allowed him the opportunity to play on 
                                independent leagues, including Korean Professional Baseball and winter stretches. As a baseball coach, 
                                he knows what it takes to achieve personal goals and get to the next level being the best version of yourself 
                                while having fun. </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-img">
                            <img src="@/assets/img/about.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="text-center pt-4">
                    <button v-on:click="showHideExperience" class="site-btn">Want to see his experience?</button>
                </div>
                <div class="row  graybg" v-show="showExperience">
                    <section class="experience-section">
                        <div class="container">
                            <div class="row">
                                    <div class="add-text">
                                        <ul>
                                            <li v-for="(item,index) in experience" :key="index"><font-awesome-icon :icon="['fas', 'baseball-ball']" size="1x" /> {{item}}</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            showExperience: false,
            experience: [
                'Western Oklahoma State College - 2011 champions', 
                'New York Yankees up to AA',
                'Frontier Greys (Indy ball)', 
                'Southern Illinois Miners (Indy ball)', 
                'Korea Professional League', 
                'Southern Maryland Blue Crabs (Atlantic league)' 
            ]
        }
    },
    methods: {
        showHideExperience(){
            this.showExperience = !this.showExperience;
        }
    },
}
</script>

<style scoped>
    p{
        text-align: justify;
        text-indent: 4em;
    }

    .experience-section{
        padding-top: 40px;
    }
</style>