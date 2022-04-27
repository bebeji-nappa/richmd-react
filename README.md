# Richmd React
![NPM](https://img.shields.io/npm/l/richmd-react)
![npm](https://img.shields.io/npm/v/richmd-react)
![NPM](https://img.shields.io/npm/dw/richmd-react)


## Install
```
yarn add richmd-react
```

## Usage
It use `Richmd` component`.

```js
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Richmd } from "richmd-react";

const Editor = () => {
  const [text, setMarkdown] = useState('');

  return (
    <>
      <form id="post-form">
        <div id="editor">
          <textarea className="textField" spellCheck="false" onChange={(e) => setMarkdown(e.target.value)}></textarea>
        </div>
        <div id="preview">
          <Richmd className="preview" text={text} />
        </div>
      </form>
    </>
  )
}

render(<Editor />, document.getElementById('root'))
```

## Props
| Name | Description |
| --- | --- |
| `text` | To parse HTML set Markdown text. |
| `id` | It set id. |
| `className` | It set ClassName. |

## License
MIT
