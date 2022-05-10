<template>
  <div>
    <b-form-input  v-model="uppercase_text" placeholder="Enter lowercase letters" required></b-form-input>
    <b-button @click=uppercase() >Click</b-button>
     <b-form-input v-model="result" placeholder="Uppercase" required></b-form-input>
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
         this.result = this.uppercase_text.toUpperCase();
        }
    }
  }
</script>