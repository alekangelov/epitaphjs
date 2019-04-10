# Epitaph JS

#### A text splitter plugin that does more

#### What does this plugin do?

Well, a whole bunch of stuff. It can split a sentence into letters and then wrap those letters in a tag. It can add iterators to the classes and have the inner and outer tags have different classes and an overlapping class. This plugin is pretty badass tbh.

#### How to use:

```
yarn add epitaphjs
npm install epitaphjs
```

#### Next import it into your project:

```
import Epitaph from 'epitaphjs'
```

#### You can also add it via cdn

```
	<script src="https://unpkg.com/epitaphjs"></script>
```

#### Initializing Epitaph

```
	// these are all of the options
	const options = {
		split: "letter" / "word" / "sentence", // how it should be split
		tag: DomNode, // which dom node to affect
		wrapWords: true/false // should the words be wrapped
		className: "", // all around class name
		return: true/false, // do you want to get the output of the plugin as a return or to alter the original dom node
		innerClass: "letter", // the class of the inner tags
		wrapperClass: "word", // the class of the wrapping
		separator: "_", // separate the class from the iterator
	}
	const splitter = new Epitaph(domNode, options)
```

#### AND VOILA

Give me a shoutout @ alekangelov.com
