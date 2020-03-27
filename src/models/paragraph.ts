
/**
 * To insert a line break in a `Paragraph`, write an empty line
 *
 * e.g.:
 * ```typescript
 * `I have a
 *
 * linebreak`
 * ```
 * is parsed to
 * ```typescript
 * ["I have a ", <br/>, "linebreak"]
 * ```
 */
export interface ModelParagraph {
  en: string;
  pt: string;
  type?: "normal" | "quotes" | "notes" | "bullet" | "title";
}

export default class Paragraph implements ModelParagraph {
  readonly en: ModelParagraph["en"];
  readonly pt: ModelParagraph["pt"];
  readonly type: ModelParagraph["type"];

  constructor(args: ModelParagraph) {
    this.en = args.en;
    this.pt = args.pt;
    this.type = args.type ?? "normal";
  }
}
