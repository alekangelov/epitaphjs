export default class Epitaph {
  /* options
      
      {
          split: "letter" / "word" / "sentence",
          tag: DomNode,
          wrapWords: true/false
          className="",
          return: true/false
      }
      
      */
  constructor(domNode, options) {
    this.node = domNode;
    this.options = options;
    this.tag = this.options ? this.options.tag || "span" : "span";
    this.split = this.options ? this.options.split || "letter" : "letter";
    this.wrapWords = this.options ? this.options.wrapWords || true : true;
    this.class = this.options ? this.options.className || null : null;
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
      return this.arrayToDomElem(this.splitByChar());
    } else if (this.split === "letter") {
      return this.arrayToDomElem(this.splitByLetter());
    }
  }
  splitByChar() {
    const words = this.text.split(" ");
    return words;
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
  arrayToDomElem(values) {
    const elem = values.map((value, i) => {
      const elem = document.createElement(this.tag);
      elem.classList.add(this.class);
      elem.innerHTML = value;
      return elem;
    });
    return elem;
  }
}
