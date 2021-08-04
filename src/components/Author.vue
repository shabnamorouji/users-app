<template>
     <Header title="About me" />
     <div class="about">
         <p>Author: <span class="value">Shabnam Oroujizade</span></p>
         <p>Email: <span class="value"><a href="mailto:orouji.work@gmail.com">orouji.work@gmail.com</a></span></p>
         <a href="#"><img src="../assets/github.png" alt="" srcset=""></a>
     </div>


</template>
<script>
import Header from "./Header.vue";
    export default {
    name:"Author",

    components: {
        Header
    }
}

</script>
<style >
@media only screen and (min-width: 900px) {
        .about{
            margin-left: 300px;
        }
    }
    .about{
        font-size: 18px;
        text-align: center;
        background-color: white;
        /* margin-left: 300px; */
        /* margin-right: 300px; */
        min-height: 400px;
        /* padding-left:84px; */
        max-width: 840px;
        margin-bottom: 0px;
        padding: 10px;
    }
    .value {
        color: rgb(84, 178, 255);
        font-weight: bold;
    }
    img {
        max-width: 300px;
    }
</style>
