export type LogoData = {
  href: string;
  autoPlay?: boolean;
  loop?: boolean;
  videoSrc?: string;
  preload?: string;
  poster?: string;
};
/** A logo. */
export default function Logo({ d, cids }: { d: LogoData; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="w-73 block shrink-0 basis-[292px] gap-4 grid-cols-[1fr_1fr] max-md:w-[103.5px] max-md:basis-[103.5px] max-lg:grid-cols-[1fr]">
      <a data-cid={cids[1]} className="h-full block relative rounded-2xl shrink-0 overflow-hidden aspect-[11/8] bg-surface cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        <video data-cid={cids[2]} className="w-full h-53 block max-w-full rounded-2xl overflow-clip object-cover align-middle max-md:h-[4.6875rem]" autoPlay={d.autoPlay} loop={d.loop} playsInline src={d.videoSrc} preload={d.preload} poster={d.poster} />
      </a>
    </div>
  );
}
