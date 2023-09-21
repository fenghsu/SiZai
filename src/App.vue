<template>
<div class="wrapper">
<header>
  <!-- Vueloading -->
    <VueLoading v-model:active="isLoading"></VueLoading>
  <!-- News Info -->
      <div id="news" class="bg-secondary">
        <div class="news-info bg-third mx-auto text-center">01/01 阿祿出沒在台中勤美市集</div>
      </div>
  <!-- Navbar -->
      <nav id="navbar" class="bg-primary">
        <div class="container">
        <div class="row">
        <div class="navbar-left col-sm-6 my-auto" >
        <RouterLink to="/"><img src="./images/logo.jpg" style="height:40px"  alt="logo"></RouterLink>
        </div>
        <div class="navbar-right col-sm-6 py-2 fs-5 d-flex justify-content-between">
        <p class="mb-0">關於阿祿</p>
        <RouterLink to="/product">商品介紹</RouterLink>
        <RouterLink to="/about">常見問題</RouterLink>
        <div>
        <RouterLink to="/cart"><i class="bi bi-cart-fill"></i></RouterLink>
        <RouterLink to="/admin"><i class="bi bi-person-circle"></i></RouterLink>
        </div>
        </div>
        </div>
        </div>
      </nav>
  </header>
 <RouterView></RouterView>
<br>
<br>
<br>
<!-- Footer -->
<footer id="footer" class="bg-secondary">
  <div class="container">
  <div class="row">
    <div class="col-sm-6 p-4 d-flex justify-content-center">
      <div class="foot-info text-white">
      <h5>聯絡電話：0912-345-678</h5>
      <h5>聯絡時間：12:00 - 20:00</h5>
      <h5>line ID：@661bnvdw</h5>
      </div>
    </div>
    <div class="foot-right col-sm-6 d-flex align-items-center justify-content-center fs-5">
      <i class="bi bi-facebook"></i>
      <i class="bi bi-instagram"></i> 
      <i class="bi bi-line"></i>
    </div>
  </div>
  </div>
</footer>
</div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  },
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color:#333333;
}
.news-info{
line-height: 200%;
width:30%;
clip-path: polygon(95% 0%, 100% 50%, 95% 100%, 5% 100%, 0 50%, 5% 0%);
}
#navbar{
  line-height: 250%;
}
.bi{
  color:#D39F19;
  margin:0 0.8rem;
  background-color: #fff;
  opacity: 0.5;
  padding: 0.25rem;
  border-radius: 0.3rem;
}
</style>
