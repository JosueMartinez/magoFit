<template>
    <div>
        <div class="col-lg-3">            
        <div class="dot">
            <div class="dot-info">
                <font-awesome-icon :icon="icon"  size="2x" />
                <p>{{text}}</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dotInfo',
    props: {
        icon: String,
        text: String
    }
}
</script>

<style scoped>
    .dot {
        border: 5px solid black;
        background-color: white;
        height: 150px;
        -moz-border-radius:75px;
        -webkit-border-radius: 75px;
        width: 150px;
    }

    .dot:hover{
        background: black;
    }

    .dot .dot-info:hover{
        color: white;
    }

    .dot .dot-info{
        margin-top: 40px;
        text-align: center;
        color: black;
    }
</style>