
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    title: 'All-day event',
    start: todayStr
  },
  {
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  },
  {
    title: 'Birthday Party',
    start: '2022-01-13T07:20:20',
    end: '2022-01-13T14:20:20',
  }
]
