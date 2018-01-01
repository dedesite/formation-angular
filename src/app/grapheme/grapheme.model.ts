export class Grapheme {
  protected color: string;

  constructor(
    private graphemeType: string,
    //A grapheme can represent sevral phonems
    //ie : the letter "e" in french
    private phonems: string[],
    private _representation: string
  ) {
    switch (this.graphemeType) {
      case "vowel":
        this.color = "blue";
        break;
      case "consonant":
        this.color = "red";
        break;
      case "complex":
        this.color = "green";
        break;
      default:
        this.color = "blue";
        break;
    }
  }

  get representation() {
    return this._representation;
  }
}
