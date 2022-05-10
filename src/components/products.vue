<template>
  <div>
    <b-form-input  v-model="product_name" placeholder="product name" required></b-form-input>
    <b-form-input  v-model="product_price" placeholder="product price" required></b-form-input>
    <b-form-input  v-model="product_category" placeholder="product category" required></b-form-input>
    <b-button @click=add() >Add</b-button>
    <b-table  striped hover :items="products" :fields="fields">
    </b-table>
  </div>
</template>

<script>
  export default {
      name:"producT",
    data() {
      return {
        products: [
          { name: "Mobiles", price: 20000, category: 'electronics' },
           { name: "Laptops", price: 50000, category: 'electronics' },
            { name: "Pens", price: 20, category: 'stationary' },
             { name: "pencils", price: 10, category: 'stationary' },
        ],
        fields:["name","price","category"],
        product_name:'',
        product_price:'',
        product_category:''
       
      }
    },
    methods:{
        add(){
          this.products.push({name:this.product_name, price:this.product_price  ,category:this.product_category})
         
        }
    }
  }
</script>
