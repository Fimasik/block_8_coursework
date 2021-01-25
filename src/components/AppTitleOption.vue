<template>
  <h1>{{ title }}</h1>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      validator(val) {
        return val.length > 3
      },
    },
  },
  inheritAttrs: false,
}
</script>
