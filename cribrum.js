// Задача №1
function update(list) {
  let $newList = [...list];
  list.push('e');
  $newList.push('f');
  return $newList;
}

let x = ['a', 'b', 'c', 'd'];
console.log(update(x));
console.log(x);

// Задача №2
const replaceLink = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Ошибка при получении данных: ${response.status}`);
    }

    //получаю текст из страницы
    const text = await response.text();

    //преобразую в HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    //пробежал циклом и заменил линки
    const links = doc.querySelectorAll('p a');//
    links.forEach(link => {
      const href = link.href;
      const text = link.textContent;
      const replacement = `[${text}|${href}]`
      link.outerHTML = replacement;
    });

    //получил модифицированный HTML
    const modifiedHTML = doc.body.innerHTML;
    console.log(modifiedHTML);

  } catch (e) {
    console.log(e, 'Ошибка');
  }
}

replaceLink('https://lenta.ru/news/2024/09/18/lebedev-/');


//задача №3
const checkLinks = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка при получении данных: ${response.status}`)
    }
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const links = doc.querySelectorAll('a');

    links.forEach(link => {
      const url = link.href;
      const isExternal = !url.startsWith(location.origin);
      console.log(`${url} - ${isExternal ? 'внешняя' : 'внутренняя'} ссылка`);

    })
  } catch (e) {
    console.log(e)
  }
}

checkLinks('https://lenta.ru/news/2024/09/18/lebedev-/');

// задача №4
function formatTime(seconds) {
  //секунды в днях
  const secondsInOneDay = 24 * 3600;
  const days = Math.floor(seconds / secondsInOneDay);
  seconds = seconds % secondsInOneDay;

  //секунды в часах
  const secondsInOneHour = 3600;
  const hours = Math.floor(seconds / secondsInOneHour);
  seconds = seconds % secondsInOneHour;

  //секунды в минуте
  const secondsInOneMinute = 60;
  const minutes = Math.floor(seconds / secondsInOneMinute);
  seconds = seconds % secondsInOneMinute;

  const result = `${days} days ${hours} hours ${minutes} min ${seconds} sec`;

  return result;
}

console.log(formatTime(87448));