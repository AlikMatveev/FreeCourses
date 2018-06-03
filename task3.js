const [,,a,b] = process.argv;

if(a<1 || a>10000 || b<1 || b>10000) throw new Error('Неправильный промежуток');

const [h,m,s] = new Date((+a + +b)*1000).toUTCString().split(/\s/)[4].split(':');

const format = (num, arr) => {
  const symb = num.slice(-1); 

  if(+num == 0) return '';
  if(symb==1) return `${+num} ${arr[0]}`;
  if(symb>=2 && symb<=4) return `${+num} ${arr[1]}`;
  if(num>=5 && num<=20) return `${+num} ${arr[2]}`;
}

const dateFormat = (h,m,s) => `${format(h, ['час','часа','часов'])} ${format(m, ['минута', 'минуты', 'минут'])} ${format(s, ['секунда', 'секунды', 'секунд'])}`;

process.stdout.write(dateFormat(h,m,s));