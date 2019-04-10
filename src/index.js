class Epitaph {
  //  options
  //  {
  //      split: "letter" / "word" / "sentence", // how it should be split
  //      tag: DomNode, // which dom node to affect
  //      wrapWords: true/false // should the words be wrapped
  //      className: "", // all around class name
  //      return: true/false, // do you want to get the output of the plugin as a return or to alter the original dom node
  //      innerClass: "letter", // the class of the inner tags
  //      wrapperClass: "word", // the class of the wrapping
  //      separator: "_", // separate the class from the iterator
  //  }

  constructor(domNode, options) {
    this.node = domNode;
    this.options = options;
    this.tag = this.options ? this.options.tag || "span" : "span";
    this.split = this.options ? this.options.split || "letter" : "letter";
    this.wrapWords = this.options ? this.options.wrapWords || false : false;
    this.letterClass = this.options ? this.options.innerClass || null : null;
    this.iterator = this.options ? this.options.iterator || false : false;
    this.separator = this.options ? this.options.classSeparator || "_" : "_";
    this.wordClass = this.options ? this.options.wrapperClass || null : null;
    this.className = this.options ? this.options.className || null : null;
    this.text = this.node.innerHTML;
    this.return = this.options ? this.options.return || false : false;
    const elem = this.returnDom();
    if (this.return) {
      return elem;
    } else {
      this.node.innerHTML = null;
      elem.forEach(element => {
        this.node.appendChild(element);
      });
    }
  }
  returnDom() {
    if (this.split === "word") {
      return this.arrayToDomElem(this.splitByWord());
    } else if (this.split === "letter") {
      if (this.wrapWords) {
        return this.wrapWord();
      } else {
        return this.arrayToDomElem(this.splitByLetter());
      }
    } else if (this.split === "sentence") {
      return this.sentenceSplit();
    }
  }
  sentenceSplit() {
    let blox = this.text.split(".");
    blox = blox.map(e => {
      const tag = document.createElement(this.tag);
      tag.innerHTML = e.trim();
      return tag;
    });
    let newReturn = [];
    blox.forEach((e, i) => {
      if (e.innerHTML !== "") {
        if (i !== 0) e.innerHTML = " " + e.innerHTML + ".";
        else e.innerHTML = e.innerHTML + ".";
        newReturn.push(e);
      }
    });
    return newReturn;
  }
  splitByWord() {
    const words = this.text.split(" ");
    const newWords = [];
    words.forEach((e, i) => {
      newWords.push(e);
      if (i + 1 !== words.length) newWords.push(" ");
    });
    return newWords;
  }
  splitByLetter(words) {
    let splitWords;
    if (words) {
      splitWords = words.map(word => {
        return word.split("");
      });
    } else {
      splitWords = this.text.split("");
    }
    return splitWords;
  }
  arrayToDomElem(values, options = false) {
    const elem = values.map((value, i) => {
      const elem = document.createElement(this.tag);
      if (this.class) {
        elem.classList.add(this.class);
      }
      if (typeof value === "object") {
        value.forEach((e, i) => {
          if (this.iterator) {
            e.classList.add(`${this.letterClass}${this.separator}${i}`);
            e.classList.add(this.className);
          } else {
            e.classList.add(this.letterClass);
            e.classList.add(this.className);
          }
          elem.appendChild(e);
        });
      } else {
        elem.innerHTML = value;
        elem.classList.add(`${this.letterClass}${this.separator}${i}`);
        elem.classList.add(this.className);
      }
      return elem;
    });
    if (options) {
      elem.forEach((e, i) => {
        if (this.iterator) {
          elem[i].classList.add(`${this.wordClass}${this.separator}${i}`);
          elem[i].classList.add(this.className);
        } else {
          elem[i].classList.add(this.wordClass);
          elem[i].classList.add(this.className);
        }
      });
    }
    return elem;
  }
  wrapWord() {
    const split = this.splitByWord();
    const newSplit = split.map(word => {
      const byChar = word.split("");
      const elem = this.arrayToDomElem(byChar);
      return elem;
    });
    const final = this.arrayToDomElem(newSplit, true);
    return final;
  }
}

module.exports = Epitaph;
