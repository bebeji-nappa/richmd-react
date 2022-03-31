# Richmd React
![NPM](https://img.shields.io/npm/l/richmd-react)
![npm](https://img.shields.io/npm/v/richmd-react)
![NPM](https://img.shields.io/npm/dw/richmd-react)


## Install
```
yarn add richmd-react
```

## Usage

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
