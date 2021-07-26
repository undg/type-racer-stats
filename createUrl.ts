import { Args } from './deps.ts'

export function createUrl(args: Args) {
    const user = args.u ?? Deno.env.get('TYPE_RACER_USER') ?? ''
    const secret = args.s ?? Deno.env.get('TYPE_RACER_SECRET') ?? ''
    const numberOfElementsPerPage = args.n ?? '999999999'

    const baseUrl = `https://data.typeracer.com/pit/race_history`
    const universe = 'play'
    const startDate = ''

    const url = new URL(baseUrl)
    url.searchParams.set('user', user)
    url.searchParams.set('n', numberOfElementsPerPage)
    url.searchParams.set('universe', universe)
    url.searchParams.set('cursor', secret)
    url.searchParams.set('startDate', startDate)

    return url
}
