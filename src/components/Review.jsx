import React from "react";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";

const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

const Review = () => {
  return (
    <section className="container mt-12 mb-8 mx-auto" id="review">
      <div className="flex flex-col">
        <p className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]">
          {REVIEW.content}
        </p>
        <div className="flex items-center justify-center gap-6">
          <img
            src={xaviour}
            className="rounded-full border"
            alt={REVIEW.name}
            width={80}
            height={80}
          />
          
          <div className="tracking-tighter">
            {REVIEW.name}
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
            {
                [customer1,customer2,customer3,customer4].map((customer,index)=>{
                    return <img src={customer} alt="customer" className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover" key={index}/>
                })
            }
      </div>
    </section>
  );
};

export default Review;
