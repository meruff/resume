export default function Card({ children, image, alt, link }) {
  return (
    <div className="relative bg-gradient-to-br from-gray-200/25 via-gray-200/25 to-custom-light/10 dark:from-gray-900 dark:via-custom-dark/10 rounded-lg shadow-lg">
      {image &&
        (link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={alt}
              className="w-full h-52 object-cover object-top rounded-t-lg"
            />
          </a>
        ) : (
          <img
            src={image}
            alt={alt}
            className="w-full h-52 object-cover object-top rounded-t-lg"
          />
        ))}
      <div className="p-6">{children}</div>
    </div>
  );
}
