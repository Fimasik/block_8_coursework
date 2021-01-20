<template>
  <div
    class="container column"
    v-if="!loading"
  >
    <app-type-selection @newoption="addNewOption"></app-type-selection>
    <app-output-block :appOptions="appOptions"></app-output-block>
  </div>
  <div
    class="loader"
    v-else
  ></div>
  <app-comments-block v-if="!loading"></app-comments-block>
</template>

<script>
import AppTypeSelection from '@/components/AppTypeSelection.vue'
import AppOutputBlock from '@/components/AppOutputBlock.vue'
import AppCommentsBlock from '@/components/AppCommentsBlock.vue'
import axios from 'axios'

// const titleOption = {
//   type: 'AppTitleOption',
//   value: 'Резюме Рика Санчеза',
// }
// const subtitleOption = {
//   type: 'AppSubtitleOption',
//   value: 'Опыт работы',
// }
// const avatarOption = {
//   type: 'AppAvatarOption',
//   value:
//     'https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png',
// }
// const textOption = {
//   type: 'AppTextOption',
//   value:
//     'главный герой американского мультсериала «Рик и Морти», гениальный учёный, изобретатель, атеист (хотя в некоторых сериях он даже молится Богу, однако, каждый раз после чудесного спасения ссылается на удачу и вновь отвергает его существование), алкоголик, социопат, дедушка Морти. На момент начала третьего сезона ему 70 лет[1]. Рик боится пиратов, а его главной слабостью является некий - "Санчезиум". Исходя из того, что существует неограниченное количество вселенных, существует неограниченное количество Риков, герой сериала предположительно принадлежит к измерению С-137. В серии комикcов Рик относится к измерению C-132, а в игре «Pocket Mortys» — к измерению C-123[2]. Прототипом Рика Санчеза является Эмметт Браун, герой кинотрилогии «Назад в будущее»[3].',
// }

export default {
  mounted() {
    this.loadBlocks()
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
        this.appOptions = Object.keys(data).map(key => {
          return {
            ...data[key],
          }
        })
        this.loading = false
      } catch (e) {
        console.log(e)
        this.loading = false
      }
    },
  },
}
</script>
