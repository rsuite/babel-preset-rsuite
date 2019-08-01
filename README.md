# babel-preset-rsuite

Modularly import rsuite components for babel.

dependencies:

- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

## Install

```sh
$ npm i --save rsuite@next
$ npm i --save-dev babel-preset-rsuite@next
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
require('rsuite/lib/Button/styles/index.less');
var _Button = require('rsuite/lib/Button');
```

### Use theme styles

.babelrc

```js
{
    "presets": [["rsuite", { style: true, theme: 'dark' }]]
}
```

Transforms

```js
import { Button } from 'rsuite';
```

roughly to

```js
require('rsuite/lib/Button/styles/themes/dark.less');
var _Button = require('rsuite/lib/Button');
```
