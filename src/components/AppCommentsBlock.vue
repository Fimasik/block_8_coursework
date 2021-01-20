<template>
  <div class="container">
    <p>
      <button
        class="btn primary"
        @click="loadComments"
      >Загрузить комментарии</button>
    </p>
    <div
      class="card"
      v-if="showComments"
    >
      <h2>Комментарии</h2>
      <ul class="list">
        <li
          class="list-item"
          v-for="(comment) in comments"
          :key="comment.id"
        >
          <app-comment :comment="comment"></app-comment>
        </li>
      </ul>
    </div>
    <app-loader v-if="loading"></app-loader>
  </div>
</template>

<script>
import AppLoader from '@/components/support/AppLoader.vue'
import AppComment from '@/components/support/AppComment.vue'
import axios from 'axios'

export default {
  components: {
    AppLoader,
    AppComment,
  },
  data() {
    return {
      comments: [],
      loading: false,
      showComments: false,
    }
  },
  methods: {
    async loadComments() {
      try {
        this.loading = true
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/comments?_limit=42',
        )
        this.comments = data
        this.loading = false
        this.showComments = true
      } catch (e) {
        console.log(e)
        this.loading = false
        this.showComments = false
      }
    },
  },
}
</script>
