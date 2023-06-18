<template>
  <div id="wrapper">
    <!-- Banner -->
    <div id="banner" class="section">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 p-5">
            <h2>來自鹿港沿海地區的傳統小吃</h2>
            <br>
            <h5>鴨肉米糕，是沿海地區的特色辦桌菜</h5>
            <h5>我們用實實在在的食材、實實在在的純粹、實實在在的傳統，獻給品嚐食食仔仔的各位。</h5>
            <br>
            <button class="banner-btn bg-primary">即刻預定</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Product Intro -->
    <div id="products" class="bg-secondary section">
      <div class="container">
        <div class="title text-white border-white">商品介紹</div>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card h-100 p-2">
                <div class="card-body">
                  <h5 class="card-title">鴨肉米糕</h5>
                  <p class="card-text">
                    NT200/斤
                  </p>
                </div>
                <img src="../images/product1.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
            <div class="col">
              <div class="card h-100 p-2">
                <div class="card-body">
                  <h5 class="card-title">家傳小菜</h5>
                  <p class="card-text">NT40/份</p>
                </div>
              <img src="../images/product3.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
            <div class="col">
              <div class="card h-100 p-2">
                <div class="card-body">
                  <h5 class="card-title">蔭瓜香菇雞湯</h5>
                  <p class="card-text">NT60/碗</p>
                </div>
                <img src="../images/product2.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
            <div class="col">
              <div class="card h-100 p-2">
                <div class="card-body">
                  <h5 class="card-title">彌月禮盒</h5>
                  <p class="card-text">
                    NT150-NT200
                  </p>
                </div>
                <img src="../images/product4.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
          </div>
      </div>
    </div>
    <!-- Place to Go -->
    <div id="place" class="section">
      <div class="container">
      <div class="title">阿祿去哪</div>
      <div class="place-list col-sm-8 offset-sm-2">
        <div class="place-item row" v-for="item in schedule" v-bind:key="item.time">
          <div class="col-sm-2">
            <h4>{{item.date}}</h4>
          </div>
          <div class="col-sm-2">
            <img v-bind:src="item.imgUrl" class="container-fluid" alt="">
          </div>
          <div class="col-sm-8">
            <p>地點：{{item.place}} / {{item.addr}}<br>
                時間:{{item.time}}</p>
          </div>
        </div>
      </div>
      </div>
    </div>

    <!-- <GoogleMap api-key="AIzaSyCNcTgQjki9BtrO6Elvji4sD9aXnM_v7A4" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap> -->  

    <!-- Map Card -->
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" id="modalBtn" @click="openModal()">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>


<style scope>
.banner-btn {
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem 2rem;
}
.title{
  font-size:1.5rem;
  padding: 1rem 0;
  margin: 1rem 0 3rem 0;
  border-bottom: 0.8px solid;
}
.section{
  padding: 2rem 0;
}
.card-body{
  text-align: center;
}
.place-item{
  border-bottom: 0.8px solid #424141;
  text-align: center;
}
</style>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from 
"vue3-google-map";
import axios from 'axios';

export default defineComponent({
  data(){
    return{
      schedule:'',
      text:'hello!!!',
    }
  },
  methods:{
    openModal(){
      myModal.show();
    }
 },
  mounted() {
    const url = import.meta.env.VITE_APP_PATH
    this.$http.get(url)
    .then((res) => {
      this.schedule = res.data.schedule
      //console.log(res.data.schedule)
    })
    .catch(( err) => {
      consoel.log(err)
    })
  },
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };
    return { center };
  },
}); 
</script>
