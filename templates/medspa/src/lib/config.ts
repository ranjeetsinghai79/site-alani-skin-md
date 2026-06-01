import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Alani Skin MD",
    tagline: "Look Your Best, Feel Amazing",
    phone: "(480) 993-2218",
    phoneHref: "tel:+14809932218",
    email: "info@alaniskinmd.com",
    address: "123 Main St",
    city: "Gilbert",
    serviceAreas: ["Gilbert/Mesa, AZ", "Scottsdale, AZ", "Avondale, AZ", "Anthem, AZ"],
    license: "AZ Medical Board Licensed",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Wrinkle Care & Botox", desc: "Smooth away fine lines and wrinkles for a refreshed, youthful appearance.", urgent: false },
    { icon: "heart", title: "Weight Loss & HRT", desc: "Personalized programs for sustainable weight loss and hormone balance.", urgent: false },
    { icon: "droplets", title: "Plump & Contour Injectables", desc: "Restore volume and enhance facial contours with expert injectable treatments.", urgent: false },
    { icon: "scissors", title: "Hair Removal & Treatment", desc: "Achieve silky smooth skin with advanced laser hair removal solutions.", urgent: false },
    { icon: "star", title: "Facials & Skin Rejuvenation", desc: "Revitalize your complexion with custom facials and advanced skin treatments.", urgent: false },
    { icon: "zap", title: "Lasers & Light Therapies", desc: "Target specific skin concerns with cutting-edge laser and light-based treatments.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Scottsdale, AZ", stars: 5, text: "I had a fantastic experience with Alani Skin MD for my Botox. The staff was incredibly professional and made me feel comfortable throughout the entire process. My results are natural and I look years younger! Highly recommend their expertise." },
    { name: "Mark T.", location: "Gilbert, AZ", stars: 5, text: "The GLP-1 weight loss program at Alani Skin MD has been life-changing. I've lost 20 pounds in 3 months and feel healthier than ever. The team provided excellent support and guidance every step of the way. Truly grateful for their personalized approach." },
    { name: "Jessica R.", location: "Mesa, AZ", stars: 5, text: "My skin has never looked better since I started getting regular facials and laser treatments here. The estheticians are knowledgeable and truly care about achieving the best results. The Hydrafacial left my skin glowing for weeks!" }
  ],

  trustBadges: [
    "Board-Certified Practitioners", "Personalized Treatment Plans", "Multiple AZ Locations", "Membership Programs Available", "15% Off First Treatment", "Referral Rewards"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 },
    { value: 5000, label: "Happy Clients", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Expert Practitioners", desc: "Our team consists of highly trained and certified medical professionals." },
    { icon: "heart", title: "Personalized Care", desc: "We tailor every treatment plan to your unique needs and aesthetic goals." },
    { icon: "home", title: "Multiple Locations", desc: "Conveniently located across Arizona for easy access to our services." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear, upfront pricing with no hidden fees, and membership options." },
    { icon: "sparkles", title: "Cutting-Edge Technology", desc: "Utilizing the latest advancements in aesthetic and wellness treatments." },
    { icon: "thumbs-up", title: "Client Satisfaction", desc: "Dedicated to achieving exceptional results and ensuring your happiness." }
  ],

  formServiceOptions: ["Wrinkle Care & Botox", "Weight Loss & HRT", "Plump & Contour Injectables", "Hair Removal & Treatment", "Facials & Skin Rejuvenation", "Lasers & Light Therapies"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!