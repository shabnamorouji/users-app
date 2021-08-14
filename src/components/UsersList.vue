<template>
    <!-- <h2 class="title">{{title}}</h2> -->
        <div class="alert alert-warning">
            In this page list of the users are fetched from an API and you're able to remove users by clicking on trash icon
            and on register form you're able to add new users and also data will be sent to API.
        </div>
        <Header title="Users" />
        <div class="list">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.username}}</td>
                        <td>{{user.email}}</td>
                        <td><img class="trash-icon" src="../assets/trash.png"  @click="deleteUser(user.id)"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <RegisterForm @isLoading="changeLoading" @addUser="addUser" />
</template>
<script>
import Header from "./Header.vue";
import config from "../configs/index.js";
import { callGet } from "../utils/index.js";
import RegisterForm from "./RegisterForm.vue";

export default {
    name:"UsersList",

    emits: ["loading","isLoading", "addUser"],

    data: function() {
        return {
            users: []
        }
    },

    components: {
        Header,
        RegisterForm
    },
    

    beforeCreate() {
        this.$emit("loading", true);
    },

    methods: {
        getUsers: async function() {
            const usersResponse = await callGet(config.baseUrl + "/users");
            if (usersResponse !== "error") {
                this.users = usersResponse;
                localStorage.setItem("users", JSON.stringify(usersResponse));
                this.$emit("loading", false);
            }
        },
        deleteUser(userId){
            const isConfirm = confirm("Are you sure?");
            if (isConfirm ){
                let users = localStorage.getItem("users");
                users = JSON.parse(users);
                users = users.filter(user => user.id !== userId);
                this.users = users;
                localStorage.setItem("users", JSON.stringify(users));
            }
        },
        addUser(user) {
            let users = localStorage.getItem("users");
            users = JSON.parse(users);
            user.id = users[users.length - 1].id + 1;
            users.push(user);
            this.users = users;
            localStorage.setItem("users", JSON.stringify(users));
        },
        changeLoading(isLoading) {
            this.$emit("loading", isLoading);
        }
    },
    created() {
        this.getUsers();
    }
}
</script>
<style scoped>
    .list{
        background-color: white;
        min-height: 400px;
        margin-bottom: 0px;
        overflow-x: scroll;
    }
    @media only screen and (min-width: 900px) {
        .list{
            margin-left: 300px;
            margin-right: 300px;
            
        }
        .alert-warning {
            margin-left: 300px;
            margin-right: 300px;
        }
    }
    
    .table{
        max-width: 823px;
    }
    .trash-icon {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    .alert-warning {
        margin-top: 10px;
    }
</style>