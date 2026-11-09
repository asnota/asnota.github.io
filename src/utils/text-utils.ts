// Typographic quotes for the straight quotes in Markdown frontmatter.
export const curlyQuotes = (text: string) => text.replace(/"([^"]*)"/g, "“$1”");
