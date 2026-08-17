export default function Illustration({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-37.5 block align-middle pointer-events-none max-md:max-w-full" data-component="image" height="150" viewBox="0 0 280 150" width="280" fill="currentColor" data-cid={cid}>
      <path id="curve" d="M 40,140 A 100,100 0 0,1 240,140" fill="transparent" />
      <text fill="var(--text-primary)" className="instrument-serif" fontSize="44" textAnchor="middle" letterSpacing="-0.07em">
        <textPath href="#curve" startOffset="50%">
          {"Abhijith Jinnu"}
        </textPath>
      </text>
    </svg>
  );
}
