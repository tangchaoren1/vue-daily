<template>
  <div class="daily">
      <div class="daily-menu">
          <ul>
              <li v-for="(menu,index) in menus" class="deily-menu-item"  
              @click="channelRecommand(index)">
                  <a href="#" :class="{active: foundMenuIndex == index}">{{menu.item}}</a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foundMenuIndex:0,  
      menus: [
        { item: "日常心理学" },
        { item: "用户推荐日报"},
        { item: "电影日报"},
        { item: "不许无聊"},
        { item: "设计日报"},
        { item: "大公司日报"},
        { item: "财经日报"},
        { item: "互联网安全"},
        { item: "游戏"},
        { item: "更多"}
      ]
    };
  },
  computed: {},
  methods: {
    channelRecommand: function(i) {
      this.foundMenuIndex = i;
    }
  }
};
</script>
