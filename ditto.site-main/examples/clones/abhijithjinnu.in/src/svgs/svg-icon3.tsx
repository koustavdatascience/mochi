export default function Icon3({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-6 block overflow-hidden align-middle focus:outline-clr-7 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-cid={cid}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
