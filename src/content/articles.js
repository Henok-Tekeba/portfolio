export const articles = [
  {
    slug: 'ai-agents-future',
    title: 'AI Agents and the Future I See Coming',
    date: 'APR 2026',
    excerpt:
      'My thoughts on AI agents, where they are heading, and how they may reshape work, products, and everyday life.',
    status: 'Published',
    paragraphs: [
      'The idea that excites me most about AI right now is not just better chat. It is agency. An agent does not only answer a question, it can keep context, break a goal into steps, use tools, recover from errors, and keep moving until the job is done. That shift from response to execution is a bigger jump than most people realize.',
      'In the near future, every serious product will have an agent layer. Not as a gimmick, but as core infrastructure. You will still have buttons and screens, but behind many actions there will be autonomous systems handling research, scheduling, drafting, coding, monitoring, and support. The interface people see will stay simple while the real complexity moves behind the scenes.',
      'I think work will split into three categories. First is taste and direction: deciding what matters and what should be built. Second is orchestration: designing reliable systems where humans and agents collaborate. Third is trust: verifying outputs, protecting data, and setting boundaries. Pure repetition will shrink fast, while judgment and product thinking become more valuable.',
      'For builders like me, this is the best time to be early. Small teams can now ship what used to require entire departments. One person with clear intent can connect models, APIs, and workflows into something that feels magical for users. The advantage will not be who has the biggest model, but who understands users deeply and closes the loop from problem to deployed solution.',
      'I also expect local and language-specific agents to become a major frontier. Global models are impressive, but value is created when systems understand local context, local language, and local constraints. In places like Ethiopia, that means building AI tools that speak naturally, support real workflows, and work reliably even in imperfect infrastructure conditions.',
      'My long-term view is simple: agents will become a new digital workforce, and the winners will be people who can direct that workforce with clarity. The future does not belong to people who fear automation, and it does not belong to people who blindly trust it either. It belongs to people who can design, supervise, and continuously improve agent systems that actually solve human problems.',
    ],
  },
  {
    slug: 'crime-and-punishment-reading-notes',
    title: 'Reading Notes: Crime and Punishment',
    date: 'APR 2026',
    excerpt:
      'Reflections on Dostoevsky\'s Crime and Punishment, the psychology of guilt, and what the book made me question.',
    status: 'Published',
    paragraphs: [
      'What stayed with me most in Crime and Punishment was not the crime itself, but the internal collapse that followed it. Raskolnikov tries to justify his action with theory, intelligence, and pride, yet none of that can protect him from his own conscience. The novel shows that guilt is not always a legal category first. Sometimes it is a psychological reality that starts long before punishment arrives.',
      'Dostoevsky writes people as contradictions. Raskolnikov is cold and compassionate, arrogant and fragile, detached and desperate for connection. That complexity made him feel real. We often want to classify people as good or bad quickly, but the book reminds us that human beings can carry opposite truths at the same time. That makes judgment harder, but understanding deeper.',
      'Another part I found powerful is how isolation intensifies moral confusion. The more Raskolnikov withdraws, the more distorted his thinking becomes. The city around him feels crowded, but he is mentally alone. It made me think about modern life too. You can be connected online all day and still become isolated in your own narrative, especially when you stop hearing honest voices from others.',
      'Characters like Sonya bring a different kind of strength: not loud power, but moral endurance. She does not win arguments with cleverness; she changes people through presence, sacrifice, and truthfulness. Her role suggests that redemption is relational. People rarely rebuild themselves in total isolation. They need someone who sees them fully and still calls them toward responsibility.',
      'I finished the book with a stronger belief that ideas are never harmless abstractions. When a theory removes the dignity of others, it eventually deforms the person who holds it. Intelligence without humility can become dangerous. Crime and Punishment feels timeless because it asks a question we still face: what happens when someone starts believing they are exempt from ordinary morality?',
      'For me, this novel is a study of conscience, pride, and the possibility of renewal. It does not offer easy optimism, but it does offer hope that truth can break through self-deception. That is why it still matters. It is not only a story about one man in one city. It is a mirror for anyone who has ever tried to outrun responsibility.',
    ],
  },
  {
    slug: 'weekly-build-log',
    title: 'Weekly Build Log',
    date: 'APR 2026',
    excerpt: 'A living recap of wins, blockers, and technical decisions from each week.',
    status: 'Coming Soon',
    paragraphs: [
      'This article is still in progress.',
    ],
  },
]

export function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug)
}
