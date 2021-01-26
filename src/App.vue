<template>
  <div
    class="container column"
    v-if="!loading"
  >
    <app-type-selection @new-option="addNewOption"></app-type-selection>
    <app-output-block :app-options="appOptions"></app-output-block>
  </div>
  <app-loader v-else></app-loader>
  <app-comments-block v-if="!loading"></app-comments-block>
</template>

<script>
import AppTypeSelection from '@/components/AppTypeSelection.vue'
import AppOutputBlock from '@/components/AppOutputBlock.vue'
import AppCommentsBlock from '@/components/AppCommentsBlock.vue'
import AppLoader from '@/components/support/AppLoader.vue'
import axios from 'axios'

export default {
  async mounted() {
    await this.loadBlocks()
    const blockCounter = this.appOptions.length
    if (blockCounter) {
      this.$toast.success(
        `${this.appOptions.length} block${blockCounter > 1 ? 's' : ''} ${
          blockCounter > 1 ? 'are' : 'is'
        } loaded`,
      )
    }
  },
  data() {
    return {
      appOptions: [],
      loading: false,
    }
  },
  components: {
    AppCommentsBlock,
    AppOutputBlock,
    AppTypeSelection,
    AppLoader,
  },
  methods: {
    addNewOption(opts) {
      this.appOptions.push(opts)
    },
    async loadBlocks() {
      try {
        this.loading = true
        const { data } = await axios.get(
          'https://vue3-course-week3-default-rtdb.europe-west1.firebasedatabase.app/blocks.json',
        )
        if (!data) {
          this.$toast.info(`There are no blocks in DB. Create one!`)
          throw new Error('no data')
        }
        this.appOptions = Object.keys(data).map(key => {
          return {
            ...data[key],
          }
        })
        this.loading = false
      } catch (e) {
        this.loading = false
      }
    },
  },
}
</script>
