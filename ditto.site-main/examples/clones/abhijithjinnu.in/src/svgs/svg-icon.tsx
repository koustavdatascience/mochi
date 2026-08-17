export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-3.5 block overflow-hidden align-middle hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] focus:border-muted-foreground focus:text-muted-foreground focus:outline-clr-7 focus:[outline-style:auto] focus:outline-[5px] focus:[text-decoration-color:var(--muted-foreground)]" data-component="icon" aria-hidden="true" fill="none" height="14" stroke="currentColor" viewBox="0 0 24 24" width="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-cid={cid}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
