/*
  EASY EDITING FILE
  Most portfolio content lives here. Keep quotation marks and commas in place.

  MEDIA OPTIONS FOR EACH ENTRY
  images: [{ src: "assets/media/photo.jpg", alt: "Describe the image", caption: "Optional caption" }]
  videos: [{ src: "assets/media/video.mp4", caption: "Optional caption" }]
  audio:  [{ src: "assets/media/audio.mp3", caption: "Optional caption" }]
  embeds: [{ src: "https://www.youtube.com/embed/VIDEO_ID", title: "Descriptive title" }]
  files:  [{ src: "assets/media/report.pdf", label: "Download the report" }]
  links:  [{ url: "https://example.com", label: "Visit the live project" }]
*/
const portfolioData = {
  name: "Charlie Enger",
  title: "Student • Builder • Community Connector",
  introduction: "A growing collection of work centered on community, innovation, and positive impact.",
  categories: {
    community: {
      title: "Community",
      symbol: "",
      description: "Work that strengthens relationships, creates belonging, or contributes to a shared purpose.",
      colors: ["#073b2a", "#188b5b"],
      entries: [
        {
          title: "Theology Thursday",
          date: "",
          summary: "A time to grow in faith and community",
          text: [
            "     Every Thursday, which to be fair, has only been two Thursdays, the Honors College as a group puts on Theology Thursday. Somewhere between ten and fifteen people of all different kinds of religious backgrounds show up and just talk about faith: from the minor nuances in their own creed, to the reasons someone has no faith at all. Nobody’s fighting, nobody’s trying to win, and nobody gets minimized or excluded. Most of us disagree with each other to some degree; even those in the same sect think differently about this or that. Regardless of our differences though, we come together as a cohesive unit, trying to understand one another, and make ourselves understood. One member did an experiment where they took the stance of some beliefs that they did not actually hold, and defended it with only logical conclusions, not accepting anything written in the Bible as guaranteed truth. That was probably one of the most interesting conversations that I’ve ever had, and I think that it really helped me flesh out my faith, and learn how to defend it against a new type of argument I’ve never heard before. Experiences like that are part of why I think that Theology Thursday might come to be one of the more important things that the Honors College does as a group."
          ],
          coverImage: "assets/media/theothursdaypiccrop.jpg",
          objectPosition: "center bottom",
          images: [], videos: [], audio: [], embeds: [],
          files: [], links: []
        }
      ]
    },
    innovation: {
      title: "Innovation",
      symbol: "",
      description: "Projects that explore new ideas, improve a process, or approach a challenge in a different way.",
      colors: ["#17304a", "#3478a8"],
      entries: [
        {
          title: '"We can do that"',
          date: "",
          summary: "A lesson from Dr. Strand on action and human value",
          text: [
            "",
            "	On paper, our meeting with Michael Strand wasn’t anything crazy. We toured Renaissance hall, learned about Dr. Strand’s work, and made some very simple clay bowls. The important lesson lay underneath all that. Dr. Strand focused a lot on practicality and action. Not utilitarian practicality, as you’d usually think of it, but a different flavor. He claimed that the most important aspect of an object was not its functionality, but its human value. One application of this related to our bowls. These “bowls” were made by repeatedly smacking a clay ball on our elbows until it had the general shape of a bowl. It seems fairly worthless; all that we did, after all, was make an ugly bowl, but then Dr. Strand asked a question. “What can you do with this bowl.” Obvious answers popped up first like, “Hold water”, or “Put a flower in it”, or even, “Throw it at someone’s head.” These were all well and good, but then someone had the idea to send it to deployed soldiers so that they could make a bowl with their elbow imprint and send it back, or vice versa. Functionally, it was nearly useless, but to the soldiers and their families, it could be all that they had of each other. Dr. Strand immediately locked onto this idea, expanding it and figuring out small details. This was already, in a small way, fairly eye-opening. It was innovation in action. If the lesson would have ended there, it would already have been one of the more practical ones that I’ve had in my life, but it didn’t. His next line was “We can do that.” That was something new. Anybody can sit around and talk about some theoretical plan to do this or that, but it never leaves the room. This was an immediate plan of action. Anyone interested could join and actually develop, create, and sell these bowls through Dr. Strand’s connections and experience. That was something I’d never been exposed to before, and it’s changed my view of the Honors College, and even life in general. We, both as individuals and as an Honors College, have limitless opportunity to act on our ideas for the next four years, and it’s just up to us to use it. "
          ],
          coverImage: "assets/media/elbowl2.jpg",
          images: [], videos: [], audio: [], embeds: [],
          files: [], links: []
        }
      ]
    },
    impact: {
      title: "Impact",
      symbol: "",
      description: "Work that produced a useful result, helped others, or created a measurable and meaningful change.",
      colors: ["#5d3b00", "#d99700"],
      entries: [
        {
          title: "Add an Impact Badge",
          date: "Add date",
          summary: "Summarize the outcome and why it mattered without overstating your contribution.",
          text: [
            "Describe the challenge and your contribution in clear, specific language.",
            "Add verified results, feedback, or lessons that show the project's impact."
          ],
          coverImage: "",
          images: [], videos: [], audio: [], embeds: [],
          files: [], links: []
        }
      ]
    }
  }
};
