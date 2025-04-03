import React, { useEffect } from "react";
import "./NotFound.css";

function NotFound({ title = "File Not Found" }) {
  // Update the document title dynamically
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="notfound-container">
      {/* 404 Error Page Content */}
      <svg height={100} width={100} className="notfound-icon">
        <polygon
          points="50,25 17,80 82,80"
          strokeLinejoin="round"
          style={{ fill: "none", stroke: "#ff8a00", strokeWidth: 8 }}
        />
        <text
          x={42}
          y={74}
          fill="#ff8a00"
          fontFamily="sans-serif"
          fontWeight={900}
          fontSize="42px"
        >
          !
        </text>
      </svg>

      <h1>{title}</h1>
      <p className="notfound-message">
        If you think what you're looking for should be here, please contact the site owner.
      </p>
    </div>
  );
}

export default NotFound;
