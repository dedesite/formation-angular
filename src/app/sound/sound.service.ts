import { Injectable } from "@angular/core";

@Injectable()
export class SoundService {
  rootDir = "assets/sounds";

  playSound(filename) {
    const a = new Audio(`${this.rootDir}/${filename}.mp3`);
    return a.play();
  }
}
