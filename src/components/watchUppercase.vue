<template>
  <div>
    <b-form-input  v-model="uppercase_text" placeholder="product name" required></b-form-input>
    <b-button @click=uppercase() >Add</b-button>
     <b-form-input v-model="result" placeholder= required></b-form-input>
  </div>
</template>

<script>
  export default {
      name:"producT",
    data() {
      return {
        uppercase_text:'',
        result:"",
      }
    },
    watch:{
        uppercase_text:{
            handler(newValue,oldValue){
                console.log("oldValue",oldValue)
                  console.log("newValue",newValue)
            }
        }
    },
    methods:{
        uppercase(){
        // this.uppercase_text="aaa";
         this.result = this.uppercase_text.toUpperCase();
         console.log(this.result)
        }
    }
  }
</script>