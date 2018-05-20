<template>
  <div>
      我是一个子导航
    <study-slot>
      <span slot="green">这个是具名的green slot</span>
      <span slot="red">这个是具名的red slot</span>
    </study-slot>
  </div>
</template>
<script>
import studySlot from './studySlot.vue';
export default {
  components: { studySlot },
  
}
</script>

