export function userLink(userId: string): string {
  return `<@${userId}>`;
}

export function channelLink(channelId: string): string {
  return `<#${channelId}>`;
}
