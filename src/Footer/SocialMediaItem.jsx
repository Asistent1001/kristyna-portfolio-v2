export default function SocialMediaItem({ link, media, className }) {
  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
    >
      {media}
    </a>
  );
}
