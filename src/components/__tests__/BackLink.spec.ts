import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BackLink from '../BackLink.vue'

describe('BackLink', () => {
  it('renders properly', () => {
    const link = mount(BackLink, { props: { destination: 'Kanjis' } })
    expect(link.text()).toContain('Retour à la liste des kanjis')
  })
})
