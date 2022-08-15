import { createHead } from '@vueuse/head'
import App from './App.vue'
import { router } from './routes'
import './styles/main.css'
import 'uno.css'

const head = createHead()
const app = createApp(App)
const modules = import.meta.globEager('/src/modules/*.ts')
// install all modules under `modules/`
Object.values(modules).forEach((module: any) => module.install?.(app))
app.use(router)
app.use(head)
app.mount('#app')

const { addTagView } = useTagStore()
router.beforeEach(async (to, from, next) => {
  if (to.fullPath !== '/')
    addTagView(to)
  next()
})
