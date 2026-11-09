export const deities = [
  { name: "Shiva", subtitle: "The auspicious one", mark: "ॐ", tone: "shiva", description: "Shiva is honoured as the source of transformation, stillness and renewal. Devotees come to pray, reflect and begin again." },
  { name: "Vishnu", subtitle: "The preserver", mark: "श्री", tone: "vishnu", description: "Vishnu sustains and protects the world, appearing whenever balance and dharma need to be restored." },
  { name: "Ganesha", subtitle: "Remover of obstacles", mark: "गं", tone: "ganesha", description: "With wisdom and a generous heart, Ganesha is invoked at new beginnings and before every important undertaking." },
  { name: "Durga", subtitle: "Divine mother", mark: "दुं", tone: "durga", description: "Durga represents courage, compassion and the strength to overcome what stands in the way of truth." },
  { name: "Murugan", subtitle: "Lord of wisdom", mark: "வேல்", tone: "murugan", description: "Murugan, the youthful embodiment of wisdom and valour, is beloved by devotees across generations." },
  { name: "Hanuman", subtitle: "Devotion without measure", mark: "राम", tone: "hanuman", description: "Hanuman is a lasting example of humility, loyalty and strength offered in service to others." },
];

export const festivals = [
  { month: "FEB", day: "15", name: "Maha Shivaratri", note: "An evening of devotion, abhishekam and all-night worship.", detail: "Join devotees for special worship of Lord Shiva, traditional offerings, devotional singing and a night of prayer." },
  { month: "MAR", day: "27", name: "Rama Navami", note: "Celebrate the birth of Lord Rama with bhajans and prasadam.", detail: "A joyful day of recitation, bhajans and offerings celebrating the life and teachings of Lord Rama." },
  { month: "AUG", day: "16", name: "Krishna Janmashtami", note: "A joyful celebration of Krishna's birth and divine play.", detail: "Families gather for devotional songs, stories and worship marking the birth of Lord Krishna." },
  { month: "SEP", day: "22", name: "Navaratri begins", note: "Nine nights of devotion, dance and the triumph of the divine feminine.", detail: "Nine nights honouring the many forms of the divine mother through worship, music and community celebration." },
  { month: "OCT", day: "20", name: "Deepavali", note: "Join the community as we welcome the festival of lights.", detail: "Celebrate light, renewal and togetherness with worship and a gathering of the temple community." },
];

export const services = [
  { number: "01", name: "Annadaanam", detail: "Offering nourishing meals to all, because a shared table is a sacred place." },
  { number: "02", name: "Cultural learning", detail: "Language, music and dance programs that keep living traditions close." },
  { number: "03", name: "Community care", detail: "A welcoming hand and a listening ear for our neighbours, at every age." },
];

export const galleryImages = [
  { src: "photo-1689525508929-eb6b773b1fd2", alt: "Colourful Hindu temple complex reflected in its sacred tank" },
  { src: "photo-1759134334610-488eb3937c82", alt: "Carved stone temple towers at dusk" },
  { src: "photo-1679635520566-980d28a8e507", alt: "Traditional stone temple and garden" },
  { src: "photo-1677434654722-69e7ba88b4ef", alt: "Ornate temple tower with sculpted figures" },
  { src: "photo-1715876722520-02ccc9248dab", alt: "Temple architecture in the warm evening light" },
  { src: "photo-1759509334486-3ae81c4dcb01", alt: "Vividly painted temple architecture" },
];

export function templeImage(id: string, width = 1400) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}