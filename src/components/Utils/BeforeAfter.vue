<template>
    <div class="col-lg-4">
        <div class="testimonial">
            <h2 class="text-center">{{result.client}}</h2>
            <div class="row">
                <div class="col">
                    <img src="@/assets/img/beforeDefault.jpg" alt="">
                </div>
                <div class="col">
                    <img src="@/assets/img/afterDefault.jpg" alt="">
                </div>
            </div>
            <div class="row text-justify">
                <em>{{result.testimonial}}</em>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'BeforeAfter',
    props: {
        result: Object
    },
    data() {
        return {
            
        }
    },
    computed: {
        beforePic(){
            return '@/assets/img/beforeDefault.jpg'
        },
        afterPic(){
            return '@/assets/img/afterDefault.jpg'
        }
    },

}
</script>