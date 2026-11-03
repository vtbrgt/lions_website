const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

export function downloadIcs({ title, date, time, location, description }) {
  const start = new Date(`${date}T${time}:00`)
  const end = new Date(start.getTime() + 60 * 60 * 1000)
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Lions Demo//PT', 'BEGIN:VEVENT',
    `UID:${Date.now()}@lions-demo`, `DTSTAMP:${fmt(new Date())}`, `DTSTART:${fmt(start)}`, `DTEND:${fmt(end)}`,
    `SUMMARY:${title}`, `DESCRIPTION:${description}`, `LOCATION:${location}`, 'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n')
  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }))
  const a = Object.assign(document.createElement('a'), { href: url, download: 'visita-lions.ics' })
  a.click()
  URL.revokeObjectURL(url)
}
