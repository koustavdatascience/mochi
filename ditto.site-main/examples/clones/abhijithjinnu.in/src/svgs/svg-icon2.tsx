export default function Icon2({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-4 block -mt-0.5 overflow-hidden align-middle" data-component="icon" fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" data-cid={cid}>
      <path d="M12 2C12 2 12 10.5 21.5 12C12 13.5 12 22 12 22C12 22 12 13.5 2.5 12C12 10.5 12 2 12 2Z" fill="var(--capsule-bg)" />
    </svg>
  );
}
