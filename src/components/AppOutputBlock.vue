<template>
  <div class="card card-w70">
    <div v-if="appOptions.length">
      <component
        :is="comp.type"
        v-for="comp in appOptions"
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
  props: ['appOptions'],
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
