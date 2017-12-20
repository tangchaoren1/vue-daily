<template>
  <div class="daily">
     <div class="daily-menu-item" :class="{on: type === 'recommend'}" 
     @click="handleToRecommend">
        每日推荐
     </div>
     <div class="daily-menu-item" :class="{on: type === 'daily'}"
      @click="showThems = !showThems">
         主题日报
     </div>
     <ul v-show="showThems">
         <li v-for="item in thems">
             <a :class="{on: item.id === themeId && type === 'daily'}" 
             @click="handleToTheme(item.id)">{{item.name}}
             </a>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
  data(){
      return {
          thems:[],
          showThems: false,
      }
  },
  methods: {
      handleToRecommend(){
          this.type = 'recommand';
          this.recommendList = [];

      }
  }
}
</script>

