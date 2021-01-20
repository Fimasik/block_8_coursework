<template>
  <div>
    <p><strong>{{ comment.email }}</strong></p>
    <small>{{ comment.body }}</small>
  </div>
</template>

<script>
export default {
  props: ['comment'],
}
</script>
