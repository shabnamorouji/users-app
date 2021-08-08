<template>
    <Header title="REGISTER FORM" />
    <div class="register-form">
        <div class="row g-3 align-items-center">
            <div class="col-sm-2">
                <label for="inputPassword6" class="col-form-label form-element">Name</label>
            </div>
            <div class="col-sm-4">
                <input v-model="firstName" type="text" placeholder="FirstName" id="inputPassword6" class="form-control form-element" :class="{'input-error': firstNameError}">
            </div>
            <div class="col-sm-4">
                <input v-model="lastName" type="text" placeholder="lastName" id="inputPassword6" class="form-control form-element" :class="{'input-error': lastNameError}">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword"  class="col-sm-2 col-form-label form-element">Username</label>
            <div class="col-sm-8">
                <input v-model="username" type="text" class="form-control form-element" :class="{'input-error':usernameError}" id="inputPassword">
            </div>
        </div>
         <div class="mb-3 row">
            <label for="inputPassword"  class="col-sm-2 col-form-label form-element">Email</label>
            <div class="col-sm-8">
                <input v-model="email" type="email" placeholder="example@email.com" class="form-control form-element" :class="{'input-error':emailError}" id="inputPassword">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label form-element">Password</label>
            <div class="col-sm-8">
                <input v-model="password" type="password"  placeholder="more than 6 characters" class="form-control form-element" :class="{'input-error' :passwordError}" id="inputPassword">
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input  v-model="terms" class="form-check-input form-element"   type="checkbox" id="disabledFieldsetCheck" >
                    <label class="form-check-label form-element"  for="disabledFieldsetCheck">
                        <a :class="{'termsError': termsError}" href="#">Accept terms and policies</a>
                    </label>
                </div>
            </div>
   
        </div>  
        <button type="submit" class="btn btn-register mb-3 form-element" @click="onSubmit">Register</button>
    </div>
    
</template>
<script>
import Header from "./Header.vue";
import config from "../configs/index.js";
import { callPost } from "../utils/index.js";
import { useToast } from "vue-toastification";

export default {
    name: "RegisterForm",

    emits: ["isLoading", "addUser"],

    setup() {
      const toast = useToast();
      return { toast }
    },

    data: function() {
        return {
            firstName: "",
            firstNameError: false,
            lastName: "",
            lastNameError: false,
            username: "",
            usernameError: false,
            email:"",
            emailError:false,
            password:"",
            passwordError:false,
            terms:false,
            termsError:false,
        }

    },

    methods: {
        async onSubmit() {
            
            if (this.validate()) {
                this.$emit("isLoading", true);
                const user = this.createUser();
                const usersResponse = await callPost(config.baseUrl + "/users", user);
                if (usersResponse !== "error") {
                    this.$emit("addUser", user);
                    this.toast.success("User registered successfully", {
                    timeout: 2000
                });
                    this.clearForm();
                }
                this.$emit("isLoading", false);
            }
        },
        clearForm () {
          
            this.firstName = "";
            this.lastName = "";
            this.username = "";
            this.email = "";
            this.password = "";
            
        },
        validate() {
            let updateForm = true;
            if(this.firstName === "" || this.firstName === undefined){
                this.firstNameError = true;
                updateForm = false;
            } else {
                this.firstNameError =false;
                
            }
            if(this.lastName === "" || this.lastName === undefined){
                this.lastNameError = true;
                updateForm = false;
            } else {
                this.lastNameError = false;
            }
            if(this.username === "" || this.username === undefined){
                this.usernameError = true;
                updateForm = false;
            } else {
                this.usernameError = false;
            }
            if(this.email === "" || this.email === undefined || !this.email.includes("@")){
                this.emailError = true;
                updateForm = false;
            } else {
                this.emailError = false;
            }
            if(this.password === "" || this.password === undefined){
                this.passwordError = true;
                updateForm = false;

            } else {
                this.passwordError = false;
                if(this.password.length <= 6){
                     this.passwordError = true;
                     updateForm = false;
                }
                
            }
            if(!this.terms){
                updateForm = false;
                this.termsError = true;
            } else {
                 this.termsError =false;
            }
            return updateForm;
        },
        createUser() {
            return {
                name: this.firstName + this.lastName,
                username: this.username,
                email: this.email,
                password: this.password
            };
        }

    },

    components: {
        Header,
    },
}


        
   

</script>
<style scoped>
    .register-form{
        background-color: white;
        min-height: 400px;
        padding-left:5px;
        margin-bottom: 40px;
    }
    
    .form-element{
        margin-bottom: 30px;
    }
    .btn-register{
        background: rgb(216, 96, 96);
        color: rgb(255, 255, 255);
    }
    .input-error{
        border: 3px solid  rgb(216, 96, 96);
    }
    .termsError{
        color: rgb(216, 96, 96);
    }
    .title {
        margin-bottom: 15px;
    }
    @media only screen and (min-width: 900px) {
        .register-form{
            margin-left: 300px;
            margin-right: 300px;
            padding-left: 85px;
        }
       
    }
    @media only screen and (max-width: 600px) {
        .register-form{
            margin-bottom: 30px;
        }
        .form-element{
            margin-bottom: 10px;
        }
    }
</style>

