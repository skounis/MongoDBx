# MongoDBx: M101x Introduction to MongoDB using the MEAN Stack
Sample code and mini projects for the MongoDBx: M101x Introduction to MongoDB using the MEAN Stack course

## Course 1

### Tests run commands

#### All the tests
* `./node_modules/.bin/mocha test.js`

#### Selected tests only that match certain regexp
* `./node_modules/.bin/mocha -g "fail" test.js`

### Use different reporters

#### The DOT reporter
* `./node_modules/.bin/mocha -R dot test.js `

#### The XML Format reporter
* `./node_modules/.bin/mocha -R xunit test.js `

#### A funny reporter
* `./node_modules/.bin/mocha -R nyan test.js `

```
 3   -_-__,------,
 0   -_-__|  /\_/\
 0   -_-_~|_( ^ .^)
     -_-_ ""  ""

  3 passing (43ms)
```

### NPM Run Command - scripts
```
"scripts": {
  "test": "mocha test.js",
  "test-kitten": "mocha -R nyan test.js"
}
```

#### test
* `npm test`

#### test-kitten
* `npm run test-kitten`


## Course 2

### Highlights
Hint: Store (in models) what you query for.

`Virtuals` are not by default included in `toObject` and `toJSON` functions. This should be set explicitly

```
schema.set('toObject', {virtuals: true});
schema.set('toJSON', {virtuals: true});
```

### References and Links
* Cardinality https://en.wikipedia.org/wiki/Cardinality
