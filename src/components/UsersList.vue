<template>
    <!-- <h2 class="title">{{title}}</h2> -->
        <Header title="Users" />
        <div class="list ">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.username}}</td>
                        <td>{{user.email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>  
</template>
<script>
import Header from "./Header.vue";
import config from "../configs/index.js";
import { callGet } from "../utils/index.js";

export default {
    name:"UsersList",

    data: function() {
        return {
            users: []
        }
    },

    components: {
        Header
    },

    methods: {
        getUsers: async function() {
            const usersResponse = await callGet(config.baseUrl + "/users");
            if (usersResponse !== "error") {
                this.users = usersResponse;
            }
        }
    },
    created() {
        this.getUsers();
    }
}
</script>
<style >
    @media only screen and (min-width: 900px) {
        .list{
            margin-left: 300px;
        }
    }
    .list{
        background-color: white;
        min-height: 400px;
        /* padding-left:84px; */
        max-width: 840px;
        margin-bottom: 0px;
    }
    .table{
        max-width: 823px;
    }
</style>