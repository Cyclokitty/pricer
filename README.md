pricer
======

**Set up a price making app that should:**
* give a base 5% cost
* provide for number of employees needed to complete order
  * the cost per employee is 1.2%
* depending on the type of merch, there may be an additional cost:
  * pharm 7.5%
  * food 13%
  * electronics 2%
  * everything else, there is no markup

**Should be a library**

**No UI or console logging necessary**

**Need instructions for the user including:**
  * Node runtime verison (v6.2.1)
  * how to install any dependencies:
    * There are two dependencies required for the tests:
      * Mocha 3.2.0
      * Chai 3.5.0
    * no need to install the dependencies just run:

    ```
    npm install

    ```

  * To run tests from the command line:

    ```
    npm test

    ```

  * to run pricer:

  ```

  var price = require('./index.js');

  ```

  * to find a price:

  ```
  // you need the base cost, integer for number of people required for the job, and whether the job is for food, pharmaceuticals or drugs, electronics, or any other type of materials

  price.pricer(1299.99, 3, 'food');

  // should return: "Output: $1591.58"

  ```

**Many Commits:**
* go wingnut on the commits ✅

**About the Testing:**
* we are using Mocha and Chai for testing
