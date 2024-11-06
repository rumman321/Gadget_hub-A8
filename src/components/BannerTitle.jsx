import React from "react";
import Header from "./Header";

const BannerTitle = () => {
  return (
    <div className=" space-y-5 w-6/12 mx-auto text-center pb-32">
      <Header
            title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
            subtitle={" Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}
           ></Header>
      {/* <h3 className="  font-bold text-4xl">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h3>
      <p>
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p> */}
      <button className="btn bg-white rounded-3xl ">Shop Now</button>
    </div>
  );
};

export default BannerTitle;
