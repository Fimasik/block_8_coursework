<template>
  <div class="avatar">
    <img :src="$attrs.image">
  </div>
</template>

<script>
export default {}
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
