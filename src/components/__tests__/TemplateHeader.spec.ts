import { describe, expect, it, vi } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'
import TemplateHeader from '../TemplateHeader.vue'

describe('TemplateHeader', () => {
  vi.mock('vue-router', () => ({ useRoute: vi.fn() }))

  vi.mocked(useRoute).mockReturnValue({ name: 'name1' } as RouteLocationNormalizedLoaded)

  it('renders properly with router name in h1', () => {
    const wrapper = mount(TemplateHeader, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy() {
              return () => {
                return Promise.resolve()
              }
            },
          }),
        ],
      },
    })

    expect(wrapper.text()).toContain('name1')
  })
})
