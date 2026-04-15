export const articles = [
  {
    slug: 'building-ai-for-under-served-languages',
    title: 'Building AI for Languages the Market Ignores',
    date: 'APR 2026',
    excerpt:
      'What it takes to build useful AI for people who are usually treated as edge cases by the mainstream market.',
    status: 'Published',
    paragraphs: [
      'Most AI products are built for users who already have strong digital infrastructure, strong purchasing power, and strong representation in training data. That leaves a huge gap for everyone else. If you are building for a language like Amharic, you start from a different reality. The tools are weaker, the data is thinner, and the defaults rarely fit.',
      'That is exactly why the problem matters. Language technology becomes most valuable when it reaches people who are not well served by the mainstream stack. Speech recognition is not impressive to me because it looks futuristic. It is useful because it can lower friction, widen access, and make software feel native to people who should not have to adapt themselves to English-first systems.',
      'The hard part is not only model quality. It is the full system around the model. You have to think about data collection, cleaning, deployment cost, latency, fallback behavior, and the way real users speak outside benchmark conditions. A demo can hide those issues. A real product cannot.',
      'Building in this space also changes how you think about ambition. The goal is not to copy what larger companies already did for bigger markets. The goal is to build tools that fit the constraints and opportunities of the people in front of you. That takes technical patience, product judgment, and respect for local context.',
      'I think the next wave of meaningful AI products will come from builders who understand a specific group deeply enough to serve them well. Not everyone needs to build for a billion users on day one. Sometimes the sharper path is to solve a real problem for people who have been overlooked for too long.',
      'That is the category of work I want to keep doing. I want to build AI that feels useful, local, and grounded in real conditions. If the market has ignored a language or a region, that should be seen as an opening, not a reason to look away.',
    ],
  },
  {
    slug: 'what-shipping-taught-me-early',
    title: 'What Shipping Early Has Taught Me',
    date: 'APR 2026',
    excerpt:
      'A few lessons from building before feeling fully ready, and why that has helped me grow faster than waiting for confidence.',
    status: 'Published',
    paragraphs: [
      'Shipping early has made me a better engineer than waiting ever could. When you publish something, even if it is rough, reality starts giving feedback immediately. You learn what breaks, what confuses people, what feels slow, and what you only believed worked because nobody had touched it yet.',
      'One of the biggest mindset shifts for me has been understanding the difference between building and finishing. Many people can start a project. Fewer people can take it through the boring parts: bug fixes, deployment, cleanup, copy, edge cases, and follow-up improvements after the first version goes live.',
      'Shipping also exposed where my confidence was fake. There were times I thought I understood a stack until I had to deploy it, connect services, handle state, or fix a failure under pressure. That kind of friction is frustrating in the moment, but it teaches much faster than passive learning.',
      'Another lesson is that taste matters, but proof matters more. A polished interface can get attention, but it does not earn trust by itself. Trust comes from whether the thing works, whether the links are real, whether the product has a clear purpose, and whether you can explain your decisions without hiding behind aesthetics.',
      'I do not think the answer is to ship carelessly. The answer is to ship honestly. Show what is real, keep improving it, and let each project teach you the next layer of the craft. That approach has helped me build momentum even while I am still early in my career.',
      'The builders I respect most are not the ones who always look finished. They are the ones who keep closing loops. They start, learn, revise, and ship again. That is the standard I want to keep moving toward.',
    ],
  },
  {
    slug: 'weekly-build-log',
    title: 'Weekly Build Log',
    date: 'APR 2026',
    excerpt: 'Notes from active projects, technical blockers, and the decisions shaping what I build next.',
    status: 'Coming Soon',
    paragraphs: [
      'This article is still in progress.',
    ],
  },
]

export function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug)
}
