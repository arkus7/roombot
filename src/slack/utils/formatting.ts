import moment from 'moment';

export const mentions = {
  here: '<!here|here>',
  channel: '<!channel|channel>',
  everyone: '<!everyone|everyone>'
} as const;

export const italic = (text: string): string => `_${text}_`;
export const bold = (text: string): string => `*${text}*`;
export const strike = (text: string): string => `~${text}~`;

export const blockQuote = (text: string): string => text.split('\n')
  .map(line => `>${line}`)
  .join('\n');

export const inlineCode = (text: string): string => `\`${text}\``;
export const codeBlock = (text: string): string => `\`\`\`${text}\`\`\``;

export const unorderedList = (items: string[]): string => items.map(item => `- ${item}`).join('\n');
export const orderedList = (items: string[]): string => items.map((item, index) => `${index + 1}. ${item}`).join('\n');

export const link = (url: string, displayedText?: string): string => `<${url}|${displayedText ? displayedText : url}>`;
export const channelLink = (channelId: string): string => `<#${channelId}>`;
export const userLink = (userId: string): string => `<@${userId}>`;
export const groupLink = (subteamId: string): string => `<!subteam^${subteamId}>`;

export const date = (date: Date, tokenString: string, options: { link?: string, fallbackText?: string } = {}): string => {
  const momentDate = moment(date);
  const fallback = options.fallbackText || momentDate.format('E MMM dd yyyy HH:mm:ss [UTC]');
  return `<!date^${moment(date).unix()}^${tokenString}${options.link ? `^${options.link}` : ''}|${fallback}>`;
};
