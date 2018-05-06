<template>
   <div>
      这里是本地生活的新闻
      
      <a @click="handleClick('nav1')">子导航1</a>
      <a @click="handleClick('nav2')">子导航2</a>
      <a @click="handleClick('nav3')">子导航3</a>



      <!-- <router-link to='/local/view'>子导航1</router-link>
      <router-link to='/local/view2'>子导航2</router-link>
      <router-link to='/local/view3'>子导航3</router-link> -->
      <router-view></router-view>
   </div>
</template>
<script>
export default {
  methods:{
      handleClick(name){
         this.$router.push({name})
      }
  }

}
</script>

