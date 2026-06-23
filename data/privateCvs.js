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

const privateCvs = [
  {
    // Sample entry — built only from already-public/safe profile information
    // (see data/candidates.js "mary-ann"). No private data is added here.
    // Token is deliberately name-free so the URL does not reveal the candidate.
    token: 'cv-7f3a9c2e5b1d',
    displayName: 'Mary Ann',
    role: 'Nanny / Housekeeper / Family Assistant',
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
    referencesNote: 'References available by request',
    contactNote: 'All introductions are coordinated through Trusted Household & Childcare.',
  },
];

module.exports = privateCvs;
