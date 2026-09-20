// Fictional sample venues. hourlyRate is an illustrative USD rate, not a booking quote.
// Stock photos are illustrative and do not depict these fictional venues.
const pitches = [
  {
    id: 1,
    name: "Downtown Futsal Arena",
    pricePoint: "$$",
    hourlyRate: 65,
    audience: "Competitive Players",
    image:
      "https://images.pexels.com/photos/3846652/pexels-photo-3846652.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "An indoor futsal court with a smooth sport surface, bright lighting, and goals ready for fast-paced five-a-side matches.",
    submittedBy: "Sasha",
    submittedOn: "2026-09-01T14:48:00",
  },
  {
    id: 2,
    name: "Greenfield Community Turf",
    pricePoint: "$",
    hourlyRate: 35,
    audience: "Beginners and Casual Players",
    image:
      "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "An outdoor artificial turf field for small-sided soccer, with shaded benches and space for relaxed pickup games.",
    submittedBy: "Arnold",
    submittedOn: "2026-09-02T10:15:00",
  },
  {
    id: 3,
    name: "Skyline Rooftop Turf",
    pricePoint: "$$$",
    hourlyRate: 110,
    audience: "Adult Groups",
    image:
      "https://images.pexels.com/photos/11155157/pexels-photo-11155157.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A fenced rooftop turf pitch for five-a-side soccer, featuring city views, evening lighting, and a lounge area for post-match hangouts.",
    submittedBy: "Maya",
    submittedOn: "2026-09-03T16:30:00",
  },
  {
    id: 4,
    name: "Riverside Futsal Court",
    pricePoint: "$",
    hourlyRate: 30,
    audience: "Families and Youth Players",
    image:
      "https://images.pexels.com/photos/36681531/pexels-photo-36681531.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "An outdoor hard court with futsal markings, nearby seating, and a welcoming setting for family games and youth practice.",
    submittedBy: "Jordan",
    submittedOn: "2026-09-04T09:00:00",
  },
  {
    id: 5,
    name: "All-Weather Soccer Dome",
    pricePoint: "$$$",
    hourlyRate: 125,
    audience: "Club Teams",
    image:
      "https://images.pexels.com/photos/6077792/pexels-photo-6077792.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A covered artificial turf field for small-sided soccer, with changing rooms and space for team drills throughout the year.",
    submittedBy: "Alex",
    submittedOn: "2026-09-05T12:45:00",
  },
  {
    id: 6,
    name: "Westside Futsal Hub",
    pricePoint: "$$",
    hourlyRate: 70,
    audience: "Students and Recreational Teams",
    image:
      "https://images.pexels.com/photos/29388472/pexels-photo-29388472.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "An indoor futsal court with a hardwood floor, a scoreboard, and spectator benches for friendly games and student tournaments.",
    submittedBy: "Sam",
    submittedOn: "2026-09-06T18:20:00",
  },
  {
    id: 7,
    name: "Northgate Futsal Center",
    pricePoint: "$$",
    hourlyRate: 80,
    audience: "Local Leagues and Competitive Players",
    image:
      "https://images.pexels.com/photos/37097046/pexels-photo-37097046.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "An indoor futsal center with two smooth-surface courts, electronic scoreboards, and spectator seating for evening league matches.",
    submittedBy: "Chris",
    submittedOn: "2026-09-07T11:30:00",
  },
  {
    id: 8,
    name: "Maple Park Futsal Court",
    pricePoint: "$",
    hourlyRate: 25,
    audience: "Families and Beginners",
    image:
      "https://images.pexels.com/photos/27573255/pexels-photo-27573255.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A neighborhood outdoor futsal court with perimeter fencing, shaded picnic tables, and space for beginner drills and weekend pickup games.",
    submittedBy: "Taylor",
    submittedOn: "2026-09-08T09:15:00",
  },
  {
    id: 9,
    name: "Eastwood Sports Hall",
    pricePoint: "$$",
    hourlyRate: 60,
    audience: "Students and Youth Teams",
    image:
      "https://images.pexels.com/photos/15673780/pexels-photo-15673780.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A hardwood futsal court inside a community sports hall, with changing rooms and bench seating for school tournaments and after-class games.",
    submittedBy: "Riley",
    submittedOn: "2026-09-09T15:45:00",
  },
  {
    id: 10,
    name: "Harborview Rooftop Soccer",
    pricePoint: "$$$",
    hourlyRate: 115,
    audience: "Adult Groups and Corporate Teams",
    image:
      "https://images.pexels.com/photos/21293971/pexels-photo-21293971.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A net-enclosed rooftop court for small-sided soccer, with harbor views, floodlights, and a covered seating area for breaks between games.",
    submittedBy: "Devon",
    submittedOn: "2026-09-10T17:00:00",
  },
  {
    id: 11,
    name: "Oakridge Indoor Soccer Club",
    pricePoint: "$$$",
    hourlyRate: 130,
    audience: "Club Teams and Training Groups",
    image:
      "https://images.pexels.com/photos/15818646/pexels-photo-15818646.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A covered turf facility for five-a-side soccer with warm-up space, equipment storage, and changing rooms for year-round team practice.",
    submittedBy: "Jamie",
    submittedOn: "2026-09-11T12:10:00",
  },
  {
    id: 12,
    name: "Southside Community Futsal",
    pricePoint: "$",
    hourlyRate: 40,
    audience: "Casual Players and Mixed-Ability Groups",
    image:
      "https://images.pexels.com/photos/15673779/pexels-photo-15673779.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "An indoor community futsal court with a smooth playing surface, clearly marked boundaries, and a relaxed atmosphere for friendly five-a-side matches.",
    submittedBy: "Casey",
    submittedOn: "2026-09-12T14:25:00",
  },
];

export default pitches;
