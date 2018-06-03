<template>
   <div>
       这个页面用来练习store
       <span>{{user}}</span>
       <span>快看，我是会变的哦~bui {{num}}</span>
       <button @click='counter'>点我呀</button>
   </div>
</template>
<script>
import $ from "../libs/util";
export default {
  data() {
    return {
      count: 1
    }
  },
 computed: {
     user () {
       return this.$store.state.user.isLogin;
     },
     num(){
        return this.$store.state.count.count;
     }
 },
 mounted(){
    this.getData()
 },
  methods:{
      getData(){
          $.ajax.get('/api/search/suggest/web').then((res) => {
            console.log(res)
          })
      },
      counter(){
       this.$store.dispatch('increment');
        // this.$store.commit('increment');
      }
  }
}
</script>

