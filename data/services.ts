export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "computer-repair",
    title: "Computer Repair",
    description: "Fast and reliable repair for desktops and laptops. From hardware failures to software issues.",
    icon: "🔧",
  },
  {
    slug: "phone-repair",
    title: "Phone Repair",
    description: "Screen and Battery replacement as an affordable price.",
    icon: "📱",
  },
  {
    slug: "printer-setup",
    title: "Printer & Network Setup",
    description: "Get your devices talking to each other. WiFi, printers, and home networks set up painlessly.",
    icon: "🖨️",
  },
  {
    slug: "data-backup",
    title: "Data Backup & Recovery Services",
    description: "Protect critical data with secure backups and fast recovery solutions, and is the best prevention to ransomware",
    icon: "💾",
  },
  {
    slug: "password-security",
    title: "Password Security & Management",
    description: "Simplify and secure logins with password manager setup and training.",
    icon: "🛡️",
  },
  {
    slug: "training",
    title: "Training in Digital Literacy",
    description: "Provide training for all tech-savviness levels. Reach out to collaborate.",
    icon: "👩‍🏫",
  },
];

export const accomplishments = [
  {
    title: "Years of Experience",
    value: "10",
  },
  {
    title: "Happy Clients",
    value: "40+",
  },
  {
    title: "Certifications",
    value: "3",
  },
  {
    title: "Same-Day Service",
    value: "75%",
  },
];
