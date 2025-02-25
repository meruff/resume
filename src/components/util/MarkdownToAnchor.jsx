const convertMarkdownToAnchor = (markdown) => {
  const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;

  return markdown.replace(markdownLinkRegex, (match, label, url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });
};

const MarkdownToAnchor = ({ markdown }) => {
  const htmlString = convertMarkdownToAnchor(markdown);
  return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default MarkdownToAnchor;
