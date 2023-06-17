<template>
    <div>
        單一產品列表
        {{ products }}
    </div>
</template>

<script>
const { VITE_APP_PATH } = import.meta.env

export default {
    data(){
        return{
            products:{}
        }
    },
    mounted(){
        const { id } =this.$route.params
        console.log(id)

        this.$http.get(`${VITE_APP_PATH}/${id}`)
        .then((res) => {
            console.log(res.data);
            this.products = res.data.name
        });
    }
}
</script>