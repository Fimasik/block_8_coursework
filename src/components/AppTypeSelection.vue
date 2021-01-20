<template>
  <form
    class="card card-w30"
    @submit.prevent="submitForm"
  >
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select
        id="type"
        v-model="optionType"
      >
        <option value="AppTitleOption">Заголовок</option>
        <option value="AppSubtitleOption">Подзаголовок</option>
        <option value="AppAvatarOption">Аватар</option>
        <option value="AppTextOption">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea
        id="value"
        rows="3"
        v-model="textValue"
      ></textarea>
    </div>

    <button class="btn primary">Добавить</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  emits: ['newoption'],
  data() {
    return {
      optionType: 'AppTitleOption',
      textValue: '',
      option: {},
    }
  },
  methods: {
    async submitForm() {
      this.option = {
        type: this.optionType,
        value: this.textValue,
      }
      this.$emit('newoption', this.option)
      await this.createNewBlock()

      this.optionType = 'AppTitleOption'
      this.textValue = ''
      this.option = {}
    },
    async createNewBlock() {
      try {
        // this.loading = true
        // this.alert = null

        const resp = await axios.post(
          'https://vue3-course-week3-default-rtdb.europe-west1.firebasedatabase.app/blocks.json',
          this.option,
        )

        // if (!data) {
        //   throw new Error('List of people in DB is empty!')
        // }
        // console.log(data)
        // this.people = Object.keys(data).map(key => {
        //   return {
        //     id: key,
        //     // firstName: data[key].firstName,
        //     ...data[key],
        //   }
        // })
        // this.loading = false
      } catch (error) {
        console.log(error)
        // this.loading = false
        // this.alert = {
        //   type: 'danger',
        //   title: 'Error',
        //   text: error.message,
        // }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
