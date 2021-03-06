import { Stats } from './types.ts'
import { createUrl } from './createUrl.ts'
import { Args, DOMParser } from './deps.ts'

export async function getData(args: Args) {
    const res = await fetch(createUrl(args))
    const html = await res.text()
    const doc = new DOMParser().parseFromString(html, 'text/html') // as HTMLElement // is not implemented in deno. To check types: uncoment run in Lsp tsserver.
    const rows = doc?.querySelectorAll('.Scores__Table__Row')

    let stats: Stats[] = []

    for (const row of rows!) {
        const td = row.children
        const textDate = td[5].textContent.replace(/\s+/g,'')

        const unixTime = textDate.toLowerCase() !== 'today' ? new Date(textDate).getTime() : Date.now()
        const d = new Date(unixTime)
        const year = d.getFullYear()
        const month = d.getMonth() + 1
        const day = d.getDate()

        const [position, racers] = td[4].textContent.split('/')

        stats = [
            // prettier-ignore
            {
                id        : +td[0].textContent,
                wpm       : +td[1].textContent.replace(/ WPM/, ''),
                accuracy  : +td[2].textContent.replace(/\%/, '') * 10,
                points    : +td[3].textContent,
                position  : +position,
                racers    : +racers,
                unixTime  : unixTime,
                date      : `${year}-${month}-${day}`,
            },
            ...stats,
        ]
    }

    return stats
}
