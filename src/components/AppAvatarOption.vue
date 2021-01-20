<template>
  <div class="avatar">
    <img :src="image">
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: this.$attrs.value,
    }
  },
}
</script>

<style scoped>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
