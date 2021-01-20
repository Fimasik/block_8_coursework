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
          <div>
            <p><strong>{{ comment.email }}</strong></p>
            <small>{{ comment.body }}</small>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="loader"
      v-if="loading"
    ></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
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
        this.loading = false
      }
    },
  },
}
</script>
