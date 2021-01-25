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
        <option value="AppAvatarOption">Аватар</option>
        <option value="AppSubtitleOption">Подзаголовок</option>
        <option value="AppTextOption">Текст</option>
      </select>
    </div>

    <div
      class="form-control"
      :class="{invalid: errors.textValue}"
    >
      <label for="value">Значение</label>
      <textarea
        id="value"
        rows="3"
        v-model="textValue"
      ></textarea>
      <small v-if="errors.textValue">{{errors.textValue}}</small>
    </div>

    <button class="btn primary">Добавить</button>
  </form>
</template>

<script>
import axios from 'axios'

const myProps = {
  AppTitleOption: 'title',
  AppSubtitleOption: 'subtitle',
  AppAvatarOption: 'image',
  AppTextOption: 'text',
}

export default {
  emits: ['newoption'],
  data() {
    return {
      optionType: 'AppTitleOption',
      textValue: '',
      option: {},
      errors: {
        textValue: null,
      },
    }
  },
  methods: {
    async submitForm() {
      if (this.formIsValid()) {
        this.option = {
          type: this.optionType,
          [myProps[this.optionType]]: this.textValue,
        }
        this.$emit('newoption', this.option)
        await this.createNewBlock()

        this.optionType = 'AppTitleOption'
        this.textValue = ''
        this.option = {}
      }
    },
    formIsValid() {
      let isValid = true
      if (this.textValue.length < 4) {
        this.errors.textValue = 'Length must be more then 3 symbols'
        isValid = false
      } else {
        this.errors.textValue = null
      }
      return isValid
    },
    async createNewBlock() {
      try {
        this.loading = true
        const resp = await axios.post(
          'https://vue3-course-week3-default-rtdb.europe-west1.firebasedatabase.app/blocks.json',
          this.option,
        )
        this.$toast.success(`The new block was successfully added!`)
        this.loading = false
      } catch (error) {
        this.$toast.error(`Something went wrong. Please contact administrator`)
      }
    },
  },
}
</script>

<style scoped>
.form-control.invalid textarea {
  border-color: #e53935;
}
</style>
