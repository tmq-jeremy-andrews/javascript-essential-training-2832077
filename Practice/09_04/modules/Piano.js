import Key from "./Key.js";

class Piano {
  constructor() {
    this.keys = [
      new Key("f2", "white", "1", "./audio/key01.ogg"),
      new Key("fs2", "black", "e", "./audio/key02.ogg"),
      new Key("g2", "white", "2", "./audio/key03.ogg"),
      new Key("gs2", "black", "r", "./audio/key04.ogg"),
      new Key("a2", "white", "3", "./audio/key05.ogg"),
      new Key("as2", "black", "t", "./audio/key06.ogg"),
      new Key("b2", "white", "4", "./audio/key07.ogg"),

      new Key("c3", "white", "5", "./audio/key08.ogg"),
      new Key("cs3", "black", "y", "./audio/key09.ogg"),
      new Key("d3", "white", "6", "./audio/key10.ogg"),
      new Key("ds3", "black", "u", "./audio/key11.ogg"),
      new Key("e3", "white", "7", "./audio/key12.ogg"),

      new Key("f3", "white", "8", "./audio/key13.ogg"),
      new Key("fs3", "black", "i", "./audio/key14.ogg"),
      new Key("g3", "white", "9", "./audio/key15.ogg"),
      new Key("gs3", "black", "o", "./audio/key16.ogg"),
      new Key("a3", "white", "0", "./audio/key17.ogg"),
      new Key("as3", "black", "p", "./audio/key18.ogg"),
      new Key("b3", "white", "-", "./audio/key19.ogg"),

      new Key("c4", "white", "=", "./audio/key20.ogg"),
      new Key("cs4", "black", "[", "./audio/key21.ogg"),
      new Key("d4", "white", "q", "./audio/key22.ogg"),
      new Key("ds4", "black", "]", "./audio/key23.ogg"),
      new Key("e4", "white", "w", "./audio/key24.ogg"),
    ];
  }

  generate() {
    const body = document.createElement("ul");
    body.classList.add("piano-body");

    this.keys.forEach((key, index) => {
      // Prepare the li representing a key
      const li = document.createElement("li");
      li.classList.add(key.note);
      li.classList.add(key.color);

      // Add appropriate class for spacing
      if (index > 0 && this.keys[index - 1].color === "black") {
        li.classList.add("shift");
      }

      // Add a label
      const label = document.createElement("span");
      if (key.color === "black") {
        label.classList.add("keylabel-black");
      } else {
        label.classList.add("keylabel-white");
      }
      label.append(key.button);
      li.append(label);

      // Prepare the audio source
      const source = document.createElement("source");
      source.setAttribute("src", key.sound);
      source.setAttribute("type", "audio/ogg");

      // Add source to audio element and add it to the key
      const audio = document.createElement("audio");
      audio.append(source);
      li.append(audio);

      // Add event listener for clicks to play the audio file
      li.addEventListener("click", () => {
        /**
         * cloneNode allows for spawning multiple nodes
         * of the Audio element. This allows the user to
         * hit the keys in multiple successions and still
         * have it respond with playing the sound file even
         * if previous instances of the sound being played
         * has not finished yet.
         */
        audio.cloneNode(true).play();
      });

      // Add the key to the body
      body.append(li);
    });

    return body;
  }

  getBoundNote(boundKey) {
    for (const key of this.keys) {
      if (key.button == boundKey) {
        return key.note;
      }
    }
  }
}

export default Piano;
