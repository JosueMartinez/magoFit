<template>
    <div class="col-lg-4">
        <div class="icon-box-item testimonial">
            <div class="row">
                <em>"{{body}}"</em>
            </div>
            <div class="row float-right">
                <span><strong>{{by}}</strong> <br> {{relation}} {{childName}}</span>
            </div>            
        </div>
    </div> 
</template>

<script>
export default {
    name: 'TextOnly',
    props: {
        body: String,
        by: String,
        relation: String,
        child: String
    },
    data() {
        return {
            
        }
    },
    computed : {
        childName(){
            return this.child ? `of ${this.child}` : "";
        }
    }
}
</script>

<style scoped>
    .testimonial{
        margin: 50px;
    }
</style>