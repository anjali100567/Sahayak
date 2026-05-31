import "./globals.css";
import Footer from "../components/Footer";
import AssistantWidget from "../components/AssistantWidget";

export const metadata = {
  title: "Sahayak | Find Trusted Workers in Your Area",
  description: "Connect with local daily workers like maids, plumbers, electricians, cooks, and tutors. Trusted, simple, and community-driven.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {children}
        <Footer />
        <AssistantWidget />
      </body>
    </html>
  );
}
