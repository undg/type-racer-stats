import { Args } from './deps.ts'

export function createUrl(args: Args) {
    const user = args.u ?? Deno.env.get('TYPE_RACER_USER') ?? ''
    const numberOfElementsPerPage = args.n ?? '999999999'

    const baseUrl = `https://data.typeracer.com/pit/race_history`
    // const universe = ''
    // const startDate = ''

    const url = new URL(baseUrl)
    url.searchParams.set('user', user)
    url.searchParams.set('n', numberOfElementsPerPage)
    // url.searchParams.set('universe', universe)
    // url.searchParams.set('startDate', startDate)

    return url
}
