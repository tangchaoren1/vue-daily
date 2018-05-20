<template>
  <div>
      我是一个子导航
    <study-slot>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </study-slot>
  </div>
</template>
<script>
import studySlot from './studySlot.vue';
export default {
  components: { studySlot },
  
}
</script>

