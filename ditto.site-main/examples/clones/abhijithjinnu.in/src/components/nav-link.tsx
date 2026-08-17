export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
export default function NavLink({ d, cids }: { d: NavLinkData; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="h-full flex relative py-2.5 px-5 rounded-full justify-center items-center text-color-001 text-[0.9375rem] leading-[1.4375rem] cursor-pointer max-lg:py-2 max-md:px-2.5 max-md:text-[0.8125rem] max-md:leading-[1.1875rem] md:max-lg:px-3 md:max-lg:text-sm md:max-lg:leading-[1.25rem] hover:opacity-80" data-component="link" href={d.href}>
      <span data-cid={cids[1]} className="block relative z-10">
        {d.label}
      </span>
    </a>
  );
}
