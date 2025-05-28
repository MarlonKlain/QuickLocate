/**
 * Formats a toast message by splitting it into a title and content.
 *
 * @param {string} messageToFormat - The message string to format, expected to contain a period ('.') separating the title and content.
 * @returns {{ title: string, content: string }} An object containing the title and content extracted from the message.
 */
export function formatToastMessage(messageToFormat) {
  const message = messageToFormat.split(".");
  const messageTitle = message[0];
  const messageContent = message[1];
  return { title: `${messageTitle}`, content: `${messageContent}` };
}
