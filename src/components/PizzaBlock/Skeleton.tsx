import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#d9d9d9"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="125" />
    <circle cx="197" cy="184" r="14" />
    <rect x="0" y="296" rx="10" ry="10" width="280" height="20" />
    <rect x="0" y="333" rx="10" ry="10" width="280" height="77" />
    <rect x="0" y="424" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="424" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
