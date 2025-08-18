exports.id=133,exports.ids=[133],exports.modules={5303:()=>{},5513:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(326),o=r(7577);let s=({faqs:e,title:t="FAQs"})=>{let[r,s]=(0,o.useState)(e.map(()=>!0)),n=Date.now(),l=e=>{s(t=>t.map((t,r)=>r===e?!t:t))};return(0,a.jsxs)("div",{className:"rounded-2xl p-4 sm:p-8 shadow-sm mb-12 bg-[var(--systemflow-lite--neutral--10)]",children:[a.jsx("h2",{className:"section-h2 font-medium text-center mb-16",children:t}),a.jsx("div",{className:"max-w-3xl mx-auto space-y-6",children:e.map((e,t)=>(0,a.jsxs)("div",{className:`border-b border-gray-200 pb-6 transition-all ${0===t?"mt-8":""}`,children:[(0,a.jsxs)("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>l(t),tabIndex:0,role:"button","aria-expanded":r[t],children:[a.jsx("h3",{className:"faq-question text-lg font-semibold",children:e.question}),a.jsx("button",{"aria-label":r[t]?"Collapse":"Expand",className:"ml-4 focus:outline-none",tabIndex:-1,children:a.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${r[t]?"rotate-180":"rotate-0"}`,fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})})]}),r[t]&&a.jsx("p",{className:"faq-answer text-base",children:e.answer})]},t))})]},n)}},5295:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(326);r(7577);let o=()=>a.jsx("footer",{className:"w-full bg-transparent pt-0 pb-8 flex flex-col items-center",style:{backgroundImage:"radial-gradient(circle, #e0e0e0 1px, transparent 1px)",backgroundSize:"20px 20px",backgroundPosition:"0 0"},children:(0,a.jsxs)("div",{className:"w-full max-w-7xl mx-auto bg-white rounded-[50px] shadow-none border border-gray-100 px-6 md:px-16 py-12 flex flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row justify-between gap-10",children:[(0,a.jsxs)("div",{className:"mb-10 md:mb-0 max-w-md",children:[a.jsx("a",{href:"https://joinotto.com/",className:"inline-block mb-6",target:"_blank",rel:"noopener noreferrer",children:a.jsx("img",{src:"https://assets.joinotto.com/joinotto-logo.webp",alt:"Otto Logo",className:"h-8"})}),a.jsx("p",{className:"text-gray-700 mt-5 mb-6 leading-relaxed text-sm",children:"Start your journey with Otto AI and see how simple bookkeeping can be. Access detailed financial statements and gain the clarity your small business deserves."}),(0,a.jsxs)("div",{className:"flex items-center space-x-4 mb-6",children:[a.jsx("a",{href:"https://www.instagram.com/joinottodotcom/",className:"text-gray-700 hover:text-blue-600 transition-colors","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:a.jsx("img",{alt:"Instagram",loading:"lazy",width:20,height:20,decoding:"async",style:{color:"transparent",display:"block"},src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"})}),a.jsx("a",{href:"https://x.com/joinottodotcom",className:"text-gray-700 hover:text-blue-600 transition-colors","aria-label":"X (Twitter)",target:"_blank",rel:"noopener noreferrer",children:a.jsx("img",{alt:"Twitter",loading:"lazy",width:20,height:20,decoding:"async",style:{color:"transparent",display:"block"},src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"})}),a.jsx("a",{href:"https://www.linkedin.com/company/joinotto/",className:"text-gray-700 hover:text-blue-600 transition-colors","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:a.jsx("img",{alt:"LinkedIn",loading:"lazy",width:20,height:20,decoding:"async",style:{color:"transparent",display:"block"},src:"https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/66fdb9328c877336c8304e05_linkedin.webp"})}),a.jsx("a",{href:"https://www.tiktok.com/@joinottodotcom",className:"text-gray-700 hover:text-blue-600 transition-colors","aria-label":"TikTok",target:"_blank",rel:"noopener noreferrer",children:a.jsx("img",{alt:"TikTok",loading:"lazy",width:20,height:20,decoding:"async",style:{color:"transparent",display:"block"},src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"})})]}),(0,a.jsxs)("p",{className:"text-gray-700 text-sm",children:["Need Help? ",a.jsx("a",{href:"mailto:hello@joinotto.com",className:"text-blue-600 hover:underline",children:"hello@joinotto.com"})]})]}),(0,a.jsxs)("div",{className:"flex flex-wrap md:flex-nowrap gap-12 md:gap-24",children:[(0,a.jsxs)("div",{className:"w-full md:w-auto",children:[a.jsx("h3",{className:"text-gray-900 font-semibold mb-5 text-sm",children:"Tools"}),(0,a.jsxs)("ul",{className:"space-y-3",children:[a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/tools/invoice-generator",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Invoice Generator"})}),a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/calculator/paycheck",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Paycheck Calculator"})}),a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/calculator/sales-tax",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Sales Tax Calculator"})}),a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/calculator/401k-calculator",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"401K Calculator"})}),a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/calculator/salary-to-hourly",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Salary to Hourly Calculator"})}),a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/calculator/s-corp-tax-calculator",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"S-Corp Tax Calculator"})}),a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/calculator/1099-tax-calculator",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"1099 Tax Calculator"})})]})]}),(0,a.jsxs)("div",{className:"flex flex-wrap md:flex-nowrap gap-12 md:gap-24",children:[(0,a.jsxs)("div",{className:"w-full md:w-auto",children:[a.jsx("h3",{className:"text-gray-900 font-semibold mb-5 text-sm",children:"Product"}),(0,a.jsxs)("ul",{className:"space-y-3",children:[a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/invoicing",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Invoicing"})}),a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/bookkeeping",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Bookkeeping"})}),a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/accounting",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Accounting"})})]})]}),(0,a.jsxs)("div",{className:"w-full md:w-auto",children:[a.jsx("h3",{className:"text-gray-900 font-semibold mb-5 text-sm",children:"Resources"}),(0,a.jsxs)("ul",{className:"space-y-3",children:[a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/blog",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Blog"})}),a.jsx("li",{children:a.jsx("a",{href:"https://referral.joinotto.com/",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Referral"})}),a.jsx("li",{children:a.jsx("a",{href:"https://otto-ai.feedbear.com/expired",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Request New Features"})}),a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/terms",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Terms & Conditions"})}),a.jsx("li",{children:a.jsx("a",{href:"https://joinotto.com/privacy-policy",className:"text-gray-700 hover:text-blue-600 transition-colors text-sm",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})})]})]})]})]})]}),a.jsx("div",{className:"mt-16 pt-8 border-t border-gray-100 text-center",children:(0,a.jsxs)("p",{className:"text-gray-500 text-sm",children:["Copyright \xa9 ",new Date().getFullYear(),", Otto AI. All rights reserved."]})})]})})},5777:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(326),o=r(7577);let s=()=>{let[e,t]=(0,o.useState)(!1),[r,s]=(0,o.useState)(!1),[n,l]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=()=>l(window.scrollY>20);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),a.jsx("div",{className:"fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-300",children:(0,a.jsxs)("div",{className:`
          flex items-center justify-between pointer-events-auto transition-all duration-300
          max-w-[1450px] mx-auto px-6 sm:px-8
          ${n?"rounded-[50px] shadow-[0_4px_10px_#00000021] bg-white mt-4 py-[13px]":"rounded-none shadow-none bg-transparent mt-0 py-6"}
        `,children:[(0,a.jsxs)("div",{className:"flex items-center w-full lg:w-auto justify-between",children:[a.jsx("a",{href:"https://joinotto.com",className:"flex items-center",children:a.jsx("img",{src:"https://assets.joinotto.com/joinotto-logo.webp",alt:"Otto AI",className:"h-5"})}),a.jsx("button",{className:"lg:hidden ml-2 focus:outline-none",onClick:()=>s(!r),"aria-label":"Toggle menu",children:(0,a.jsxs)("svg",{width:"32",height:"32",fill:"none",viewBox:"0 0 32 32",children:[a.jsx("rect",{width:"22",height:"2.5",x:"5",y:"9",rx:"1.2",fill:"#0E1327"}),a.jsx("rect",{width:"22",height:"2.5",x:"5",y:"15",rx:"1.2",fill:"#0E1327"}),a.jsx("rect",{width:"22",height:"2.5",x:"5",y:"21",rx:"1.2",fill:"#0E1327"})]})})]}),(0,a.jsxs)("div",{className:"hidden lg:flex items-center gap-4",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("button",{onClick:()=>t(!e),onBlur:()=>setTimeout(()=>t(!1),150),className:"text-black font-medium text-[14px] hover:text-[#1A2EAA] transition-colors flex items-center gap-1",children:["Product ",a.jsx("span",{className:"transform transition-transform",children:"▾"})]}),e&&(0,a.jsxs)("div",{className:"absolute left-0 mt-2 bg-white border rounded-lg shadow-lg w-44 z-50",children:[a.jsx("a",{href:"https://joinotto.com/bookkeeping",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Bookkeeping"}),a.jsx("a",{href:"https://joinotto.com/invoicing",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Invoicing"})]})]}),a.jsx("a",{href:"https://app.joinotto.com/auth/signin",target:"_blank",rel:"noopener noreferrer",className:"border border-[#3367D6] rounded-[12px] text-[14px] font-medium text-[#3367D6] bg-transparent transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 hover:text-[#2B55B0] hover:border-[#2B55B0]",children:"Login"}),(0,a.jsxs)("a",{href:"https://app.joinotto.com/auth/signup?auth=google",target:"_blank",rel:"noopener noreferrer",className:"border border-[#3367D6] rounded-[12px] text-[14px] font-medium text-[#3367D6] bg-transparent transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 hover:text-[#2B55B0] hover:border-[#2B55B0]",children:[a.jsx("img",{src:"https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/682db7bd1d0749a44744a155_google%20(1).png",alt:"Google",className:"w-4 h-4"}),"Join with Google"]})]}),r&&(0,a.jsxs)("div",{className:"absolute top-[70px] left-0 right-0 bg-white z-40 rounded-b-3xl shadow-xl flex flex-col items-start px-6 py-6 gap-4 lg:hidden animate-fade-in pointer-events-auto",children:[(0,a.jsxs)("button",{onClick:()=>t(!e),className:"text-black font-medium text-[15px] mb-2 flex items-center gap-1",children:["Product ",a.jsx("span",{className:"transform transition-transform",children:"▾"})]}),e&&(0,a.jsxs)("div",{className:"mb-2",children:[a.jsx("a",{href:"https://joinotto.com/bookkeeping",className:"block px-1 py-1 text-sm text-gray-700 hover:underline",children:"Bookkeeping"}),a.jsx("a",{href:"https://joinotto.com/accounting",className:"block px-1 py-1 text-sm text-gray-700 hover:underline",children:"Accounting"})]}),a.jsx("a",{href:"https://app.joinotto.com/auth/signin",target:"_blank",rel:"noopener noreferrer",className:"border border-[#3367D6] rounded-[12px] text-[14px] font-medium text-[#3367D6] bg-transparent transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 w-full justify-center",children:"Login"}),(0,a.jsxs)("a",{href:"https://app.joinotto.com/auth/signup?auth=google",target:"_blank",rel:"noopener noreferrer",className:"border border-[#3367D6] rounded-[12px] text-[14px] font-medium text-[#3367D6] bg-transparent transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 w-full justify-center",children:[a.jsx("img",{src:"https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/682db7bd1d0749a44744a155_google%20(1).png",alt:"Google",className:"w-4 h-4"}),"Join with Google"]})]})]})})}},4320:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(326),o=r(7577);let s=[{company:"Owner of Photography Business",review:"“Otto's real-time insights have been incredible for cash flow management and decision-making. The platform is user-friendly, and the team is extremely on top of everything.”",img:"https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/67cab19ee6280a58dfe72b75_preston-tietjen.png",name:"Preston Tietjen",role:"Creative Producer & Founder"},{company:"Owner of Design Company",review:"“I’m excited to help Otto reach more creators because every creative deserves access to the tools and support they need to grow their businesses and focus on what they love—creating.”",img:"https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/67cab0c0fc7949623b7eef7d_Add%20a%20heading.png",name:"Sophia Yeshi",role:"Illustrator & Designer"},{company:"Owner of Production Company",review:'"Keeping my finances stable is crucial, and Otto helps me earn more and pay less in taxes. With its focus on creatives, I keep more of what I earn, fueling my business and creativity."',img:"https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/67cab19e9b89328cfdf3e3f7_kai-byrd.png",name:"Kai Byrd",role:"Photographer, Creative Director"}];function n(){let[e,t]=(0,o.useState)(2);return(0,a.jsxs)("section",{className:"ot-reviews-outer-section",children:[a.jsx("style",{children:`
          .ot-reviews-outer-section {
            width: 100%;
            max-width: 1800px;
            margin: 0 auto;
            padding: 0 0 60px 0;
          }
          .ot-reviews-slider-area {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ot-arrow-btn {
            background: #c8dafe33;
            border: 1px solid #c3e0ff;
            border-radius: 50%;
            width: 50px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: 900;
            color: #233ed9;
            cursor: pointer;
            margin: 0 24px;
            transition: box-shadow 0.14s;
            box-shadow: 0 4px 18px 0 #e8f3ff42;
          }
          .ot-reviews-outer-card {
            background: #f4faff;        /* Blue shade */
            border-radius: 48px;
            padding: 44px 17px 4px 17px;
            min-width: 700px;
            max-width: 900px;
            min-height: 390px;
            box-shadow: 0 8px 38px 0 #e5e7eb26;
            display: flex;
            flex-direction: column;
          }
          .ot-reviews-company-header {
            font-size: 1.28rem;
            font-weight: 00;
            color: #3a4962;
            padding: 0 0 0 18px;
          }
          .ot-reviews-inner-card {
            background: #fff;          /* Inner white */
            border-radius: 28px;
            box-shadow: 0 2px 16px 0 #e6ecff16;
            margin-top: 18px;
            padding: 44px 44px 32px 44px;
            display: flex;
            flex-direction: column;
            min-height: 260px;
          }
          .ot-review-text {
            line-height: 32px;
            font-weight: 500;
            color: #36465e;
            margin-bottom: 46px;
            font-size: 24px;
          }
          .ot-review-author-row {
            display: flex;
            align-items: center;
            margin-top: 10px;
          }
          .ot-review-avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 18px;
          }
          .ot-review-author-info {
            display: flex;
            flex-direction: column;
          }
          .ot-review-author-name {
            font-weight: 700;
            font-size: 1.18rem;
            color: #212d3b;
          }
          .ot-review-author-role {
            color: #7c8da7;
            font-size: 1.08rem;
            margin-top: -2px;
          }
          @media (max-width: 1200px) {
            .ot-reviews-outer-card { min-width: 700px; max-width: 98vw; }
          }
          @media (max-width: 900px) {
            .ot-reviews-outer-card { min-width: 0; max-width: 100vw; padding: 18px; }
            .ot-reviews-inner-card { padding: 24px 12px; }
          }
            .slide-transition {
  opacity: 0;
  transform: translateX(30px);
  animation: slideIn 0.6s ease-in-out forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
        `}),(0,a.jsxs)("div",{className:"ot-reviews-slider-area",children:[a.jsx("button",{className:"ot-arrow-btn",onClick:()=>t((e+s.length-1)%s.length),"aria-label":"Previous review",children:"←"}),(0,a.jsxs)("div",{className:"ot-reviews-outer-card slide-transition",children:[a.jsx("div",{className:"ot-reviews-company-header",children:s[e].company}),(0,a.jsxs)("div",{className:"ot-reviews-inner-card",children:[a.jsx("div",{className:"ot-review-text",children:s[e].review}),(0,a.jsxs)("div",{className:"ot-review-author-row",children:[a.jsx("img",{src:s[e].img,className:"ot-review-avatar",alt:s[e].name,width:56,height:56}),(0,a.jsxs)("div",{className:"ot-review-author-info",children:[a.jsx("span",{className:"ot-review-author-name",children:s[e].name}),a.jsx("span",{className:"ot-review-author-role",children:s[e].role})]})]})]})]},e),a.jsx("button",{className:"ot-arrow-btn",onClick:()=>t((e+1)%s.length),"aria-label":"Next review",children:"→"})]})]})}},345:(e,t,r)=>{"use strict";r.d(t,{AG:()=>x,At:()=>d,Jb:()=>i,aG:()=>l,bg:()=>m,gN:()=>c});var a=r(326),o=r(7577),s=r(4214),n=r(1223);let l=o.forwardRef(({...e},t)=>a.jsx("nav",{ref:t,"aria-label":"breadcrumb",...e}));l.displayName="Breadcrumb";let i=o.forwardRef(({className:e,...t},r)=>a.jsx("ol",{ref:r,className:(0,n.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",e),...t}));i.displayName="BreadcrumbList";let c=o.forwardRef(({className:e,...t},r)=>a.jsx("li",{ref:r,className:(0,n.cn)("inline-flex items-center gap-1.5",e),...t}));c.displayName="BreadcrumbItem";let d=o.forwardRef(({asChild:e,className:t,...r},o)=>{let l=e?s.g7:"a";return a.jsx(l,{ref:o,className:(0,n.cn)("transition-colors hover:text-foreground",t),...r})});d.displayName="BreadcrumbLink";let x=o.forwardRef(({className:e,...t},r)=>a.jsx("span",{ref:r,role:"link","aria-disabled":"true","aria-current":"page",className:(0,n.cn)("font-normal text-foreground",e),...t}));x.displayName="BreadcrumbPage";let m=({children:e,className:t,...r})=>a.jsx("li",{role:"presentation","aria-hidden":"true",className:(0,n.cn)("[&>svg]:size-3.5",t),...r,children:e??a.jsx("span",{className:"text-muted-foreground",children:"/"})});m.displayName="BreadcrumbSeparator"},3819:(e,t,r)=>{"use strict";r.d(t,{RM:()=>i,SC:()=>c,iA:()=>n,pj:()=>x,ss:()=>d,xD:()=>l});var a=r(326),o=r(7577),s=r(1223);let n=o.forwardRef(({className:e,...t},r)=>a.jsx("div",{className:"relative w-full overflow-auto",children:a.jsx("table",{ref:r,className:(0,s.cn)("w-full caption-bottom text-sm",e),...t})}));n.displayName="Table";let l=o.forwardRef(({className:e,...t},r)=>a.jsx("thead",{ref:r,className:(0,s.cn)("[&_tr]:border-b",e),...t}));l.displayName="TableHeader";let i=o.forwardRef(({className:e,...t},r)=>a.jsx("tbody",{ref:r,className:(0,s.cn)("[&_tr:last-child]:border-0",e),...t}));i.displayName="TableBody",o.forwardRef(({className:e,...t},r)=>a.jsx("tfoot",{ref:r,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t})).displayName="TableFooter";let c=o.forwardRef(({className:e,...t},r)=>a.jsx("tr",{ref:r,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));c.displayName="TableRow";let d=o.forwardRef(({className:e,...t},r)=>a.jsx("th",{ref:r,className:(0,s.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));d.displayName="TableHead";let x=o.forwardRef(({className:e,...t},r)=>a.jsx("td",{ref:r,className:(0,s.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));x.displayName="TableCell",o.forwardRef(({className:e,...t},r)=>a.jsx("caption",{ref:r,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",e),...t})).displayName="TableCaption"}};