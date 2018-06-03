const [,,d,m,y] = process.argv;

const getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

if(d<1 || d>getLastDayOfMonth(y, months.indexOf(m)) || !months.includes(m) || y<1970 || y>2999) throw new Error('Некоректная дата');

const date = Date.parse(new Date(new Date().getFullYear()+1,0,1)) - Date.parse(new Date(+y,+months.indexOf(m),+d));
const days = Math.floor(date/86400000);

process.stdout.write(days);