import React from "react";
import { replacement } from "./Data";
import dayjs from "dayjs";

const News = ({ item }) => {
  const date = new Date();
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card card-body">
      <img src={item.image_url ? item.image_url : replacement} alt="pic" />
      <div className="news-details">
        <small className="d-flex justify-content-end mt-2">
          {dayjs(date).format("ddd DD MMMM, YYYY")}
        </small>
        <p className="text-primary fw-bold">{item.title}</p>
        <p>{item.description}</p>
        <p className="text-secondary fs-6">
          <span className="text-dark fw-bolder">Author(s): </span>
          {item.creator}
        </p>
        <p className="text-secondary fs-6">
          <span className="text-dark fw-bolder">Country: </span>
          {item.country}
        </p>
        <span className="text-dark fw-bolder">keywords: </span>{" "}
        <p>
          {item.keywords?.map((keyword, index) => (
            <span key={index}><span className="bg-secondary text-light fs-6">{keyword}</span></span>
          ))}
        </p>
      </div>
    </div>
    </div>
  );
};

export default News;
