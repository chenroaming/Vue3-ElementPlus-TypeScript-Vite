<script setup lang='ts' name="MenuTitle">
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <el-icon
    v-if="props.icon"
    :size="20">
    <component
      :is="props.icon" />
  </el-icon>
  <span v-if="props.title">{{ props.title }}</span>
</template>
