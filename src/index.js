class Epitaph {
  constructor(
    domNode,
    {
      tag = "span",
      split = "letter",
      wrapWords = false,
      innerClass = false,
      iterator = false,
      classSeparator = "_",
      wordClass = false,
      className = false,
      domReturn = false
    }
  ) {
    options = {};
    this.node = domNode;
    this.options = options;
    this.tag = tag;
    this.split = split;
    this.wrapWords = wrapWords;
    this.letterClass = innerClass;
    this.iterator = iterator;
    this.separator = classSeparator;
    this.wordClass = wordClass;
    this.className = className;
    this.text = this.node.innerHTML.trim();
    this.return = domReturn;
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
      const tag = window.document.createElement(this.tag);
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
      const elem = window.document.createElement(this.tag);
      if (this.class) {
        elem.classList.add(this.class);
      }
      if (typeof value === "object") {
        value.forEach((e, i) => {
          if (this.iterator) {
            if (this.letterClass)
              e.classList.add(`${this.letterClass}${this.separator}${i}`);
            if (this.className) e.classList.add(this.className);
          } else {
            if (this.letterClass) e.classList.add(this.letterClass);
            if (this.className) e.classList.add(this.className);
          }
          elem.appendChild(e);
        });
      } else {
        elem.innerHTML = value;
        if (this.letterClass)
          elem.classList.add(`${this.letterClass}${this.separator}${i}`);
        if (this.className) elem.classList.add(this.className);
      }
      return elem;
    });
    if (options) {
      elem.forEach((e, i) => {
        if (this.iterator) {
          if (this.wordClass)
            elem[i].classList.add(`${this.wordClass}${this.separator}${i}`);
          if (this.className) elem[i].classList.add(this.className);
        } else {
          if (this.wordClass) elem[i].classList.add(this.wordClass);
          if (this.className) elem[i].classList.add(this.className);
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
