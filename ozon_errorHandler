// Обработать ошибки:
// 
// 1. Код не 200
// 2. Код 404 (нет данных)
// 3. 500-599 (ошибка сервера)
// 4. Ошибка ответа (res.error)
// 5. Нет данных (res.data)

async function fetchData(url) {
  try {
    const res = await fetch(url);

    // 1. Код не 200
    if (!res.ok) {
      if (res.status === 404) {
        console.error('Ошибка 404: Данные не найдены');
        throw new Error('Данные не найдены');
      }
      if (res.status >= 500 && res.status < 600) {
        console.error(`Ошибка ${res.status}: Ошибка сервера`);
        throw new Error('Ошибка сервера');
      }
      console.error(`Ошибка ${res.status}: Некорректный ответ`);
      throw new Error('Некорректный ответ');
    }

    // 2. Ошибка ответа (res.error)
    const data = await res.json();
    if (data.error) {
      console.error('Ошибка в ответе: ', data.error);
      throw new Error('Ошибка в ответе');
    }

    // 3. Нет данных (res.data)
    if (!data || !data.length) {
      console.warn('Нет данных');
      throw new Error('Нет данных');
    }

    return data;

  } catch (error) {
    console.error('Произошла ошибка: ', error.message);
  }
}

