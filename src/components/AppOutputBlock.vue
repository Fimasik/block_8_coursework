<template>
  <div class="card card-w70">
    <div v-if="appOptions.length">
      <component
        v-for="comp in appOptions"
        :is="comp.type"
        :key="comp.type"
        v-bind="comp"
      ></component>
    </div>
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import AppAvatarOption from '@/components/AppAvatarOption.vue'
import AppTitleOption from '@/components/AppTitleOption.vue'
import AppSubtitleOption from '@/components/AppSubtitleOption.vue'
import AppTextOption from '@/components/AppTextOption.vue'

export default {
  // props: ['appOptions'],
  props: {
    appOptions: Array[Object],
  },
  components: {
    AppAvatarOption,
    AppTitleOption,
    AppSubtitleOption,
    AppTextOption,
  },
}
</script>

<style scoped>
</style>
