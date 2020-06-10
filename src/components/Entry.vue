<template>
    <div>
        <section v-if="!$isMobile()" class="hero-section set-bg" :style="{backgroundImage: 'url('+ require('@/assets/img/entry-bg.jpg')+')'}">
            <div class="container entry-bg">
                <div class="hero-text">
                    <h2>Welcome to <span>MagoFit</span>!</h2>
                    <h3>Let's put some work in!</h3>
                    <router-link class="btn-gray-hover" to='/home?baseball=true' exact>Baseball</router-link>
                    <router-link class="btn-gray-hover" to='/home?fitness=true' exact>Fitness</router-link>
                </div>
            </div>
        </section>

        <!-- Section shown if mobile without bg picture -->
        <section v-if="$isMobile()" class="hero-section">
            <div class="container">
                <div class="hero-text">
                    <h2>Welcome to <span>MagoFit</span>!</h2>
                    <h3>Let's put some work in!</h3>
                    <router-link class="btn-gray-hover" to='/home?baseball=true' exact>Baseball</router-link>
                    <router-link class="btn-gray-hover" to='/home?fitness=true' exact>Fitness</router-link>
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

    span{
        color: white;
    }

    h3 {
        text-decoration: underline;
    }
</style>>
