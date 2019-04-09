# Epitaph JS

#### A text splitter plugin that does more

#### How to use:

```
yarn add epitaphjs
npm install epitaphjs
```

#### Next import it into your project:

```
import Epitaph from 'epitaphjs'
```

### NOTE: MAKE SURE YOU'RE USING ES6 IMPORT SYNTAX OR ELSE THIS WON'T WORK!

#### Initializing Epitaph

```
	// these are the default options
	const options = {
		tag: "span", // wraps around the characters
		className: null, // adds a classname to the tags
		return: false // If true it returns the array of dom elements and doesn't affect the original DOM node.
	}
	const splitter = new Epitaph(domNode, {...options})
```

#### AND VOILA

Give me a shoutout @ alekangelov.com

#### TODO:

- Add a compiler process so it can be used everywhere
- - if you want to help me out with this make a pull request or dm me on Twitter @AngelovAlek
