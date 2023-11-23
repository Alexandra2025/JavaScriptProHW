"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books = new Set();
  constructor(...books) {
    if (this.#checkDuplicates(books)) {
      throw new Error("Найдены дубликаты");
    }
    books.forEach((book) => this.#books.add(book));
  }

  get allBooks() {
    return [...this.#books];
  }

  hasBook(title) {
    return this.#books.has(title);
  }

  addBook(title) {
    if (this.hasBook(title)) {
      throw new Error(`${title} Уже есть такая книга`);
    }
    this.#books.add(title);
  }

  removeBook(title) {
    if (!this.hasBook(title)) {
      throw new Error(`Не найдена такая книга ${title}`);
    }
    this.#books.delete(title);
  }

  #checkDuplicates(arr) {
    return arr.length === new Set().add(...arr).size;
  }
}

const library = new Library(
  "Война и мир",
  "1984",
  "Улисс",
  "Лолита»",
  "Звук и ярость",
  "Человек-невидимка",
  "На маяк",
  "Одиссея",
  "Гордость и предубеждение",
  "Божественная комедия"
);

try {
  console.log(library.hasBook("Божественная комедия"));
  console.log(library.hasBook("Кентерберийские рассказы"));
} catch (e) {
  console.log(e.message);
}

try {
  library.addBook("Над пропастью во ржи");
} catch (e) {
  console.log(e.message);
}

try {
  library.removeBook("Над пропастью во ржи");
} catch (e) {
  console.log(e.message);
}
