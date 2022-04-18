import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>Welcome to Detail page..{serviceId}</h1>
      <div className="text-center">
        <Link to="/checkout">
          {" "}
          <button className="btn btn-primary">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
