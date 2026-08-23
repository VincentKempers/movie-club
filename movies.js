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
      date: "2026-08-26",
      doors: "7:30 PM",
      start: "8:00 PM",
      location: "Location TBD",
      note: "Ninety minutes, subtitled, and among the saddest films ever made — bring something to wipe your eyes with. Snacks welcome; this one earns them.",
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
