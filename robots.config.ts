export default [
  { UserAgent: '*' },
  { Disallow: '/' },
  { BlankLine: true },
  { Comment: 'Comment here' },

  { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
]
