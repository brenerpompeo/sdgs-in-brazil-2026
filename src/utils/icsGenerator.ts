export interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
}

export function generateICS(event: CalendarEvent): string {
  const [startHour, startMin] = event.startTime.split(':').map(Number);
  const [endHour, endMin] = event.endTime.split(':').map(Number);

  const year = 2026;
  const month = '09';
  const day = '18';

  const formatTime = (h: number, m: number) => {
    const utcH = (h + 4) % 24;
    const hh = String(utcH).padStart(2, '0');
    const mm = String(m).padStart(2, '0');
    return `${year}${month}${day}T${hh}${mm}00Z`;
  };

  const dtStart = formatTime(startHour, startMin);
  const dtEnd = formatTime(endHour, endMin);

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Pacto Global da ONU - Rede Brasil//SDGs in Brazil 2026//PT-BR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:SDGs in Brazil 2026: ${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `STATUS:CONFIRMED`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

export function downloadICS(event: CalendarEvent) {
  const content = generateICS(event);
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  const filename = `SDGs_in_Brazil_2026_${event.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
