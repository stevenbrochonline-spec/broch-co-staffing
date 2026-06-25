// Anonymized testimonials only. Do not add full client names unless explicit
// permission exists. Keep attributions general (family type + city/market).

const testimonials = [
  {
    quote:
      'They took the time to understand our home before suggesting anyone. The nanny they introduced has been a calm, caring part of our family ever since.',
    attribution: 'Private family, Dubai',
  },
  {
    quote:
      'It felt personal from the first conversation. They listened, shortlisted thoughtfully, and the person they introduced settled in with us beautifully.',
    attribution: 'Expat family, Tbilisi',
  },
  {
    quote:
      'What we appreciated most was the privacy and the care taken at each step. We never felt like we were sifting through a database on our own.',
    attribution: 'Parent, Singapore',
  },
  {
    quote:
      'A warm, professional and genuinely personal service. Every introduction felt considered and well matched to our household.',
    attribution: 'Family office client, UAE',
  },
  // Published with the client's explicit written permission to use her full name.
  // `featured` promotes this entry into the featured section on the testimonials
  // page. `photo` reserves space for Olga's real portrait — set it to the image
  // path (e.g. '/images/team/olga-fler.jpg') once the approved photo is added to
  // public/images; until then a placeholder monogram is shown (no broken image).
  {
    quote:
      'Finding the right nanny changed our family life. From the very beginning, we felt supported throughout the entire process, and we were introduced to someone who has become an invaluable part of our home. Today, after two years together, she is more than a nanny—she feels like part of our family. The trust, professionalism, and genuine care she brings every day have given us complete peace of mind. I am happy for my name and this testimonial to be published because our experience has been truly exceptional.',
    attribution: 'Olga Fler',
    featured: true,
    photo: null,
  },
];

module.exports = testimonials;
