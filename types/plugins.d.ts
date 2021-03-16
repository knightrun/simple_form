import { Vue } from 'nuxt-property-decorator'

declare module 'vue/types/vue' {
    interface Vue {
        [key: string]: any
    }
}