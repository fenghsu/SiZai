<template>
    <div class="gMap" id="map"></div>
</template>

<script>
export default {
  props:{
    center: {
      type: Object,
      default: () => ({ lat: 25.0325917, lng: 121.5624999 })
    },
    zoom: {
      type: Number,
      default: 14
    },
    zoomControl: {
      type: Boolean,
      default: true
    }
  },
    data(){
      return{
        map:null,
        //markers:[],
        //text:'123'
      };
    },
    watch:{
      center(val){
        this.restCenter();
        //this.setMarker();
      }
    },
    mounted() {
        this.initMap();
        //this.setMarker();
    }, 
    methods: {
      initMap() {
        this.map = new google.maps.Map(document.getElementById("map"), {
        center: this.center,
        zoom: this.zoom,
        maxZoom: 20,
        minZoom: 3,
        zoomControl: this.zoomControl
        });
      },
      resetCenter() {
      this.map.panTo({ lat: this.center.lat, lng: this.center.lng });
    }
    },

};
</script>