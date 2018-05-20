<template>
   <div>
     
   </div>
</template>
<script>
import $ from "../libs/util";
import tadayNewsVue from './tadayNews.vue';
export default {
 mounted(){
    this.getData()
 },
  methods:{
      getData(){
        console.log(123)
          $.ajax.get('/api/search/suggest/web').then((res) => {
            console.log(res)
          })
      }
  }
}
</script>

