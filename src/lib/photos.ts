export type Photo = {
  index: string;
  slug: string;
  title: string;
  category: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  credit: { name: string; url: string };
};

export const photos: Photo[] = [
  {
    index: "01",
    slug: "between-land-and-sea",
    title: "Between land & sea",
    category: "Landscape",
    src: "/photos/between-land-and-sea.jpg",
    width: 1800,
    height: 1013,
    alt: "Golden dunes meet a deep blue ocean beneath a clear sky",
    credit: {
      name: "Nir Himi",
      url: "https://unsplash.com/photos/vast-sand-dunes-meet-the-ocean-under-a-clear-sky-gSIjbABf9sc",
    },
  },
  {
    index: "02",
    slug: "afternoon-light",
    title: "In the afternoon light",
    category: "Portrait",
    src: "/photos/afternoon-light.jpg",
    width: 1400,
    height: 933,
    alt: "Warm portrait of a woman with leaf shadows falling across her face",
    credit: {
      name: "Leonardo Iribe",
      url: "https://unsplash.com/photos/woman-with-sunlight-and-leaf-shadows-on-face-9D_C2IQnDac",
    },
  },
  {
    index: "03",
    slug: "lines-and-light",
    title: "Lines & light",
    category: "Architecture",
    src: "/photos/lines-and-light.jpg",
    width: 1800,
    height: 2701,
    alt: "A tall cylindrical concrete tower beside a spiral staircase against a clear sky",
    credit: {
      name: "Pierre Châtel-Innocenti",
      url: "https://unsplash.com/photos/concrete-building-during-daytime-LSSr-EruRb0",
    },
  },
  {
    index: "04",
    slug: "the-quiet-shore",
    title: "The quiet shore",
    category: "Landscape",
    src: "/photos/the-quiet-shore.jpg",
    width: 1800,
    height: 2250,
    alt: "Sandy desert dunes meet calm blue water under an open sky",
    credit: {
      name: "rishi",
      url: "https://unsplash.com/photos/sandy-desert-dunes-meet-calm-blue-water-under-sky-R3NdCGuaMSM",
    },
  },
  {
    index: "05",
    slug: "study-in-shadow",
    title: "A study in shadow",
    category: "Architecture",
    src: "/photos/study-in-shadow.jpg",
    width: 1800,
    height: 2705,
    alt: "Sculptural concrete arches with dramatic shadows and a small figure",
    credit: {
      name: "Adrien Olichon",
      url: "https://unsplash.com/photos/curving-concrete-architecture-with-dramatic-shadows-HOrhjQISKY4",
    },
  },
  {
    index: "06",
    slug: "blue-hour",
    title: "Blue hour",
    category: "Street",
    src: "/photos/blue-hour.jpg",
    width: 1800,
    height: 2168,
    alt: "Streetlights illuminate a foggy, wet city street at night",
    credit: {
      name: "Qinru Xie",
      url: "https://unsplash.com/photos/streetlights-illuminate-a-foggy-wet-city-street-at-night-GR9oBravYVk",
    },
  },
];
