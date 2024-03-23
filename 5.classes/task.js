class PrintEditionItem {
	constructor(name, releaseDate, pagesCount){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix(){
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			newState = 0;
		}
		else if (newState > 100) {
			newState = 100;
		}
		this._state = newState;
	}

	get state() {
		return this._state
	}
}

class Magazine extends PrintEditionItem{
	constructor(name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount)
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem{
	constructor(author, name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount)
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book{
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book{
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book{
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class Library{
	constructor(name){
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value){
		let searchedBook = this.books.find(i => i[type] === value);
		return searchedBook ? searchedBook : null;
	}

	giveBookByName(bookName){
		let searchedBook = this.books.find(i => i.name === bookName);
		if(searchedBook){
			this.books.splice(this.books.indexOf(searchedBook), 1)
			return searchedBook
		}
		return null;
	}
}

class Student {
	constructor(name){
	this.name = name;
	this.marks = {};
	}
 
	addMark(mark, subject) {
	 if (mark > 2 && mark < 5){
		if (!this.marks[subject]){
			this.marks[subject] = [];
		}
		this.marks[subject].push(mark)
	}
 }

 	getAverageBySubject(subject){
		if (!this.marks[subject]){
			return null;
		}
		let sum = this.marks[subject].reduce((a, b) => a + b, 0)
		return sum/this.marks[subject].length
	}

	getAverage(){
		return Object.keys(this.marks).reduce((a, b) => a + this.getAverageBySubject(b), 0)
	}
}