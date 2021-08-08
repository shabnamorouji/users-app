<template>
     <Header title="About me" />
     <div class="about">
        <div class="row align-items-center">
            <div class="col-sm-6 left-content ">
                <img src="../assets/profile.jpg" class="rounded-circle profile animate__animated animate__fadeInDown" >
                <h2 class="animate__animated animate__fadeInDown">I'm Shabnam Oroujizade</h2>
            </div>
            <div class="col-sm-6 right-content">
                <p class="bold-text animate__animated animate__fadeInUpBig">I build beautiful user interfaces with modern technologies.</p>

                <p class="animate__animated animate__fadeInUpBig">
                    I started my journey with UI/UX design and then I switched to Front-end programming.
                    I started with HTML,CSS, and Javascript then I tried to learn ReactJs to be able to create modern web applications.
                    I found out that VueJs is getting popular and I started to learn Vue too.
                    This app is developed with Vue framework.
                    Keep in touch with me.
                </p>
                <a class="contact-icon animate__animated animate__fadeInUpBig" href="mailto:orouji.work@gmail.com"><img src="../assets/email.png" /></a>
                <a class="contact-icon animate__animated animate__fadeInUpBig" href="https://instagram.com"><img src="../assets/instagram.png" /></a>
                <a class="contact-icon animate__animated animate__fadeInUpBig" href="tel:+989106871428"><img src="../assets/phone.png" /></a>
            </div>
        </div>
         <!-- <p>Email: <span class="value"><a href="mailto:orouji.work@gmail.com">orouji.work@gmail.com</a></span></p>
         <a href="#"><img src="../assets/github.png" alt="" srcset=""></a> -->
    </div>


</template>
<script>
import Header from "./Header.vue";
    export default {
    name:"Author",

    emits: ["loading"],

    components: {
        Header
    },

    beforeCreate() {
        this.$emit("loading", true);
    },

    mounted() {
        this.$emit("loading", false);
    }
}

</script>
<style scoped>
    .about{
        font-size: 18px;
        text-align: center;
        background-color: white;
        min-height: 400px;
        margin-bottom: 0px;
        padding: 0px 10px;
    }    
@media only screen and (min-width: 900px) {
        .about{
            margin-left: 200px;
            margin-right: 200px;
            padding-left: 85px;
        }
        .title{
             margin-left: 200px !important;
            margin-right: 200px !important;
        }
    }
    
    
    .value {
        color: rgb(84, 178, 255);
        font-weight: bold;
    }
    .profile{
        height:250px;
    }
    
    .right-content{
        background-color:rgba(152, 110, 163, 0.678);
        color: white;
        min-height: 400px;
        padding-top: 50px;
    }
    .left-content{
        color: rgb(152, 110, 163);

    }
    .bold-text {
        font-weight: bold;
    }
    .contact-icon {
        padding: 10px;
    }
    .contact-icon img {
        width: 32px;
    }
</style>
