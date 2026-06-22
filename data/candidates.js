// Candidate showcase data — supports the commercial/privacy access model.
//
// profileType controls how a profile is presented and labelled:
//   real_available  — a verified, currently available candidate
//   real_placed     — a real candidate currently placed with a family (NOT available)
//   representative  — an illustrative/representative example, clearly labelled as such
//
// HONESTY RULE: never mark an unverified/illustrative profile as real_available.
// The seed profiles below are sanitized sample data, so they are only ever
// `representative` or `real_placed` — never presented as real available people.
//
// PRIVACY RULE — never add any of the following to this file or the views:
//   phone, email, WhatsApp, full address, passport / ID number, date of birth,
//   referee names or contacts, employer contact details, downloadable CVs or
//   recommendation letters. Full CVs, references and introductions are
//   coordinated offline through Trusted Household & Childcare.

const candidates = [
  {
    displayName: 'Mary Ann',
    slug: 'mary-ann',
    role: 'Nanny / Housekeeper / Family Assistant',
    statusLabel: 'Available for consultation',
    profileType: 'real_available',
    nationality: 'Filipino',
    availabilityRegion: 'UAE / Hong Kong / International families by arrangement',
    yearsExperience: '7+ years in private household, nanny, and family support roles',
    languages: ['English', 'Tagalog'],
    childcareExperience:
      'Infant care, toddler support, school-age children, twins, homework support, daily routines, meal preparation, clothing organization, and personal care assistance.',
    householdExperience:
      'Private household cleaning, laundry, ironing, household organization, grocery lists, food preparation, wardrobe support, supplies coordination, and family travel preparation.',
    skills: [
      'Infant and twin care',
      'Private household organization',
      'Laundry and ironing',
      'Meal preparation support',
      'Children’s routines and homework support',
      'VIP/private-family discretion',
      'Healthcare assistant training background',
    ],
    shortBio:
      'Mary Ann is a Filipino nanny, housekeeper, and family assistant with experience supporting private households in the UAE and Hong Kong. Her background combines childcare, household organization, laundry, food preparation, and practical family support. She has worked in discreet private-family environments and has experience caring for infants, twins, and school-age children.',
    cvSummary:
      'Her experience includes nanny and housemaid responsibilities across private households, including infant and twin care, children’s routines, household cleaning, laundry, ironing, food preparation, grocery support, and family organization. She also has a nursing and healthcare-assistant training background, which adds useful practical understanding for childcare and family-care environments.',
    workHistorySummary:
      'Mary Ann has supported private households in the UAE and Hong Kong, including VIP/private-family settings. Her responsibilities included maintaining organized homes, supporting children’s daily needs, preparing food, handling laundry and ironing, assisting with travel preparation, helping with school homework and projects, and maintaining household supplies and routines.',
    recommendationExcerpt:
      'References and additional background details are available through Trusted Household & Childcare after consultation. Direct candidate contact details and private household information are withheld to protect candidate privacy and maintain a professional introduction process.',
    trustNotes: [
      'Profile prepared from candidate CV documentation',
      'Direct phone, email, address, and private identity details removed',
      'Named employers and private households anonymized',
      'References available through consultation where appropriate',
      'Full CV access coordinated only through Trusted Household & Childcare',
    ],
    ctaLabel: 'Request CV access',
  },
  {
    slug: 'maria',
    displayName: 'Maria',
    role: 'Nanny / Childcare Helper',
    profileType: 'representative',
    statusLabel: 'Representative profile',
    ctaLabel: 'Request private shortlist',
    nationality: 'Filipino',
    availabilityRegion: 'UAE & GCC — open to international placement',
    yearsExperience: 8,
    languages: ['English', 'Tagalog'],
    childcareExperience: 'Infants and toddlers (0–4 years)',
    householdExperience:
      'Comfortable with light household support around childcare — children’s laundry, tidying play areas, and meal preparation for little ones.',
    skills: [
      'Newborn & infant care',
      'Feeding & sleep routines',
      'Early-years play & development',
      'Child-focused meal prep',
      'First-aid aware',
    ],
    shortBio:
      'A warm, patient nanny profile illustrating eight years of care for babies and toddlers in private family homes — calm routines, gentle guidance, and a love of early-years development.',
    cvSummary:
      'Eight years in private childcare roles focused on infants and toddlers — establishing feeding and sleep routines, supporting early learning through play, and partnering closely with parents.',
    workHistorySummary: [
      'Private family, Middle East — sole-charge nanny for two children under five (4 years)',
      'Private household, Southeast Asia — infant care and daily routines (3 years)',
    ],
    recommendationExcerpt:
      '“Gentle, reliable and wonderful with our children — we always felt our family was in safe, caring hands.” — Private family (details retained on file)',
    trustNotes: 'Personally reviewed and screened; reference-checked where available.',
  },
  {
    slug: 'grace',
    displayName: 'Grace',
    role: 'Housekeeper / Family Assistant',
    profileType: 'real_placed',
    statusLabel: 'Currently placed with a family',
    ctaLabel: 'Request similar candidate',
    nationality: 'Filipino',
    availabilityRegion: 'Currently placed (Europe)',
    yearsExperience: 10,
    languages: ['English', 'Tagalog'],
    childcareExperience: 'Comfortable supporting school-age children as part of household duties',
    householdExperience:
      'Full private household support — cleaning to a high standard, laundry and wardrobe care, home cooking, grocery management, and day-to-day household organization.',
    skills: [
      'High-standard housekeeping',
      'Laundry & wardrobe care',
      'Home cooking',
      'Household organization',
      'Discreet family support',
    ],
    shortBio:
      'An experienced housekeeper and family assistant currently placed with a private family. Shown to illustrate the calibre of household professional we review — not currently available.',
    cvSummary:
      'Ten years in private household roles covering housekeeping, cooking, laundry and family assistance, often within multi-staff homes.',
    workHistorySummary: [
      'Private household, Europe — housekeeper and family assistant (current placement)',
      'Private family, Middle East — housekeeping and cooking (5 years)',
    ],
    recommendationExcerpt:
      '“Meticulous, discreet and utterly reliable — our home has never run better.” — Expat family (details retained on file)',
    trustNotes: 'Personally reviewed and screened; reference-checked where available.',
  },
  {
    slug: 'ana',
    displayName: 'Ana',
    role: 'Nanny / Household Support',
    profileType: 'representative',
    statusLabel: 'Representative profile',
    ctaLabel: 'Request private shortlist',
    nationality: 'Filipino',
    availabilityRegion: 'Singapore & Asia — open to international placement',
    yearsExperience: 6,
    languages: ['English', 'Tagalog'],
    childcareExperience: 'School-age children (5–12 years)',
    householdExperience:
      'Confident combining childcare with everyday household routines — school runs, homework support, tidying, and family meal preparation.',
    skills: [
      'School-age childcare',
      'Homework & activity support',
      'Reliable school runs',
      'Everyday household routines',
      'Family meal prep',
    ],
    shortBio:
      'A representative nanny profile illustrating six years with school-age children — balancing after-school care with dependable household routines for a structured, happy home.',
    cvSummary:
      'Six years supporting families with school-age children — after-school care, homework help and light household routines.',
    workHistorySummary: [
      'Private family, Asia — nanny for two school-age children (4 years)',
      'Private household, Asia — childcare and household support (2 years)',
    ],
    recommendationExcerpt:
      '“Dependable and great with our kids — homework, activities and a calm, happy home.” — Parent (details retained on file)',
    trustNotes: 'Personally reviewed and screened; reference-checked where available.',
  },
];

module.exports = candidates;
