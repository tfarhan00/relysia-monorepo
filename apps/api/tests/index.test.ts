import { edenTreaty } from '@elysiajs/eden'
import { describe, expect, it } from 'bun:test'
import type { App } from '../index'

const client = edenTreaty<App>('http://localhost:3000')

describe('API', () => {
    it('health check', async () => {
        const { data, error } = await client.health.get()
        expect(error).toBe(null)
        expect(data?.status).toBe('ok')
    })

    it('get user', async () => {
        const { data, error } = await client.api.user.get()
        expect(error).toBe(null)
        expect(data?.authenticated).toBe(false)
    })
}) 