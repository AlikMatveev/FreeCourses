const str = process.argv[2].replace(/[^A-Za-z]/g, "").toLowerCase();

if(str.length < 1 || str.length > 10000) throw new Error ('Некорректная строка');

const pol = (str) => {
  if(str == [...str].reverse().join('')) return "YES";
  return "NO";
}

process.stdout.write(pol(str));