/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

"use strict";

const musicCollection = {
  albums: [
    {
      title: "Purple Rain",
      artist: "Prince",
      year: "1984",
    },
    {
      title: "Rumours",
      artist: "Fleetwood Mac",
      year: "1977",
    },
    {
      title: "Abbey Road",
      artist: "Beatles",
      year: "1969",
    },
  ],

  [Symbol.iterator]() {
    let index = 0;

    const next = () => {
      if (index < this.albums.length) {
        const album = this.albums[index];
        index++;
        return { value: album, done: false };
      } else {
        return { done: true };
      }
    };

    return { next };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
