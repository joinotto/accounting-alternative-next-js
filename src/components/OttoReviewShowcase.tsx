"use client";

import React, { useState, useEffect } from "react";

const reviews = [
    {
      company: "Owner of Photography Business",
      review: "“Otto's real-time insights have been incredible for cash flow management and decision-making. The platform is user-friendly, and the team is extremely on top of everything.”",
      img: "https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/67cab19ee6280a58dfe72b75_preston-tietjen.png",
      name: "Preston Tietjen",
      role: "Creative Producer & Founder",
    },
    {
      company: "Owner of Design Company",
      review: "“I’m excited to help Otto reach more creators because every creative deserves access to the tools and support they need to grow their businesses and focus on what they love—creating.”",
      img: "https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/67cab0c0fc7949623b7eef7d_Add%20a%20heading.png",
      name: "Sophia Yeshi",
      role: "Illustrator & Designer",
    },
    {
      company: "Owner of Production Company",
      review: `"Keeping my finances stable is crucial, and Otto helps me earn more and pay less in taxes. With its focus on creatives, I keep more of what I earn, fueling my business and creativity."`,
      img: "https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/67cab19e9b89328cfdf3e3f7_kai-byrd.png",
      name: "Kai Byrd",
      role: "Photographer, Creative Director",
    },
  ];
  
  export default function OttoReviewShowcase() {
    const [idx, setIdx] = useState(2);
  
    // Handle slider navigation
    const prev = () => setIdx((idx + reviews.length - 1) % reviews.length);
    const next = () => setIdx((idx + 1) % reviews.length);

    // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [idx]); // re-run when idx changes
  
    return (
      <section className="ot-reviews-outer-section">
        <style>{`
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
        `}</style>
        <div className="ot-reviews-slider-area">
          <button className="ot-arrow-btn" onClick={prev} aria-label="Previous review">
            &#8592;
          </button>
          <div className="ot-reviews-outer-card slide-transition" key={idx}>
            <div className="ot-reviews-company-header">
              {reviews[idx].company}
            </div>
            <div className="ot-reviews-inner-card">
              <div className="ot-review-text">{reviews[idx].review}</div>
              <div className="ot-review-author-row">
                <img
                  src={reviews[idx].img}
                  className="ot-review-avatar"
                  alt={reviews[idx].name}
                  width={56}
                  height={56}
                />
                <div className="ot-review-author-info">
                  <span className="ot-review-author-name">{reviews[idx].name}</span>
                  <span className="ot-review-author-role">{reviews[idx].role}</span>
                </div>
              </div>
            </div>
          </div>
          <button className="ot-arrow-btn" onClick={next} aria-label="Next review">
            &#8594;
          </button>
        </div>
      </section>
    );
  }
  