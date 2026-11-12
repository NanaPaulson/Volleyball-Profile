import type { AthleteProfile, GalleryImage } from "@/types/athlete";

export const athlete: AthleteProfile = {
  fullName: "Tahiru Felix",
  displayName: "TAHIRU FELIX",
  age: 21,
  heightFeet: "6'3\"",
  heightCm: 191,
  nationality: "Ghanaian",
  jerseyNumber: 9,
  positions: ["Outside Hitter", "Opposite Hitter"],
  university: "University of Ghana",
  team: "University of Ghana Men's Volleyball Team",
  league: "Ghana Volleyball League",
  degree: "Bachelor of Education in Physical Education and Health",
  academicLevel: "First Year",
  recruitmentStatus: "Prospective International Transfer Student-Athlete",
  scholarship: {
    type: "Full Volleyball Scholarship",
    institution: "University of Ghana",
    status: "Current",
  },
  gpa: null,
  enrollmentYear: null,
  email: "ftahiru007@st.ug.edu.gh",
  usaEmail: "nanakwamepaulsons@gmail.com",
  usaPhone: "+13464483426",
  whatsapp: null,
  highlightVideo: null,
  matchVideo: null,
  fullMatchVideo: null,
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/image6.jpeg", alt: "Tahiru Felix attacking at the net", className: "gallery-tall" },
  { src: "/images/image5.jpeg", alt: "Tahiru Felix in his University of Ghana kit", className: "gallery-portrait" },
  { src: "/images/image4.jpeg", alt: "Tahiru Felix in a match", className: "gallery-wide" },
  { src: "/images/image7.jpeg", alt: "Tahiru Felix jumping to play the ball" },
  { src: "/images/image8.jpeg", alt: "Tahiru Felix on the volleyball court" },
  { src: "/images/image9.jpeg", alt: "Tahiru Felix in a game-ready portrait" },
  { src: "/images/image1.jpeg", alt: "Tahiru Felix serving outdoors" },
  { src: "/images/Image2.jpeg", alt: "Tahiru Felix with teammates" },
  { src: "/images/image3.jpeg", alt: "Tahiru Felix during volleyball play" },
  { src: "/images/image10.jpeg", alt: "Tahiru Felix with the University of Ghana team" },
];

export const navItems = [["Home", "home"], ["Profile", "profile"], ["Competitions", "competitions"], ["Achievements", "achievements"], ["Highlights", "highlights"], ["Academics", "academics"], ["Contact", "contact"]] as const;
