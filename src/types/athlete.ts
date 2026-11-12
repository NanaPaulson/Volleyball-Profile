export type Nullable<T> = T | null;

export interface Scholarship {
  type: string;
  institution: string;
  status: string;
}

export interface AthleteProfile {
  fullName: string;
  displayName: string;
  age: number;
  heightFeet: string;
  heightCm: number;
  nationality: string;
  jerseyNumber: number;
  positions: string[];
  university: string;
  team: string;
  league: string;
  degree: string;
  academicLevel: string;
  recruitmentStatus: string;
  scholarship: Scholarship;
  gpa: Nullable<string>;
  enrollmentYear: Nullable<string>;
  email: Nullable<string>;
  usaEmail: Nullable<string>;
  usaPhone: Nullable<string>;
  whatsapp: Nullable<string>;
  highlightVideo: Nullable<string>;
  matchVideo: Nullable<string>;
  fullMatchVideo: Nullable<string>;
}

export interface GalleryImage {
  src: string;
  alt: string;
  className?: string;
}
