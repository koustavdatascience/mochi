import Illustration from "../svgs/svg-illustration";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Logo, { type LogoData } from "../components/logo";
import Icon4 from "../svgs/svg-icon4";
import ListRow, { type ListRowData } from "../components/list-row";
import Icon5 from "../svgs/svg-icon5";
import { Logo_cids, ListRow_cids, ListRow_cids2, ListRow_cids3 } from "../_cids";
const Logo_data: LogoData[] = [
    { href: "https://theresumatch.vercel.app/", autoPlay: true, loop: true, videoSrc: "/assets/cloned/videos/e224622f3da2.mp4" },
    { href: "https://splitsquads.vercel.app/", preload: "none" },
    { href: "https://www.producthunt.com/products/deskie-frames-decor-for-your-screen/launches/deskie-frames-decor-for-your-screen", autoPlay: true, loop: true, videoSrc: "/assets/cloned/videos/b8bed76a39f5.mp4", poster: "/assets/cloned/images/c4d255353939.jpg" }
];
const ListRow_data: ListRowData[] = [
    { text: "Redesigned the company’s website from the ground up based on in-depth UX research, improving usability, performance, and visual consistency." },
    { text: "Integrated with key marketing platforms including HubSpot, PostHog, SEOJuice, and analytics tools to streamline lead generation and user tracking." },
    { text: "Built custom landing pages and interactive tools such as financial calculators to support marketing campaigns and client engagement." },
    { text: "Collaborated closely with the marketing team, gaining hands-on experience in digital marketing strategies, conversion optimization, and content-driven design." }
];
const ListRow_data2: ListRowData[] = [
    { text: "Led the engineering of an innovative SaaS platform with heavy video processing, creating novel API services." },
    { text: "Spearheaded UI/UX development and managed creative workflows for the software." },
    { text: "Leveraged Selenium and Github Actions for automation and implemented AWS (Server, Storage) and video processing libraries." },
    { text: "Ensured high application reliability through rigorous API testing with Postman and cURL." }
];
const ListRow_data3: ListRowData[] = [
    { text: "Engineered over 4 mobile applications to support healthcare initiatives, enhancing testing, analysis, and report generation." },
    { text: "Achieved increase in user engagement and a 25% improvement in health outcomes by integrating Firebase and Google Authentication for seamless sign-in, enhancing user experience and accessibility." },
    { text: "Conducted rigorous API testing with Postman, ensuring optimal application reliability and reducing errors by 15%." }
];
/** Media section. */
export default function MediaSection({ logoData = Logo_data, listRowData = ListRow_data, listRowData2 = ListRow_data2, listRowData3 = ListRow_data3 } = {}) {
  return (
    <main className="w-full max-w-200 flex pb-60 px-6 flex-col flex-1 [animation-name:fadeSlideUp] [animation-duration:0.55s] [animation-timing-function:ease-out] [animation-delay:0.15s] [animation-fill-mode:both] max-lg:pb-40 max-lg:px-4" data-cid="n10">
      <div className="flex mt-8 flex-col items-center text-center" data-cid="n11">
        <div className="w-70 h-37.5 block z-2 -mb-24 [animation-name:fadeIn] [animation-duration:1.5s] [animation-timing-function:ease-out] [animation-delay:0.2s] [animation-fill-mode:both] pointer-events-none" data-cid="n12">
          <Illustration cid={"n13"} />
        </div>
        <div className="block z-1" data-cid="n14">
          <div className="w-30.5 h-30.5 flex relative rounded-[50%] justify-center items-center overflow-hidden bg-primary [animation-name:avatarReveal] [animation-duration:0.7s] [animation-timing-function:cubic-bezier(0.34,_1.56,_0.64,_1)] [animation-delay:0.4s] [animation-fill-mode:both]" style={{ cursor: "url(\"https://www.abhijithjinnu.in/hand.png\"), pointer" }} data-cid="n15">
            <img className="w-full h-30.5 block max-w-full overflow-clip object-cover aspect-[auto_122/122] align-middle text-clr-1" data-cid="n16" data-component="image" alt="Abhijith Jinnu Avatar" height="122" src="/assets/cloned/images/d466ee70d963.png" srcSet="/assets/cloned/images/a2497ca854ef.webp 1x, /assets/cloned/images/d466ee70d963.png 2x" width="122" />
          </div>
        </div>
        <div className="block mt-6 text-lg leading-[1.625rem]" data-cid="n17">
          <span className="inline-block" data-cid="n18">
            <span className="inline-block [filter:blur(0px)]" data-cid="n19">
              p
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n20">
              r
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n21">
              o
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n22">
              d
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n23">
              u
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n24">
              c
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n25">
              t
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n26">
              {" "}
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n27">
              @
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n28">
              {" "}
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n29">
              h
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n30">
              e
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n31">
              a
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n32">
              v
            </span>
            <span className="inline-block [filter:blur(0px)]" data-cid="n33">
              e
            </span>
          </span>
        </div>
        <div className="flex mt-4 flex-col items-center" data-cid="n34">
          <div className="border border-solid border-border flex py-2.5 pr-3 pl-4 rounded-[999px] items-center [font-family:ui-monospace,_'SF_Mono',_Monaco,_'Cascadia_Code',_monospace] text-sm leading-[1.375rem] tracking-[0.29px] bg-clr-2 shadow-[var(--clr-3)_0px_2px_8px_0px]" data-cid="n35">
            <div className="flex items-center gap-2" data-cid="n36">
              <span className="block text-primary" data-cid="n37">
                %
              </span>
              <code className="block" data-cid="n38">
                npx abhijith
              </code>
            </div>
            <button className="h-6.5 flex ml-3 p-1.5 rounded-[999px] justify-center items-center text-muted-foreground cursor-pointer hover:bg-border hover:[background-position:0%_0%] hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)] focus:bg-clr-6 focus:[background-position:0%_0%] focus:border-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-cid="n39" data-component="button" aria-label="Copy npx abhijith" title="Copy" type="button">
              <Icon cid={"n40"} />
            </button>
          </div>
        </div>
        <div className="block max-w-150 mt-8 mx-auto text-muted-foreground text-[0.9375rem] leading-[1.5rem]" data-cid="n41">
          <p className="block" data-cid="n42">
            i make silly mobile apps, i have experience with frontend and backend development for web, app and chrome extensions. i like making things from scratch, whether it be branding to UI UX to coding, i like to do it all :3
          </p>
        </div>
      </div>
      <section className="w-full flex mt-12 flex-col items-center [animation-name:fadeSlideUp] [animation-duration:0.55s] [animation-timing-function:ease-out] [animation-delay:0.1s] [animation-fill-mode:both]" data-cid="n43">
        <div className="flex items-start gap-1" data-cid="n44">
          <h2 className="block text-lg leading-[1.75rem] tracking-[-0.37px]" data-cid="n45" data-component="heading">
            <span className="inline-block" data-cid="n46">
              <span className="inline-block [filter:blur(0px)]" data-cid="n47">
                h
              </span>
              <span className="inline-block [filter:blur(0px)]" data-cid="n48">
                i
              </span>
              <span className="inline-block [filter:blur(0px)]" data-cid="n49">
                g
              </span>
              <span className="inline-block [filter:blur(0px)]" data-cid="n50">
                h
              </span>
              <span className="inline-block [filter:blur(0px)]" data-cid="n51">
                l
              </span>
              <span className="inline-block [filter:blur(0px)]" data-cid="n52">
                i
              </span>
              <span className="inline-block [filter:blur(0px)]" data-cid="n53">
                g
              </span>
              <span className="inline-block [filter:blur(0px)]" data-cid="n54">
                h
              </span>
              <span className="inline-block [filter:blur(0px)]" data-cid="n55">
                t
              </span>
              <span className="inline-block [filter:blur(0px)]" data-cid="n56">
                s
              </span>
              <span className="inline-block [filter:blur(0px)]" data-cid="n57">
                !
              </span>
            </span>
          </h2>
          <Icon2 cid={"n58"} />
        </div>
        <p className="block mt-2 text-muted-foreground text-sm leading-[1.375rem]" data-cid="n59">
          some things i made because i could
        </p>
        <div className="w-full flex mt-8 justify-center items-center gap-5" data-cid="n60">
          <button className="h-10 flex p-2 justify-center items-center text-center cursor-pointer hover:opacity-[0.704969] focus:opacity-[0.995274]" data-cid="n61" data-component="button" aria-label="Previous">
            <Icon3 cid={"n62"} />
          </button>
          <div className="w-full block max-w-150 overflow-hidden" data-cid="n63">
            <div className="w-227 flex gap-4 transform-[none] max-md:w-[342.5px] 2xl:transform-[matrix(1,0,0,1,-308,0)]" data-cid="n64">
              {logoData.map((d, i) => <Logo key={i} d={d} cids={Logo_cids[i]} />)}
            </div>
          </div>
          <button className="h-10 flex p-2 justify-center items-center text-center cursor-pointer hover:opacity-[0.704978] focus:opacity-[0.995242]" data-cid="n74" data-component="button" aria-label="Next">
            <Icon4 cid={"n75"} />
          </button>
        </div>
      </section>
      <section className="w-full flex mt-16 flex-col items-center [animation-name:fadeSlideUp] [animation-duration:0.55s] [animation-timing-function:ease-out] [animation-delay:0.2s] [animation-fill-mode:both]" data-cid="n76">
        <h2 className="block text-lg leading-[1.75rem] tracking-[-0.37px]" data-cid="n77" data-component="heading">
          my experience
        </h2>
        <div className="w-full max-w-150 flex mt-12 flex-col gap-10 max-md:mt-8 max-md:gap-8" data-cid="n78">
          <div className="flex items-start gap-6 max-md:gap-4" data-cid="n79">
            <div className="w-12 h-12 flex rounded-[50%] justify-center items-center shrink-0 overflow-hidden bg-color-001 max-md:w-10 max-md:h-10" data-cid="n80">
              <a className="h-full block cursor-pointer" data-cid="n81" data-component="link" href="https://www.heavecorp.com/" rel="noopener noreferrer" target="_blank">
                <img className="w-full h-12 block max-w-full overflow-clip object-contain align-middle [filter:grayscale(1)] max-md:h-10" data-cid="n82" data-component="image" alt="heave logo" src="/assets/cloned/images/86f28f92b7c4.png" />
              </a>
            </div>
            <div className="flex min-w-0 flex-col flex-1" data-cid="n83">
              <div className="h-[3.1rem] flex justify-between items-start max-md:h-[96.3px] max-md:flex-col max-md:gap-1.5" data-cid="n84">
                <div className="h-[3.1rem] flex flex-col" data-cid="n85">
                  <h3 className="block text-lg leading-[1.625rem]" data-cid="n86" data-component="heading">
                    heave
                  </h3>
                  <p className="block mt-1 text-muted-foreground text-[0.8125rem] leading-[1.1875rem] whitespace-nowrap" data-cid="n87">
                    product engineer
                  </p>
                </div>
                <div className="w-[13.0625rem] h-[40.7px] block mt-0.5 shrink-0 text-muted-foreground text-sm leading-[1.25rem] text-right whitespace-nowrap text-nowrap max-md:w-[17.9375rem] max-md:text-left max-md:mt-0 max-md:[white-space:inherit] max-md:[text-wrap:initial]" data-cid="n88">
                  <div className="block" data-cid="n89">
                    march 2026 - present
                  </div>
                  <div className="block mt-0.5 text-xs leading-[1.125rem]" data-cid="n90">
                    montreal, quebec, canada · remote
                  </div>
                </div>
              </div>
              <div className="h-[1.5375rem] block overflow-hidden" data-cid="n91">
                <div className="inline-flex items-center gap-1.5 text-muted-foreground text-[0.8125rem] leading-[1.1875rem] cursor-pointer hover:border-clr-4 hover:text-clr-4 hover:outline-clr-4 hover:[text-decoration-color:var(--clr-4)] focus:border-clr-8 focus:text-clr-8 focus:outline-clr-8 focus:[text-decoration-color:var(--clr-8)]" data-cid="n92">
                  <span className="block text-primary text-[0.5rem] leading-3" data-cid="n93">
                    ►
                  </span>
                  {" my work"}
                </div>
                <div className="h-0 grid grid-rows-[0px] grid-cols-[minmax(0,_1fr)]" data-cid="n94">
                  <div className="h-0 block opacity-0 overflow-hidden text-muted-foreground text-sm leading-[1.375rem]" data-cid="n95">
                    <ul className="block pl-5 [list-style-type:none] list-outside" data-cid="n96">
                      <li className="list-item mb-1.5" data-cid="n97">
                        building something beautiful :)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-6 max-md:gap-4" data-cid="n98">
            <div className="w-12 h-12 flex rounded-[50%] justify-center items-center shrink-0 overflow-hidden bg-color-001 max-md:w-10 max-md:h-10" data-cid="n99">
              <a className="h-full block cursor-pointer" data-cid="n100" data-component="link" href="https://www.schapiracpas.com/" rel="noopener noreferrer" target="_blank">
                <img className="w-full h-12 block max-w-full overflow-clip object-contain align-middle [filter:grayscale(1)] max-md:h-10" data-cid="n101" data-component="image" alt="schapira logo" src="/assets/cloned/images/ddf77806eaae.png" />
              </a>
            </div>
            <div className="flex min-w-0 flex-col flex-1" data-cid="n102">
              <div className="h-[3.1rem] flex justify-between items-start max-md:h-[96.3px] max-md:flex-col max-md:gap-1.5" data-cid="n103">
                <div className="h-[3.1rem] flex flex-col" data-cid="n104">
                  <h3 className="block text-lg leading-[1.625rem]" data-cid="n105" data-component="heading">
                    schapira
                  </h3>
                  <p className="block mt-1 text-muted-foreground text-[0.8125rem] leading-[1.1875rem] whitespace-nowrap" data-cid="n106">
                    full stack developer
                  </p>
                </div>
                <div className="w-42 h-[40.7px] block mt-0.5 shrink-0 text-muted-foreground text-sm leading-[1.25rem] text-right whitespace-nowrap text-nowrap max-md:w-[17.9375rem] max-md:text-left max-md:mt-0 max-md:[white-space:inherit] max-md:[text-wrap:initial]" data-cid="n107">
                  <div className="block" data-cid="n108">
                    jun 2025 - feb 2026
                  </div>
                  <div className="block mt-0.5 text-xs leading-[1.125rem]" data-cid="n109">
                    brooklyn, new york · remote
                  </div>
                </div>
              </div>
              <div className="h-[1.5375rem] block overflow-hidden" data-cid="n110">
                <div className="inline-flex items-center gap-1.5 text-muted-foreground text-[0.8125rem] leading-[1.1875rem] cursor-pointer hover:border-clr-5 hover:text-clr-5 hover:outline-clr-5 hover:[text-decoration-color:var(--clr-5)] focus:border-clr-9 focus:text-clr-9 focus:outline-clr-9 focus:[text-decoration-color:var(--clr-9)]" data-cid="n111">
                  <span className="block text-primary text-[0.5rem] leading-3" data-cid="n112">
                    ►
                  </span>
                  {" my work"}
                </div>
                <div className="h-0 grid grid-rows-[0px] grid-cols-[minmax(0,_1fr)]" data-cid="n113">
                  <div className="h-0 block opacity-0 overflow-hidden text-muted-foreground text-sm leading-[1.375rem]" data-cid="n114">
                    <ul className="block pl-5 [list-style-type:none] list-outside" data-cid="n115">
                      {listRowData.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids[i]} />)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-6 max-md:gap-4" data-cid="n120">
            <div className="w-12 h-12 flex p-1 rounded-[50%] justify-center items-center shrink-0 overflow-hidden bg-color-001 max-md:w-10 max-md:h-10" data-cid="n121">
              <a className="h-full block cursor-pointer" data-cid="n122" data-component="link" href="https://persistventures.com/" rel="noopener noreferrer" target="_blank">
                <img className="w-10 h-10 block max-w-full overflow-clip object-contain align-middle [filter:grayscale(1)] transform-[matrix(0.7,0,0,0.7,0,0)] origin-[20px_20px] mx-auto max-md:w-8 max-md:h-8 max-md:origin-[16px_16px]" data-cid="n123" data-component="image" alt="persist ventures logo" src="/assets/cloned/images/67a075a3f7b2.png" />
              </a>
            </div>
            <div className="flex min-w-0 flex-col flex-1" data-cid="n124">
              <div className="h-[3.1rem] flex justify-between items-start max-md:h-[96.3px] max-md:flex-col max-md:gap-1.5" data-cid="n125">
                <div className="h-[3.1rem] flex flex-col" data-cid="n126">
                  <h3 className="block text-lg leading-[1.625rem] whitespace-nowrap" data-cid="n127" data-component="heading">
                    persist ventures
                  </h3>
                  <p className="block mt-1 text-muted-foreground text-[0.8125rem] leading-[1.1875rem]" data-cid="n128">
                    ai developer
                  </p>
                </div>
                <div className="w-46 h-[40.7px] block mt-0.5 shrink-0 text-muted-foreground text-sm leading-[1.25rem] text-right whitespace-nowrap text-nowrap max-md:w-[17.9375rem] max-md:text-left max-md:mt-0 max-md:[white-space:inherit] max-md:[text-wrap:initial]" data-cid="n129">
                  <div className="block" data-cid="n130">
                    dec 2024 - april 25
                  </div>
                  <div className="block mt-0.5 text-xs leading-[1.125rem]" data-cid="n131">
                    los angeles, california · remote
                  </div>
                </div>
              </div>
              <div className="h-[1.5375rem] block overflow-hidden" data-cid="n132">
                <div className="inline-flex items-center gap-1.5 text-muted-foreground text-[0.8125rem] leading-[1.1875rem] cursor-pointer hover:border-clr-4 hover:text-clr-4 hover:outline-clr-4 hover:[text-decoration-color:var(--clr-4)] focus:border-clr-9 focus:text-clr-9 focus:outline-clr-9 focus:[text-decoration-color:var(--clr-9)]" data-cid="n133">
                  <span className="block text-primary text-[0.5rem] leading-3" data-cid="n134">
                    ►
                  </span>
                  {" my work"}
                </div>
                <div className="h-0 grid grid-rows-[0px] grid-cols-[minmax(0,_1fr)]" data-cid="n135">
                  <div className="h-0 block opacity-0 overflow-hidden text-muted-foreground text-sm leading-[1.375rem]" data-cid="n136">
                    <ul className="block pl-5 [list-style-type:none] list-outside" data-cid="n137">
                      {listRowData2.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids2[i]} />)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-6 max-md:gap-4" data-cid="n142">
            <div className="w-12 h-12 flex p-1 rounded-[50%] justify-center items-center shrink-0 overflow-hidden bg-color-001 max-md:w-10 max-md:h-10" data-cid="n143">
              <a className="h-full block cursor-pointer" data-cid="n144" data-component="link" href="https://www.nanobioslab.com/" rel="noopener noreferrer" target="_blank">
                <img className="w-10 h-10 block max-w-full overflow-clip object-contain align-middle [filter:grayscale(1)] transform-[matrix(0.7,0,0,0.7,0,0)] origin-[20px_20px] mx-auto max-md:w-8 max-md:h-8 max-md:origin-[16px_16px]" data-cid="n145" data-component="image" alt="iit bombay logo" src="/assets/cloned/images/3952410467ff.png" />
              </a>
            </div>
            <div className="flex min-w-0 flex-col flex-1" data-cid="n146">
              <div className="h-[3.1rem] flex justify-between items-start max-md:h-[96.3px] max-md:flex-col max-md:gap-1.5" data-cid="n147">
                <div className="h-[3.1rem] flex flex-col" data-cid="n148">
                  <h3 className="block text-lg leading-[1.625rem]" data-cid="n149" data-component="heading">
                    iit bombay
                  </h3>
                  <p className="block mt-1 text-muted-foreground text-[0.8125rem] leading-[1.1875rem] whitespace-nowrap" data-cid="n150">
                    app developer intern
                  </p>
                </div>
                <div className="w-[8.6875rem] h-[40.7px] block mt-0.5 shrink-0 text-muted-foreground text-sm leading-[1.25rem] text-right whitespace-nowrap text-nowrap max-md:w-[17.9375rem] max-md:text-left max-md:mt-0 max-md:[white-space:inherit] max-md:[text-wrap:initial]" data-cid="n151">
                  <div className="block" data-cid="n152">
                    Jun 2024 – Dec 2024
                  </div>
                  <div className="block mt-0.5 text-xs leading-[1.125rem]" data-cid="n153">
                    {"powai, mumbai "}
                  </div>
                </div>
              </div>
              <div className="h-[1.5375rem] block overflow-hidden" data-cid="n154">
                <div className="inline-flex items-center gap-1.5 text-muted-foreground text-[0.8125rem] leading-[1.1875rem] cursor-pointer hover:border-clr-5 hover:text-clr-5 hover:outline-clr-5 hover:[text-decoration-color:var(--clr-5)] focus:border-clr-9 focus:text-clr-9 focus:outline-clr-9 focus:[text-decoration-color:var(--clr-9)]" data-cid="n155">
                  <span className="block text-primary text-[0.5rem] leading-3" data-cid="n156">
                    ►
                  </span>
                  {" my work"}
                </div>
                <div className="h-0 grid grid-rows-[0px] grid-cols-[minmax(0,_1fr)]" data-cid="n157">
                  <div className="h-0 block opacity-0 overflow-hidden text-muted-foreground text-sm leading-[1.375rem]" data-cid="n158">
                    <ul className="block pl-5 [list-style-type:none] list-outside" data-cid="n159">
                      {listRowData3.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids3[i]} />)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex mt-16 flex-col items-center" data-cid="n163">
        <h2 className="block text-lg leading-[1.75rem] tracking-[-0.37px]" data-cid="n164" data-component="heading">
          skill stack
        </h2>
        <div className="w-full max-w-150 flex mt-12 flex-col gap-10" data-cid="n165">
          <div className="flex flex-col gap-4" data-cid="n166">
            <h3 className="flex items-center gap-2" data-cid="n167" data-component="heading">
              <Icon5 cid={"n168"} />
              development
            </h3>
            <div className="flex flex-wrap gap-3" data-cid="n169">
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n170">
                Python
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n171">
                C
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n172">
                C++
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n173">
                JavaScript
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n174">
                Typescript
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n175">
                cURL
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n176">
                Flutter
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n177">
                Swift
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n178">
                React
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n179">
                NextJs
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n180">
                Firebase
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n181">
                React Native
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4" data-cid="n182">
            <h3 className="flex items-center gap-2" data-cid="n183" data-component="heading">
              <Icon5 cid={"n184"} />
              creatives
            </h3>
            <div className="flex flex-wrap gap-3" data-cid="n185">
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n186">
                figma
              </div>
              <div className="h-7.5 flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n187">
                davinci resolve
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n188">
                canva
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n189">
                framer
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n190">
                photoshop
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4" data-cid="n191">
            <h3 className="flex items-center gap-2" data-cid="n192" data-component="heading">
              <Icon5 cid={"n193"} />
              {"ai & devops"}
            </h3>
            <div className="flex flex-wrap gap-3" data-cid="n194">
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n195">
                git/github
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n196">
                AWS
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n197">
                cursor ai
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n198">
                claude code
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n199">
                antigravity
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n200">
                hugging face
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n201">
                langchain
              </div>
              <div className="h-7.5 flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n202">
                prompt engineering
              </div>
              <div className="flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n203">
                selenium
              </div>
              <div className="h-7.5 flex py-1.5 px-3.5 rounded-[20px] justify-center items-center text-background text-xs font-medium leading-4.5 bg-foreground" data-cid="n204">
                github actions
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex mt-16 flex-col items-center [animation-name:fadeSlideUp] [animation-duration:0.55s] [animation-timing-function:ease-out] [animation-delay:0.2s] [animation-fill-mode:both]" data-cid="n205">
        <h2 className="block text-lg leading-[1.75rem] tracking-[-0.37px]" data-cid="n206" data-component="heading">
          my education
        </h2>
        <div className="w-full max-w-150 flex mt-12 flex-col gap-10 max-md:mt-8 max-md:gap-8" data-cid="n207">
          <div className="flex items-start gap-6 max-md:gap-4" data-cid="n208">
            <div className="w-12 h-12 flex rounded-[50%] justify-center items-center shrink-0 overflow-hidden bg-color-001 max-md:w-10 max-md:h-10" data-cid="n209">
              <a className="w-full h-full block cursor-pointer" data-cid="n210" data-component="link" href="https://www.pce.ac.in/" rel="noopener noreferrer" target="_blank">
                <img className="w-full h-12 block max-w-full overflow-clip object-contain align-middle [filter:grayscale(1)] max-md:h-10" data-cid="n211" data-component="image" alt="university of mumbai logo" src="/assets/cloned/images/9092f5a06740.png" />
              </a>
            </div>
            <div className="flex min-w-0 flex-col flex-1" data-cid="n212">
              <div className="h-[4.425rem] flex justify-between items-start max-md:h-[6.075rem] max-md:flex-col max-md:gap-1.5" data-cid="n213">
                <div className="h-[4.425rem] flex flex-col" data-cid="n214">
                  <h3 className="block text-lg leading-[1.625rem] whitespace-nowrap" data-cid="n215" data-component="heading">
                    university of mumbai
                  </h3>
                  <p className="block mt-1 text-muted-foreground text-[0.8125rem] leading-[1.1875rem]" data-cid="n216">
                    bachelors in engineering
                  </p>
                  <p className="block mt-0.5 text-muted-foreground text-[0.8125rem] leading-[1.1875rem]" data-cid="n217">
                    CGPA: 8.39
                  </p>
                </div>
                <div className="w-[26%] block mt-0.5 shrink-0 text-muted-foreground text-sm leading-[1.25rem] text-right whitespace-nowrap text-nowrap max-md:w-full max-md:text-left max-md:mt-0 max-md:[white-space:inherit] max-md:[text-wrap:initial]" data-cid="n218">
                  dec 2021 - may 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
