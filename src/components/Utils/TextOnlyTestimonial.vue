<template>
    <div class="col-lg-4">
        <div class="icon-box-item testimonial">
            <div class="row">
                <em>"{{testimonial.body}}"</em>
            </div>
            <div class="row float-right">
                <span><strong>{{testimonial.by}}</strong> <br> {{testimonial.relation}} {{testimonial.childName}}</span>
            </div>            
        </div>
    </div> 
</template>

<script>
export default {
    name: 'TextOnly',
    props: {
        testimonial: Object
    },
    data() {
        return {
            
        }
    },
    computed : {
        childName(){
            return this.testimonial.child ? `of ${this.testimonial.child}` : "";
        }
    }
}
</script>