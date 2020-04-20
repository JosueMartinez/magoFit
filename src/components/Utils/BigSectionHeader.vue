<template>
    <div>
        <section class="hero-section set-bg" :style="{backgroundImage: 'url('+ require('@/assets/img/' + image)+')'}">
            <div class="container">
                <div class="hero-text">
                    <h2>{{text}}</h2>
                </div>
            </div>
        </section>        
    </div>
</template>

<script>
export default {
    name: 'BigSectionHeader',
    props: {
        image: String,
        text: String
    }
}
</script>

<style scoped>
    h2{
        color: white
    }
</style>