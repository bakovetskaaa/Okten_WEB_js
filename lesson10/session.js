// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html
// (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування
// сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

const json = localStorage.getItem('sessions');
const sessions = json ? JSON.parse(json) : [];

for  (const session of sessions){
    const wrapper = document.createElement('div');
    const date = document.createElement('div');
    const time = document.createElement('div');
    const device = document.createElement('div');

    wrapper.classList.add('wrapper', 'item');

    const dateObj = format(session.date);

    date.innerHTML = `Date: ${dateObj.DD}/${dateObj.MM}/${dateObj.YYYY}`;
    time.innerHTML = `Time: ${dateObj.hh}:${dateObj.mm}:${dateObj.ss}`;
    device.innerHTML = `Device: ${session.appCodeName} / ${session.appVersion}`

    wrapper.append(date, time, device);
    document.body.appendChild(wrapper);

}

function format(dateString){
    const qwe = new Date(dateString);

    const YYYY  = qwe.getFullYear().toString();
    const MM = (qwe.getMonth() + 1).toString();
    const DD = qwe.getDate().toString();
    const hh = qwe.getHours().toString();
    const mm = qwe.getMinutes().toString();
    const ss = qwe.getSeconds().toString();

    return {
        YYYY: YYYY,
        MM: MM.length < 2 ? `0${MM}` : MM,
        DD: DD.length < 2 ? `0${DD}` : DD,
        hh: hh.length < 2 ? `0${hh}` : hh,
        mm: mm.length < 2 ? `0${mm}` : mm,
        ss: ss.length < 2 ? `0${ss}` : ss,
    }
}