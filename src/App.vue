<template>
  <loader v-show="loading" disableScrolling="false" object="#7764ce" color1="#09006a" color2="#1f34f5" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/users-app-live">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/author">Author</router-link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  <router-view @loading="changeLoading" />


</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    changeLoading(value) {
      this.loading = value;
    }
  },
  data: function() {
    return {
      loading: true
    }
  }
}
</script>

<style>
@media only screen and (min-width: 900px) {
  .list{
      margin-left: 300px;
  }
}
  body{
    height: 80px;
  }

.main{
  padding-top: 100px;
 
}
body{
  background: rgb(0,212,255);
  background: linear-gradient(68deg, rgba(0,212,255,1) 0%, rgba(31,9,121,1) 43%, rgba(154,0,255,1) 100%);
  background-repeat: no-repeat;
  background-size:cover; 
  min-height: 775px;
}

.navbar {
  opacity: 0.8;
}
.nav-link.active {
    color: rgb(122, 12, 246) !important;
}

</style>
