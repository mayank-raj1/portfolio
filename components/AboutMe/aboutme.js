import React from "react";
import ServiceCard from "../ServiceCard";

const AboutMe = ({}) => {
  const values = [{ name: "Value 1", description: "as" }];

  return (
    <>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by Mayank
      </h1>
      <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
        {values.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.title}
            description={service.description}
          />
        ))}
      </div>
    </>
  );
};

export default AboutMe;
