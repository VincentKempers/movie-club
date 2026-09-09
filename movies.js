// Movie Club screenings.
//
// To add a future movie night: copy one object below, fill in the fields,
// and add it to the SCREENINGS array. The soonest screening dated today or
// later is shown as the featured poster automatically; anything after it
// lists under "Coming Attractions", and anything before it moves to
// "Past Screenings" once its date passes. No rebuild step — just edit and
// push.
//
// Fields marked optional can be omitted or left as an empty string "".
//
//   id         short unique slug, e.g. "grave-of-the-fireflies"
//   titleJp    original-language title, optional (omit for non-Japanese films)
//   titleEn    English title
//   director   optional
//   studio     optional, studio/production company
//   year       optional
//   runtime    optional, e.g. "89 min"
//   language   optional, e.g. "Japanese, subtitled"
//   basedOn    optional, e.g. "The novel by Akiyuki Nosaka"
//   synopsis   a paragraph of poster back-copy
//   date       "YYYY-MM-DD"
//   doors      optional, e.g. "7:30 PM"
//   start      optional, e.g. "8:00 PM"
//   location   optional, defaults to "Location TBD"
//   note       optional, a short aside under the screening details

window.MOVIE_CLUB = {
  // Set to a screening's id to pin it as featured regardless of date.
  // Leave as null to always feature the soonest upcoming screening.
  featuredId: null,

  screenings: [
    {
      id: "the-fall-2006",
      titleEn: "The Fall",
      director: "Tarsem Singh",
      studio: "Googly Films",
      year: 2006,
      runtime: "117 min",
      language: "English",
      basedOn: "Yo Ho Ho by Valeri Petrov",
      synopsis: "et in a 1915 Los Angeles hospital, The Fall follows Roy, a paralyzed and suicidal stuntman who weaves an epic fantasy adventure to manipulate a young Romanian patient named Alexandria into stealing morphine for him. As Alexandria visualizes the tale—populating it with heroes who mirror people around the hospital—Roy begins killing off the characters out of despair. When Alexandria fights to save the story, her resilience forces Roy to abandon his self-pity, rewrite the narrative with a hopeful ending, and find a renewed will to live.",
      date: "2026-09-16",
      doors: "7:00 PM",
      start: "7:30 PM",
      location: "You know where it is",
      note: "Stunning movie",
    },
    // {
    //   id: "my-next-pick",
    //   titleEn: "TBD",
    //   director: "",
    //   studio: "",
    //   year: 2000,
    //   runtime: "",
    //   language: "",
    //   basedOn: "",
    //   synopsis: "",
    //   date: "2026-09-02",
    //   doors: "",
    //   start: "",
    //   location: "",
    //   note: "",
    // },

    // Archive entries below — dates are placeholders until the real
    // screening dates are filled in.
    {
      id: "perfect-blue-2026",
      titleJp: "パーフェクトブルー",
      titleEn: "Perfect Blue",
      director: "Satoshi Kon",
      studio: "Satoshi Kon",
      year: 1997,
      runtime: "117 min",
      language: "Japanese",
      basedOn: "",
      synopsis: "Idolization, obsession, murder, Satoshi Kon...",
      date: "2026-09-02",
      doors: "9:00 PM",
      start: "9:30 PM",
      location: "You know where it is",
      note: "I believe this movie is Satoshi's best work. Anime 'shot' like a movie. This will be some of ours second watch",
    },
    {
      id: "wages-of-fear",
      titleEn: "The Wages of Fear",
      director: "Henri-Georges Clouzot",
      studio: "Compagnie Industrielle et Commerciale Cinématographique",
      year: 1953,
      runtime: "154 min",
      language: "French",
      basedOn: "",
      synopsis: "In a run-down South American town, four men are paid to drive trucks loaded with nitroglycerin into the jungle through to the oil field. Friendships are tested and rivalries develop as they embark upon the perilous journey.",
      date: "2026-09-02",
      doors: "6:00 PM",
      start: "6:30 PM",
      location: "You know where it is",
      note: "The Wages of Fear is an unrelenting, white-knuckle masterclass in cinematic tension.",
    },
    {
      id: "grave-of-the-fireflies",
      titleJp: "火垂るの墓",
      titleEn: "Grave of the Fireflies",
      director: "Isao Takahata",
      studio: "Studio Ghibli",
      year: 1988,
      runtime: "89 min",
      language: "Japanese, subtitled",
      basedOn: "The novel by Akiyuki Nosaka",
      synopsis:
        "Kobe, 1945. In the last months of a war they had no hand in starting, fourteen-year-old Seita and his four-year-old sister Setsuko lose their mother, their home, and every adult willing to keep them. What Isao Takahata built from there gets filed under animation, and just as often misfiled as something for children. It has no villain — only two kids, a tin of fruit drops, and a countryside lit at night by fireflies and the glow of a burning city.",
      date: "2026-08-24",
      doors: "7:30 PM",
      start: "8:00 PM",
      location: "Location TBD",
      note: "Ninety minutes, subtitled, and among the saddest films ever made — bring something to wipe your eyes with. Snacks welcome; this one earns them.",
    },
    {
      id: "mishima",
      titleJp: "三島由紀夫",
      titleEn: "Mishima: A Life in Four Chapters",
      director: "Paul Schrader",
      studio: "Zoetrope Studios / Filmlink International",
      year: 1985,
      runtime: "121 min",
      language: "Japanese, subtitled",
      basedOn: "The life and novels of Yukio Mishima",
      synopsis:
        "The last day of Yukio Mishima's life, cut against dramatized chapters from his fiction and scenes from his rise as Japan's most famous postwar novelist. Paul Schrader stages the novels in Eiko Ishioka's stylized, theatrical sets, in color, while the biographical scenes run in black and white — building toward the 1970 morning Mishima and four followers took a general hostage and staged a coup that was never going to succeed.",
      date: "2026-08-19", // PLACEHOLDER — set the actual screening date
      doors: "",
      start: "",
      location: "Location TBD",
      note: "Exact screening date to be confirmed — update in movies.js.",
    },
    {
      id: "la-haine",
      titleEn: "La Haine",
      director: "Mathieu Kassovitz",
      studio: "Les Productions Lazennec",
      year: 1995,
      runtime: "98 min",
      language: "French, subtitled",
      basedOn: "",
      synopsis:
        "Twenty hours in the lives of three friends in a Paris banlieue, in the aftermath of a riot that left a friend of theirs in a coma after a beating by police. Shot in black and white, scored to hip-hop and Édith Piaf alike, and built around a joke about a man falling from a fifty-story building — so far, so good — that the film keeps repeating until it explains exactly what it means.",
      date: "2026-08-19", // PLACEHOLDER — set the actual screening date
      doors: "",
      start: "",
      location: "Location TBD",
      note: "Exact screening date to be confirmed — update in movies.js.",
    },

    // Add the next screening here, e.g.:
    // {
    //   id: "my-next-pick",
    //   titleEn: "Movie Title",
    //   director: "",
    //   studio: "",
    //   year: 2000,
    //   runtime: "",
    //   language: "",
    //   basedOn: "",
    //   synopsis: "",
    //   date: "2026-09-02",
    //   doors: "",
    //   start: "",
    //   location: "",
    //   note: "",
    // },
  ],
};
