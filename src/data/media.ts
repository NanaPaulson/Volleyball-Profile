export interface HighlightVideo {
  id: string;
  title: string;
  src: string;
  poster: string;
}

export interface Achievement {
  id: string;
  title: string;
  category?: string;
  year: number;
  status: string;
  institution: string;
  image: string;
  alt: string;
}

export const highlights: HighlightVideo[] = [
  {
    id: "highlight-1",
    title: "Volleyball Highlight 1",
    src: "/video/Highlight1.mp4",
    poster: "/images/image4.jpeg",
  },
  {
    id: "highlight-2",
    title: "Volleyball Highlight 2",
    src: "/video/Highlight2.mp4",
    poster: "/images/image7.jpeg",
  },
  {
    id: "highlight-3",
    title: "Volleyball Highlight 3",
    src: "/video/Hightlight3.mp4",
    poster: "/images/image8.jpeg",
  },
  {
    id: "highlight-4",
    title: "Volleyball Highlight 4",
    src: "/video/Highlight4.mp4",
    poster: "/images/image9.jpeg",
  },
];

export const achievements: Achievement[] = [
  {
    id: "best-in-volleyball",
    title: "Best in Volleyball",
    year: 2026,
    status: "2026 Nominee",
    institution: "University of Ghana Students' Sports Council",
    image: "/images/nomination-volleyball.jpeg",
    alt: "Best in Volleyball 2026 nomination poster for Tahiru Felix",
  },
  {
    id: "most-promising-athlete",
    title: "Most Promising Athlete of the Year",
    category: "Level 100",
    year: 2026,
    status: "2026 Nominee",
    institution: "University of Ghana Students' Sports Council",
    image: "/images/nomination-promising.jpeg",
    alt: "Most Promising Athlete of the Year 2026 nomination poster for Tahiru Felix",
  },
];
