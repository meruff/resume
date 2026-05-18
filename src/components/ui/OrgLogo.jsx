export default function OrgLogo({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="inline-block size-6 shrink-0 rounded object-contain"
    />
  );
}
