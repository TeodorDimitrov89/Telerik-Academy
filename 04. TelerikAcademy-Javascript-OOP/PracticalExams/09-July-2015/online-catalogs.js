function solve() {
    let generatorId = (function () {
        let id = 0;
        return function () {
            return id++;
        }
    }());

    const VALIDATOR = {
        validateNonEmpty: (str) => {
            if (typeof str !== 'string' || str === '') {
                throw 'String is not Valid'
            }
        },
        validateNumberRange: (n, min, max) => {

            if (typeof n !== 'number' || n < min || n > max) {
                throw 'Not a valid number';
            }

        },
        validateLengthRange: (str, min, max) => {
            if (!(typeof str === 'string') || (str.length < min || str.length > max)) {
                throw 'String Length invalid'
            }
        },

        validateIsbn: (str) => {
            if (typeof str !== 'string' || !str.match(/^([0-9]{10}|[0-9]{13})$/)) {
                throw 'Isbn is not valid';
            }
        },

        validateNumberBigger: (duration, min) => {
            if (typeof duration !== 'number' || duration <= min) {
                throw 'Not a valid number';
            }
        },

        validateArgumentsLength: (args) => {
            if (args === undefined || args.length === 0) {
                throw 'At least one item must be specified';
            }
        },
        validateIsNumber: (id) => {
            if (typeof id !== "number") {
                throw 'id is not a number'
            }
        }
    };

    class Item {
        constructor(name, description) {
            this.description = description;
            this.name = name;
            this._id = generatorId();
        }

        get name() {
            return this._name;
        }

        set name(str) {
            VALIDATOR.validateLengthRange(str, 2, 40);
            this._name = str;
        }

        get description() {
            return this._description;
        }

        set description(str) {
            VALIDATOR.validateNonEmpty(str);
            this._description = str;
        }

        get id() {
            return this._id;
        }
    }

    class Book extends Item {
        constructor(name, isbn, genre, description) {
            super(name, description);
            this.isbn = isbn;
            this.genre = genre;
        }

        get isbn() {
            return this._isbn;
        }

        set isbn(str) {
            VALIDATOR.validateIsbn(str);
            this._isbn = str;
        }

        get genre() {
            return this._genre;
        }

        set genre(str) {
            VALIDATOR.validateLengthRange(str, 2, 20);
            this._genre = str;
        }
    }

    class Media extends Item {
        constructor(name, rating, duration, description) {
            super(name, description);
            this.duration = duration;
            this.rating = rating;
        }

        get duration() {
            return this._duration;
        }

        set duration(duration) {
            VALIDATOR.validateNumberBigger(duration, 0);
            this._duration = duration;
        }

        get rating() {
            return this._rating;
        }

        set rating(rating) {
            VALIDATOR.validateNumberRange(rating, 1, 5);
            this._rating = rating;
        }
    }

    // class Catalog {
    //     constructor(name) {
    //         this._id = generatorId();
    //         this.name = name;
    //         this._items = [];
    //         // this._arrObjects = [];
    //     }
    //
    //     get id() {
    //         return this._id;
    //     }
    //
    //     get name() {
    //         return this._name;
    //     }
    //
    //     set name(name) {
    //         VALIDATOR.validateLengthRange(name, 2, 40);
    //         return this._name = name;
    //     }
    //
    //     get items() {
    //         return this._items;
    //     }
    //
    //     add(...items) {
    //         VALIDATOR.validateArgumentsLength(...items);
    //         if (Array.isArray(items[0])) {
    //             items = items[0];
    //         }
    //         items.forEach(item => {
    //             if (typeof item != "object") {
    //                 throw 'Item is not an object';
    //             }
    //             VALIDATOR.validateNumberBigger(item.id, 0);
    //             VALIDATOR.validateLengthRange(item.name, 2, 40);
    //             VALIDATOR.validateNonEmpty(item.description);
    //         });
    //         this._items.push(...items);
    //         return this;
    //     }
    //
    //     find(args) {
    //         let arrItems = this._items;
    //         let foundItem = false;
    //
    //         // if(typeof option ==="object") {
    //         //     for (let item of arrItems) {
    //         //         if(option.hasOwnProperty('id') && !option.hasOwnProperty('name')) {
    //         //             if(option.id === item.id) {
    //         //                 this._arrObjects.push(item);
    //         //             }
    //         //         } else if(option.hasOwnProperty('name') && !option.hasOwnProperty('id')) {
    //         //             if(option.name === item.name) {
    //         //                 this._arrObjects.push(item);
    //         //             }
    //         //         } else if(option.hasOwnProperty('id') && option.hasOwnProperty('name')) {
    //         //             if(option.id === item.id && option.name === item.name) {
    //         //                 this._arrObjects.push(item);
    //         //             }
    //         //         }
    //         //     }
    //         // }else {
    //         //     VALIDATOR.validateArgumentsLength(option);
    //         //     VALIDATOR.validateIsNumber(option);
    //         //
    //         //
    //         //     for (let item of arrItems) {
    //         //         if(option === item.id) {
    //         //             foundItem = true;
    //         //             return item;
    //         //         }
    //         //     }
    //         //     if(foundItem === false) {
    //         //         return null;
    //         //     }
    //         // }
    //
    //         function findById(id) {
    //             VALIDATOR.validateArgumentsLength(id);
    //             VALIDATOR.validateIsNumber(id);
    //             return arrItems.find(item => item.id === id || null)
    //         }
    //
    //
    //         function findByOption(options) {
    //             return this._items.filter(item=> {
    //                 return (
    //                     (!options.hasOwnProperty('name') || options.name === item.name)
    //                         && (!options.hasOwnProperty('id') || item.id === options.id)
    //                 )
    //             })
    //
    //         }
    //         if (typeof args === "object") {
    //             findByOption.call(this, args)
    //         }
    //         return findById.call(this, args); // Changing this for function
    //     }
    //
    //     search(pattern) {
    //         // if(typeof pattern !== "string" || pattern.length < 1 ) {
    //         //     throw 'Pattern is not valid string or it must be at least one character';
    //         // }
    //         // this._items.forEach(item => {
    //         //     if(item.hasOwnProperty('name') && item.name.search(pattern)!=-1) {
    //         //
    //         //         this._arrObjects.push(item)
    //         //
    //         //     } else if(item.hasOwnProperty('description') && item.description.search(pattern)!=-1) {
    //         //         this._arrObjects.push(item)
    //         //     }
    //         // });
    //         //
    //         // return this._arrObjects;
    //         if (typeof pattern !== "string" || pattern.length < 1) {
    //             throw 'Pattern is not valid string or it must be at least one character';
    //         }
    //
    //         this._items.filter(item => {
    //             return (
    //             item.name.indexOf('name') >= 0
    //             || item.description.indexOf('description') >= 0)
    //         });
    //     }
    //
    // }

    class Catalog {
        constructor(name) {
            this.name = name;
            this._id = generatorId();
            this._items = [];
        }

        get name() {
            return this._name;
        }

        set name(name) {
            VALIDATOR.validateLengthRange(name, 2, 40);
            this._name = name;
        }

        get items() {
            return this._items; // .slice();
        }

        get id() {
            return this._id;
        }

        add(...items) {
            if (Array.isArray(items[0])) {
                items = items[0];
            }
            VALIDATOR.validateArgumentsLength(items); //check if this is the problem

            items.forEach(item => {
                if (typeof item != "object") {
                    throw 'Item is not an object';
                }
                VALIDATOR.validateNumberBigger(item.id, 0);
                VALIDATOR.validateLengthRange(item.name, 2, 40);
                VALIDATOR.validateNonEmpty(item.description);
            });
            this._items.push(...items);
            return this;
        }
        find(arg) {
            function findById(id) {
                if (typeof id !== 'number') {
                    throw 'Invalid id';
                }
                return this._items.find(item => item.id === id) || null;
            }

            function findByOptions(options) {
                return this._items.filter(item => {
                    return (
                    (!options.hasOwnProperty('name') || item.name === options.name)
                    && (!options.hasOwnProperty('id') || item.id === options.id));
                });
            }

            if (typeof arg === 'object') {
                return findByOptions.call(this, arg);
            }
            return findById.call(this, arg);
        }
        search(pattern) {
            VALIDATOR.validateNonEmpty(pattern);

            return this._items.filter(item => {
                return (
                item.name.indexOf(pattern) >= 0
                || item.description.indexOf(pattern) >= 0);
            });
        }
    }

    class BookCatalog extends Catalog {
        constructor(name) {
            super(name);
        }

        add(...books) {
            if (Array.isArray(books[0])) {
                books = books[0];
            }
            books.forEach(book => {
                if (typeof book != "object") {
                    throw 'Book is not an object';
                }
                VALIDATOR.validateIsbn(book.isbn);
                VALIDATOR.validateLengthRange(book.genre, 2, 20);
            });
            return super.add(books);
        }

        getGenres() {
            return this._items
                .map(book => book.genre.toLowerCase())
                .sort()
                .filter((genre, index, genres) => genre != genres[index - 1]); // filter: element,index,this.array
        }

        find(args) {
            if (typeof args === "object") {
                const books = super.find(args);
                if (args.hasOwnProperty('genre')) {
                    return books.filter(book => book.genre === args.genre)
                }
                return books;
            }
            return super.find(args);
        }
    }


    class MediaCatalog extends Catalog {
        constructor(name) {
            super(name)
        }

        add(...medias) {
            if (Array.isArray(medias[0])) {
                medias = medias[0];
            }
            medias.forEach(media => {
                if (typeof media !== 'object') {
                    throw 'Item is not an object';
                }
                VALIDATOR.validateNumberBigger(media.duration, 0);
                VALIDATOR.validateNumberRange(media.rating, 1, 5);
            });
            return super.add(medias);
        }

        getTop(count) {
            VALIDATOR.validateNumberBigger(count, 0);
            return this._items
                .slice()
                .sort((x, y) => y.rating - x.rating)
                .slice(0, count)
                .map(x => {
                    return {
                        name: x.name,
                        id: x.id
                    }
                });
        }

        getSortedByDuration() {
            return this._items
                .slice()
                .sort((x, y) => {
                    if(x.duration === y.duration) {
                        return x.id - y.id;
                    }
                    return y.duration - x.duration;
                });
        }

        find(args) {
            if (typeof args === "object") {
                const medias = super.find(args);
                if (args.hasOwnProperty('rating')) {
                    return medias.filter(media => media.rating === args.rating)
                }
                return medias;
            }
            return super.find(args);

        }

    }


    // class BookCatalog extends Catalog {
    //     constructor(name) {
    //         super(name);
    //     }
    //
    //     add(...books) {
    //         if(Array.isArray(books[0])) {
    //             books = books[0];
    //         }
    //
    //         books.forEach(book => {
    //             if(typeof book !== 'object') {
    //                 throw 'Item not an object';
    //             }
    //
    //             VALIDATOR.validateIsbn(book.isbn);
    //             VALIDATOR.validateLengthRange(book.genre, 2, 20);
    //         });
    //
    //         return super.add(books);
    //         // return this;
    //     }
    //
    //     getGenres() {
    //         return this._items
    //             .map(book => book.genre.toLowerCase())
    //             .sort()
    //             .filter((genre, index, genres) => genre !== genres[index - 1]);
    //     }
    //
    //     find(arg) {
    //         if(typeof arg === 'object') {
    //             const books = super.find(arg);
    //             if(arg.hasOwnProperty('genre')) {
    //                 return books.filter(book => book.genre === arg.genre);
    //             }
    //             return books;
    //         }
    //
    //         return super.find(arg);
    //     }
    // }
    return {
        getBook: function (name, isbn, genre, description) {
            return new Book(name, isbn, genre, description);
            //return a book instance
        },
        getMedia: function (name, rating, duration, description) {
            return new Media(name, rating, duration, description);
        },
        getBookCatalog: function (name) {
            return new BookCatalog(name);
            //return a book catalog instance
        },
        getMediaCatalog: function (name) {
            return new MediaCatalog(name);
        }
    };
}

module.exports = solve;