
# Censor Document

The program will remove given keywords and phrases from document text and insert XXXX at the
locations where the text was removed.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

Node.js

NPM or Yarn

### Installation
Via yarn:

```
yarn install 
```

Via npm:
```
npm install
```

### Starting the API

Via yarn:

```
yarn start
```

Via npm:

```
npm start
```

#### Input parameters:
1. String of keywords and phrases: a string of censored keywords and phrases separated by spaces or
commas. Phrases will be enclosed in single or double-quotes. Some examples:
Hello world “Boston Red Sox”, ‘Pepperoni Pizza’, ‘Cheese Pizza’, beer
2. Document text – the original document text that needs the provided keywords and phrases removed
(masked out).

### Returns:
Document text with indicated keywords and phrases removed and replaced with XXXX.

#### Assumtion

1) Input is English

2) All the key english also keycode UTF-8

### How it works

1. Input Document has content 
2. Censored key is a one line string with commas, space, double quotes, single quotes
3. Read input document, censored key
4. Read each line of inline document
5. Seach key words or phrases in each line. Find index and store in database
6. then Replace the words or phrases with XXXX
7. Write into outputDocument


## Authors

* **Thien Le** - *Initial work* - [Thien Le](https://github.com/thienle75)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details