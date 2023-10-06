<template>
  <Navbar-Component />
  <Cart-Component />
  <Product-Component />
</template>

<style>
.table-image {
  height: 100px;
  width: 100px;
  object-fit: cover;
}
</style>

<script>
const { VITE_APP_PATH } = import.meta.env

const NavbarComponent = {
  template: `<nav class="navbar bg-light p-3">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
        <button type="button" class="btn btn-primary float-end">購物車
            <span class="badge rounded-pill bg-danger">99</span>
        </button>
    </div>
</nav>`
}

const CartComponent = {
  template: `<div class="bg-light my-4 p-4">
<div>購物車沒有任何品項</div>
<table class="table aligen-middle">
  <tbody class="table-group-divider">
    <tr>
      <td><a href="#">X</a></td>
      <td><img class="table-image" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"></td>
      <td>好吃的餅乾</td>
      <td>
        <select class="form-select">
            <option value="">1</option>
        </select>
      </td>
      <td class="text-end">$900</td>
    </tr>
  </tbody>
  <tfoot class="float-end">
    <tr>
        <td colspan="5" class="text-end">總金額NT900</td>
    </tr> 
  </tfoot>
</table>
</div>`
}

const ProductComponent = {
    template:`<div class="row row-cols-3 my-4">
  <div class=" col card">
  <div class="card">
    <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">好吃餅乾 <span class="float-end">100</span> </h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary w-100">Add To Cart</a>
    </div>
    </div>
  </div>
  </div>`
}

export default {
  data() {
    return {
      products: [
        {
            id:1,
            title:'好吃的餅乾',
            imgUrl:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=6',
            price:120
        },
        {
            id:2,
            title:'好喝的飲料',
            imgUrl:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            price:120
        },
        {
            id:3,
            title:'好聽的音樂',
            imgUrl:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            price:120
        },
        {
            id:4,
            title:'好看的電影',
            imgUrl:'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            price:120
        }
      ]
    }
  },
  mounted() {
    // const { id } = this.$route.params
    // console.log(id)

    // this.$http.get(`${VITE_APP_PATH}/${id}`).then((res) => {
    //   console.log(res.data)
    //   this.products = res.data.name
    // })
  },
  components: {
    NavbarComponent,
    CartComponent,
    ProductComponent
  }
}
</script>
