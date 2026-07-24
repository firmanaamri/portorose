export default function Highlight({ children }) {
  return (
    <mark className="bg-highlighter/70 text-ink px-1.5 rounded-[2px] font-display">
      {children}
    </mark>
  );
}