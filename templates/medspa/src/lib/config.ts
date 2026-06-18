import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Alani Skin MD",
    tagline: "Look Your Best, Feel Amazing",
    phone: "(480) 993-2218",
    phoneHref: "tel:+14809932218",
    email: "info@alaniskinmd.com",
    address: "1727 E Baseline Rd #103",
    city: "Mesa",
    serviceAreas: ["Mesa", "Anthem", "Gilbert", "Scottsdale", "Avondale"],
    license: "AZ Medical Board Licensed",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Wrinkle Care & Botox", desc: "Smooth away fine lines and wrinkles for a refreshed, youthful appearance with expert Botox treatments.", urgent: false },
    { icon: "heart", title: "Weight Loss & Body Sculpting", desc: "Achieve your ideal physique with personalized weight loss programs, HRTs, and advanced body sculpting solutions.", urgent: false },
    { icon: "droplets", title: "Plump & Contour Injectables", desc: "Restore volume and enhance your natural contours with our premium dermal fillers and injectables.", urgent: false },
    { icon: "scissors", title: "Hair Removal", desc: "Experience long-lasting smoothness with our effective and comfortable laser hair removal treatments.", urgent: false },
    { icon: "star", title: "Facials & Skin Treatments", desc: "Rejuvenate your skin with custom facials, chemical peels, and advanced treatments for a healthy glow.", urgent: false },
    { icon: "zap", title: "Lasers & Lights", desc: "Improve skin tone, texture, and clarity with our state-of-the-art laser and light-based therapies.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Scottsdale", stars: 5, text: "I had my first Botox treatment at Alani Skin MD, and I'm thrilled with the results! The staff was incredibly friendly and professional, explaining everything clearly. My forehead lines are significantly smoother, and I feel so much more confident. Definitely coming back for more!" },
    { name: "Mark T.", location: "Gilbert", stars: 5, text: "The GLP-1 weight loss program here has been a game-changer for me. I've struggled with my weight for years, and this is the first time I've seen real, sustainable progress. The team is supportive and knowledgeable. Highly recommend for anyone looking for effective weight management." },
    { name: "Jessica R.", location: "Mesa", stars: 5, text: "I got lip fillers for the first time, and I couldn't be happier! My lips look naturally plump and beautiful, not overdone. The injector was so skilled and made me feel completely at ease. Alani Skin MD truly delivers amazing results and a wonderful experience." }
  ],

  trustBadges: [
    "AZ Medical Board Licensed", "Best Med Spa 2026", "15% Off First Treatment", "Referral Program: Give $50, Get $50", "GLP-1 Weight Loss Injections", "Memberships Available"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 },
    { value: 5, label: "Locations Served", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Award-Winning Care", desc: "Named 'Best Med Spa' in 2026, ensuring top-tier service and results." },
    { icon: "dollar-sign", title: "Exclusive Savings", desc: "Enjoy 15% off your first treatment and a generous referral program." },
    { icon: "home", title: "Multiple Locations", desc: "Conveniently located across Mesa, Scottsdale, Gilbert, Avondale, and Anthem." },
    { icon: "shield-check", title: "Certified Professionals", desc: "Our team consists of highly trained and licensed medical aesthetic experts." },
    { icon: "heart", title: "Personalized Plans", desc: "Tailored treatments designed to meet your unique aesthetic goals and needs." },
    { icon: "thumbs-up", title: "Satisfaction Guaranteed", desc: "We are committed to delivering exceptional results and a positive experience." }
  ],

  formServiceOptions: ["Wrinkle Care & Botox", "Weight Loss & Body Sculpting", "Plump & Contour Injectables", "Hair Removal", "Facials & Skin Treatments", "Lasers & Lights", "Consultations"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!