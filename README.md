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

`Virtuals` are not by default included in `toObject` and `toJSON` functions. This should be set explicitly.

```
schema.set('toObject', {virtuals: true});
schema.set('toJSON', {virtuals: true});
```

### References and Links
* Cardinality https://en.wikipedia.org/wiki/Cardinality

## Course 3

### Highlights
Dependency injection:
* [`wagner-core`](https://www.npmjs.com/package/wagner-core)

HTTP Status code for Node:
* [`http-status`](https://www.npmjs.com/package/http-status)

Javascript Bind function:
* [`Function.prototype.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

body-parser middleware `require('body-parser')`:
1. Attached to the router `api.use(bodyparser.json());`
2. Makes available the `body.data` part of the request: eg: `cart = req.body.data.cart;`

Mongoose `populate` function. eg:
```
req.user.populate(
  { path: 'data.cart.product', model: 'Product' },
  handleOne.bind(null, 'user', res));
```

Mongoose update and return:
```
User.findOneAndUpdate(
  { 'data.oauth': profile.id },
  {
    $set: {
      'profile.username': profile.emails[0].value,
      'profile.picture': 'http://graph.facebook.com/' +
        profile.id.toString() + '/picture?type=large'
    }
  },
  { 'new': true, upsert: true, runValidators: true },
  function(error, user) {
    done(error, user);
  });
  ```

  * `upsert: true`: create new document if no user match the criteria
  * `runValidators: true`: run the validators specified in the schema. Mongoose 4 does not run validators on `findOneAndUpdate`

Mocha. Increase test's timeout

  ```
  it('can check out', function(done) {
    this.timeout(5000);
  ```

#### Text search
First create a text index:
```
var schema = new mongoose.Schema(productSchema);

schema.index({ name: 'text' });
```

Perform a text search:
```
Product.
  find(
    { $text : { $search : req.params.query } },
    { score : { $meta: 'textScore' } }).
  sort({ score: { $meta : 'textScore' } }).
  limit(10).
  exec(handleMany.bind(null, 'products', res));
```
