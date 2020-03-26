
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
