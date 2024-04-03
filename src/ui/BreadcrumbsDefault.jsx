/* eslint-disable react/prop-types */
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export function BreadcrumbsDefault({ data }) {
  return (
    <>
      <Breadcrumbs
        className="bg-transparent "
        separator={<span className="text-lg text-white">/</span>}
      >
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Link to={`${item?.link}`}>
                <span className="text-white text-md font-extralight hover:text-primary">{item?.title}</span>
              </Link>
            </div>
          );
        })}
      </Breadcrumbs>
    </>
  );
}
