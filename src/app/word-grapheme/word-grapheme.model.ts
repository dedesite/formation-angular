import { Grapheme } from "../grapheme/grapheme.model";

export class WordGrapheme extends Grapheme {
  constructor(
    graphemeType: string,
    // a word grapheme has only one phonem
    phonem: string,
    representation: string,
    private _isMute: boolean = false,
    private _isFound: boolean = false
  ) {
    super(graphemeType, [phonem], representation);
    if (this._isMute) this.color = "grey";
  }

  get isFound() {
    return this._isFound;
  }

  set isFound(found) {
    this._isFound = found;
  }

  get isMute() {
    return this._isMute;
  }
}
