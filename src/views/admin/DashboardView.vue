<template>
    <div>
        我是後台頁面
        <hr>
        <router-link to="/admin/product">產品管理</router-link> |
        <router-link to="/admin/place">產品管理</router-link>
         <div id="app">
      <div class="container">
        <div class="row justify-content-center">
          <h1 class="h3 mb-3 font-weight-normal">
            請先登入
          </h1>
          <div class="col-8">
            <form id="form" class="form-signin">
              <div class="form-floating mb-3">
                <input type="email" v-model="user.username" class="form-control" id="username"
                  placeholder="name@example.com" required autofocus>
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" v-model="user.password" class="form-control" id="password"
                  placeholder="Password" required>
                <label for="password">Password</label>
              </div>
              <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
                登入
              </button>
            </form>
          </div>
        </div>
        <p class="mt-5 mb-3 text-muted">
          &copy; 2021~∞ - 六角學院
        </p>
      </div>
    </div>
        <RouterView></RouterView>
    </div>
</template>

<script>
import { RouterView } from 'vue-router'
import axios from 'axios'
const { VITE_APP_SITE } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.user)
      const url = `${VITE_APP_SITE}v2/admin/signin`
      axios.post(url, this.user)
        .then((res) => {
          console.log('suss')
        })
        .catch(() => {
          console.log('err')
        })
    }
  },
  mounted () {
    console.log('mounted')
    console.log(`${VITE_APP_SITE}v2/admin/signin`)
  },
  components: {
    RouterView
  }
}

</script>
