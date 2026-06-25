// Testimonials shown on /testimonials. Each entry has a quote plus a short client
// `label` (family type / role) and an optional `location`. Keep labels general
// unless a client has given explicit permission to be identified.
//
// `featured: true` promotes an entry into the featured section. The featured entry
// below is Olga Fler's quote — published with her written consent, but displayed
// as an anonymized location label ("Moscow Client") per the approved final design.

const testimonials = [
  {
    quote:
      'They took the time to understand our home before suggesting anyone. The nanny they introduced has been a calm, caring part of our family ever since.',
    label: 'Private family',
    location: 'Dubai',
  },
  {
    quote:
      'It felt personal from the first conversation. They listened, shortlisted thoughtfully, and the person they introduced settled in with us beautifully.',
    label: 'Expat family',
    location: 'Tbilisi',
  },
  {
    quote:
      'What we appreciated most was the privacy and the care taken at each step. We never felt like we were sifting through a database on our own.',
    label: 'Parent',
    location: 'Singapore',
  },
  {
    quote:
      'A warm, professional and genuinely personal service. Every introduction felt considered and well matched to our household.',
    label: 'Family office client',
    location: 'UAE',
  },
  {
    quote:
      'Finding the right nanny changed our family life. From the very beginning, we felt supported throughout the entire process, and we were introduced to someone who has become an invaluable part of our home. Today, after two years together, she is more than a nanny—she feels like part of our family. The trust, professionalism, and genuine care she brings every day have given us complete peace of mind. I am happy for my name and this testimonial to be published because our experience has been truly exceptional.',
    label: 'Moscow Client',
    location: '',
    featured: true,
  },
];

module.exports = testimonials;
