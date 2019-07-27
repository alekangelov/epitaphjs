declare module "Epitaph" {
  declare interface Options {
    tag?: string;
    split?: string;
    wrapWords?: boolean;
    innerClass?: boolean;
    iterator?: boolean;
    classSeparator?: string;
    wordClass?: string;
    className?: string;
    domReturn?: boolean;
  }
  class Epitaph {
    constuctor(domNode: HTMLElement, options: Options): Constructor;
  }
  export = Epitaph;
}
