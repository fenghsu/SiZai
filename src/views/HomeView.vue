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
          <div class="col-sm-6">
            <div class="roundSpace"  data-aos="fade-left">
            <div class="roundOut">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <div class="roundIn">
              <div class="brandName">鴨</div>
              <div class="brandName">肉</div>
              <div class="brandName">米</div>
              <div class="brandName">糕</div>
            </div>
            </div>
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
        <div class="place-item row" v-for="item in schedule" v-bind:key="item.time" @click="openModal()">
          <div class="col-sm-2">
            <h4>{{item.date}}</h4>
          </div>
          <div class="col-sm-2">
            <img v-bind:src="item.imgUrl" class="container-fluid" alt="" >
          </div>
          <div class="col-sm-8">
            <p>地點：{{item.place}} / {{item.addr}}<br>
                時間:{{item.time}}</p>
          </div>
        </div>
      </div>
      </div>
    </div>

    <!--Map Card -->
<div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <GMapMap
      :center="center"
      :options="options"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
      >  
    <GMapMarker
        :key="index"
        v-for="(marker, index) in markers"
        :position="marker.position"
    >    <GMapInfoWindow :opened="true">
        <div>I am in info window 
        </div>
      </GMapInfoWindow>
    </GMapMarker>
      </GMapMap>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
        <button type="button" class="btn btn-primary" @click='geocode'>Save changes</button>
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
.roundSpace{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
}
.roundOut{
            width: 100%;
            padding-top: 100%;
            background-color: white;
            border-radius: 50%;     
            display: flex;    
            justify-content: center;
            align-items:flex-end;
            animation: rotate 24s infinite linear;
}
.roundOut div{
            width: 30px;
            padding-top: 100%;
            background-color: rgb(204, 5, 5);
            position: absolute;
            border-radius: 8%;
}
.roundOut div:nth-child(1){
            transform: rotate(0deg);
}
.roundOut div:nth-child(2){
            transform: rotate(20deg);
}
.roundOut div:nth-child(3){
            transform: rotate(40deg);
}
.roundOut div:nth-child(4){
            transform: rotate(60deg);
}
.roundOut div:nth-child(5){
            transform: rotate(80deg);
}
.roundOut div:nth-child(6){
            transform: rotate(100deg);
}
.roundOut div:nth-child(7){
            transform: rotate(120deg);
}
.roundOut div:nth-child(8){
            transform: rotate(140deg);
}
.roundOut div:nth-child(9){
            transform: rotate(160deg);
}
.roundIn{
            position: absolute;
            background-color: white;
            width: 90%;
            height: 90%;
            border: 25px solid rgb(204, 5, 5);
            border-radius: 50%;
            display: flex;
            flex-wrap:  wrap;
            justify-content: center;
            align-content: center;
}
@keyframes rotate {
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
}
.brandName{
  width: 40%;
  height: 40%;
  text-align: center;
  font-size: 7rem;
  color: rgb(204, 5, 5) ;
  font-weight: 800;
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
import { Modal }  from "bootstrap"
import AOS from "aos"
import "aos/dist/aos.css"

const { VITE_APP_PATH } = import.meta.env


export default({
  data(){
    return{
      schedule:'',
      center: { lat:51.093048, lng:6.842120},
      options:{ zoomControl: true,
                mapTypeControl: false,
                scaleControl: true,
                streetViewControl: false,
                rotateControl: true,
                fullscreenControl: false},
      markers: [
        {
          position: {
          lat:51.093048, lng:6.842120
          },
        }
      ],
      restaurant:{
        address:'彰化縣鹿港鎮四維路10號',
        lat:'',
        lng:''
      },
      geocoder:null
    }
  },
  methods:{
    openModal(){
    const modal = document.querySelector('#modal') 
    const myModal = new Modal(modal)
    myModal.show(); 
    },
    // initGeocoder() {
    
    // 
    // },
    geocode(){
    const geocoder = new google.maps.Geocoder();  
    //console.log(geocoder); 
    const address = this.restaurant.address;
    //console.log(address) //彰化縣鹿港鎮四維路10號
    geocoder.geocode({address:address},function(results,status){
      if(status === 'OK'){
        console.log(address)
      }else{
        console.log(status)
      }
    })  
    }
  }, 
  mounted() {
    this.$http.get(`${VITE_APP_PATH}`)
    .then((res) => {
      this.schedule = res.data.schedule
      this.$nextTick(()=>{
      //this.initGeocoder()
      this.geocode()
    })
    })
    .catch(( err) => {
      console.log(err)
    });

    AOS.init({
      delay:2000,
      duration:1200
    });
  },
  
}); 
</script>
