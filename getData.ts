import { Stats } from './types.ts'
import { createUrl } from './createUrl.ts'
import { Args, DOMParser } from './deps.ts'

export async function getData(args: Args) {
    const res = await fetch(createUrl(args))
    const doc = new DOMParser().parseFromString(await res.text(), 'text/html')
    const rows = doc?.querySelectorAll('.scoresTable tbody tr')

    let stats: Stats[] = []
    let idx = 0

    for (const row of rows!) {
        const td = row.children
        const textDate = td[5].textContent

        const unixTime = textDate.toLowerCase() !== 'today' ? new Date(textDate).getTime() : Date.now()
        const d = new Date(unixTime)
        const year = d.getFullYear()
        const month = d.getMonth() + 1
        const day = d.getDate()

        if (idx > 0)
            stats = [
                // prettier-ignore
                {
                    id        : +td[0].textContent,
                    wpm       : +td[1].textContent.replace(/ WPM/, ''),
                    accuracy  : +td[2].textContent.replace(/\%/, '') * 10,
                    points    : +td[3].textContent,
                    rank      : +td[4].textContent.split('/')[0],
                    racers    : +td[4].textContent.split('/')[1],
                    unixTime,
                    date      : `${year}-${month}-${day}`,
                    ghostUrl  : td[6].querySelector('a')?.getAttribute('href') ?? '',
                    replayUrl : td[6].querySelector('a ~ a')?.getAttribute('href') ?? '',
                },
                ...stats,
            ]
        idx++
    }

    return stats
}
