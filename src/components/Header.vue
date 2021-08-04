<template>
    <h2 class="title">{{title}}</h2>
</template>

<script>
export default {
    name :"Header",
    props: {
        title: String,
    }
}
</script>

<style scoped>
.title{
        text-align: center;
        color: white;
        background-color: black;
        border-radius:8px 8px 0px 0px;
        margin-right: 300px;
        /* margin-top: 50px; */
        padding-top: 15px;
        padding-bottom: 15px;
        margin-bottom: 0px;
        margin-top: 79px;
    }
    @media only screen and (min-width: 900px) {
        .title{
           margin-left: 300px;
        }
    }
    @media only screen and (max-width: 600px) {
        .title {
            width: 100%;
            margin-top: 50px;
        }
    
    }
    

</style>
