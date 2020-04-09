<template>
    <div>
        <!-- Header section -->	
        <Header />
        <!-- Header section end -->


        <!-- Footer section -->	
        <Footer />
        <!-- Footer section end -->
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
    name: 'master',
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="stylus" scoped>

</style>