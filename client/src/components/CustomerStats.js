import React from "react";

const CustomerStats = () => {
  return (
    <>
      <div className=" w-[15rem] flex justify-center items-center flex-col gap-3">
        <p className="text-center font-bold text-3xl">1M+</p>
        <p className="text-center font-base text-sm">
          Customers visit Omega every month to get their service done.
        </p>
      </div>{" "}
      <div className=" w-[15rem] flex justify-center items-center flex-col gap-3">
        <p className="text-center font-bold text-3xl">92%</p>
        <p className="text-center font-base text-sm">
          Satisfaction rate comes from our awesome customers.
        </p>
      </div>{" "}
      <div className=" w-[15rem] flex justify-center items-center flex-col gap-3">
        <p className="text-center font-bold text-3xl">4.9/5.0</p>
        <p className="text-center font-base text-sm">
          Average customer ratings we have got all over internet.
        </p>
      </div>{" "}
    </>
  );
};

export default CustomerStats;
