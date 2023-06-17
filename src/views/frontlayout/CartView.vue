<template>
    <div>
        <h1>蘋果頁面</h1>
        {{ products }}
        <table>
            <tbody>
                <tr v-for="item in products" :key="item.id">
                    <td> {{ item.name}}</td>
                    <RouterLink :to="`/product/${item.id}`">單一產品頁面</RouterLink>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_PATH } = import.meta.env

export default {
    data(){
        return{
            products: [],
        }
    },
    mounted(){
        this.$http.get(`${VITE_APP_PATH}`)
        .then((res) => {
            console.log(res.data);
            this.products = res.data
        })
    },
    components:{
         RouterLink
    }
}
</script>