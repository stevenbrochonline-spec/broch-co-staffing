// Private CV profiles — NON-PUBLIC. This is not a public CV database.
//
// Private CV links are only sent manually after consultation/agreement and
// should never contain direct contact details.
//
// PRIVACY RULE — never add any of the following to this file or the private
// CV view: candidate phone, email, WhatsApp, date of birth, passport / ID,
// home address, referee names or contact details, downloadable raw CVs, or
// direct candidate contact links. Tokens are unguessable strings shared
// privately with a single recipient family after consultation.
//
// TRACKING — When sending a private CV link, record client name, candidate
// name, token/reference, date/time sent, agreement status, and
// payment/introduction status outside the public site.

const privateCvs = [
  {
    // Sample entry — built only from already-public/safe profile information
    // (see data/candidates.js "mary-ann"). No private data is added here.
    // Token is deliberately name-free so the URL does not reveal the candidate.
    token: 'cv-7f3a9c2e5b1d',
    reference: 'THC-MA-001',
    displayName: 'Mary Ann',
    role: 'Nanny / Housekeeper / Family Assistant',
    // Photo approved for private-CV use only — never shown on public candidate
    // cards or public candidate pages.
    photoUrl: '/images/candidates/mary-ann-private.jpg',
    photoAlt: 'Mary Ann, private household and childcare professional',
    photoNote: 'Photo shared as part of Mary Ann’s private family profile.',
    introducedByNote:
      'This candidate profile is shared privately by Trusted Household & Childcare after consultation. Candidate contact details, full references, and direct introductions are coordinated only through Trusted Household & Childcare.',
    experienceSummary:
      '7+ years in private household, nanny, and family support roles. Experience spans nanny and housemaid responsibilities across private households — including infant and twin care, children’s routines, household cleaning, laundry, ironing, food preparation, grocery support, and family organization. Also holds a nursing and healthcare-assistant training background, which adds useful practical understanding for childcare and family-care environments.',
    skills: [
      'Infant and twin care',
      'Private household organization',
      'Laundry and ironing',
      'Meal preparation support',
      'Children’s routines and homework support',
      'VIP/private-family discretion',
      'Healthcare assistant training background',
    ],
    languages: ['English', 'Tagalog'],
    childcareHouseholdExperience:
      'Childcare: infant care, toddler support, school-age children, twins, homework support, daily routines, meal preparation, clothing organization, and personal care assistance. Household: private household cleaning, laundry, ironing, household organization, grocery lists, food preparation, wardrobe support, supplies coordination, and family travel preparation.',
    availabilityNotes: 'UAE / Hong Kong / International families by arrangement.',
    experienceHighlights: [
      'Nanny / housekeeper / family assistant',
      'UAE and Hong Kong private household experience',
      'VIP / private-family support',
      'Infant and twin care',
      'School-age support, homework, routines, and personal care',
      'Household cleaning and organization',
      'Laundry, ironing, and wardrobe support',
      'Meal preparation and food support',
      'Grocery and household-supply support',
      'Travel preparation and family assistance',
      'Nursing / healthcare assistant training background',
    ],
    personalNote: [
      'Mary Ann enjoys working closely with children and has built strong, warm relationships with the families she has supported. She is especially confident with babies and young children, and she enjoys being part of their daily routine, care, learning, and development.',
      'In her previous family roles, she has usually stayed for several years, which reflects her loyalty, reliability, and ability to become a trusted part of the household. She values respectful, long-term family relationships and takes pride in caring for children and the home with patience, happiness, and professionalism.',
    ],
    reasonForNewFamily:
      'Mary Ann is not leaving because of a problem with her current family. She is appreciated in her current role, but the child is now growing into the next school stage. Mary Ann would like a new long-term position where she can be more actively involved in childcare, household support, and family routines.',
    nextSteps: [
      'Confirm interest in meeting Mary Ann',
      'Review and accept the introduction agreement',
      'Arrange a private video call',
      'Proceed only if both family and candidate agree',
    ],
    referencesNote: 'References available by request',
    contactNote: 'All introductions are coordinated through Trusted Household & Childcare.',
  },
];

module.exports = privateCvs;
