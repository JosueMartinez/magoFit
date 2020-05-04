<template>
    <div>
        <section class="hero-section set-bg" :style="{backgroundImage: 'url('+ require('@/assets/img/entry-bg.jpg')+')'}">
            <div class="container entry-bg">
                <div class="hero-text">
                    <!-- <h2>Practice with Purpose</h2>
                    <h2><span>Play with Passion!</span></h2> -->
                    <router-link class="site-btn" to='/home?baseball=true' exact>Baseball</router-link>
                    <router-link class="site-btn" to='/home?fitness=true' exact>Fitness</router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Entry'
}
</script>

<style scoped>
    .entry-bg{
        background-color: white;
        margin-top: 400px;
    }
</style>>
