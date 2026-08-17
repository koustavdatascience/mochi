/** Top navigation bar. */
export default function Navbar() {
  return (
    <header className="w-full h-31 flex z-10 py-12 justify-center [animation-name:fadeSlideDown] [animation-duration:0.6s] [animation-timing-function:ease-out] [animation-delay:0.1s] [animation-fill-mode:both]" data-cid="n2">
      <nav className="flex items-center gap-10 max-md:gap-6" data-cid="n3" data-component="nav">
        <a className="block text-[0.9375rem] font-medium leading-[1.4375rem] [text-shadow:var(--clr-0)_0px_0px_8px] cursor-pointer" data-cid="n4" data-component="link" href="/">
          home
        </a>
        <a className="block text-[0.9375rem] leading-[1.4375rem] cursor-pointer hover:opacity-[0.70496] focus:opacity-[0.995274]" data-cid="n5" data-component="link" href="/about">
          about
        </a>
        <div className="flex justify-center items-center cursor-pointer" data-cid="n6">
          <img className="w-full h-7 block max-w-full overflow-clip object-contain aspect-[auto_28/28] align-middle text-clr-1" data-cid="n7" data-component="image" alt="Logo" height="28" src="/assets/cloned/images/27fadc4f1372.jpg" srcSet="/assets/cloned/images/26faa3f9c09d.webp 1x, /assets/cloned/images/27fadc4f1372.jpg 2x" width="28" />
        </div>
        <a className="block text-[0.9375rem] leading-[1.4375rem] cursor-pointer hover:opacity-[0.704946] focus:opacity-[0.995244]" data-cid="n8" data-component="link" href="https://cdn.sanity.io/files/tucohkxu/production/4e841d1e8d6310de199558f96ac0a3f881a4db88.pdf" rel="noopener noreferrer" target="_blank">
          resume
        </a>
        <a className="block text-[0.9375rem] leading-[1.4375rem] cursor-pointer hover:opacity-[0.704951] focus:opacity-[0.995242]" data-cid="n9" data-component="link" href="/contact">
          contact
        </a>
      </nav>
    </header>
  );
}
