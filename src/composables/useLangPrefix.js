import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * 返回当前语言的路由前缀
 * zh -> '', en -> '/en', ru -> '/ru'
 */
export function useLangPrefix() {
  const { locale } = useI18n()
  const lp = computed(() => {
    const l = locale.value
    return l === 'zh' ? '' : '/' + l
  })
  return { lp }
}
