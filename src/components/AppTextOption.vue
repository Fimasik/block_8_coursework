<template>
  <p>
    {{ text }}
  </p>
</template>
<script>
export default {
  data() {
    return {
      text: this.$attrs.value,
    }
  },
}
</script>
