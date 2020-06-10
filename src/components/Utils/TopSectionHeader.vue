<template>
    <div>
        <section class="page-top-section" :style="{backgroundImage: 'url('+ require('@/assets/img/' + image)+')'}">
            <div class="container">
                <h2 v-if="!$isMobile()">{{text}}</h2>
                <h3 v-if="$isMobile()">{{text}}</h3>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'TopSectionHeader',
    props: {
        image: String,
        text: String,
        color: String
    }
}
</script>

<style scoped>
    h2,h3{
        color: white;
        background-color: black;
    }

    .page-top-section{
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>