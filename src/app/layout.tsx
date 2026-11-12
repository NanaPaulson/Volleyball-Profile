import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tahiru Felix | Men's Volleyball Athlete Recruitment Profile",
  description: "Explore the volleyball recruitment profile of Tahiru Felix, a 6'3\" outside and opposite hitter competing for the University of Ghana Men's Volleyball Team.",
  openGraph: { title: "Tahiru Felix | Volleyball Recruitment Profile", description: "Ghanaian outside and opposite hitter seeking collegiate men's volleyball opportunities in the United States.", images: ["/images/image6.jpeg"] },
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
