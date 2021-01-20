<template>
  <h2>{{ subtitle }}</h2>
</template>

<script>
export default {
  data() {
    return {
      subtitle: this.$attrs.value,
    }
  },
}
</script>
