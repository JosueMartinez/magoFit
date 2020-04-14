<template>
    <div>
        <section class="hero-section set-bg" data-setbg="img/hero-bg.jpg">
            <div class="container">
                <div class="hero-text">
                    <h2>Practice with Purpose</h2>
                    <h2><span>Play with Passion!</span></h2>
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
