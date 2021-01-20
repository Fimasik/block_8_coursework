<template>
  <h1>{{ title }}</h1>
</template>
<script>
export default {
  // props: ['data'],
  data() {
    return {
      title: this.$attrs.value,
    }
  },
}
</script>
