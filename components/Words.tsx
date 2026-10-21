/** Splits text into word spans so the scroll scrub can brighten them one by one. */
export default function Words({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, k) => (
        <span key={k}><span className="w">{w}</span>{" "}</span>
      ))}
    </span>
  );
}
