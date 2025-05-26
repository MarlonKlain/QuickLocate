export function formatToastMessage(messageToFormat) {
  const message = messageToFormat.split(".");
  const messageTitle = message[0];
  const messageContent = message[1];
  return { title: `${messageTitle}`, content: `${messageContent}` };
}
