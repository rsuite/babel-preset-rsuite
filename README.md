# babel-preset-rsuite

Modularly import rsuite components for babel.

dependencies:

 - [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

## Install

```sh
$ npm i --save rsuite
$ npm i --save-dev babel-preset-rsuite
```

## Usage

.babelrc

```js
{
    "presets": ["rsuite"]
}
```

Transforms

```js
import { Button } from 'rsuite';
```

roughly to

```js
var _Button = require('rsuite/lib/Button');
```

### With styles

.babelrc

```js
{
    "presets": [["rsuite", { style: true }]]
}
```

Transforms

```js
import { Button } from 'rsuite';
```

roughly to

```js
var _Button = require('rsuite/lib/Button');
require('rsuite/styles/Button');
```
