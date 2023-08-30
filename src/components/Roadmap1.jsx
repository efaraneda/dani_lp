import React from "react";

//import "./Roadmap.css";

function Roadmap1() {
 

  return (
    <div className="roadmap">
      {columnMap.map((column, i) => (
        <div className="roadmap-column" key={`${column.title}-${i}`}>
          <div className="roadmap-column-heading">{column.title}</div>
          <div className="roadmap-cards">
            {column.tickets.map((t, i) => (
              <div key={`exploring-${i}`} className="roadmap-cards-item">
                <div className="roadmap-cards-item-heading">{t.title}</div>
                <div
                  className="roadmap-cards-item-content"
                  dangerouslySetInnerHTML={{ __html: t.description }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 125"
                  style={{
                    enableBackground: "new 0 0 100 100",
                    maxWidth: "18px",
                    cursor: "pointer",
                  }}
                >
                  <g>
                    <g>
                      <path d="M81.7,40.4H64.6l3.6-17.9c0.5-2.5,0.1-5-1.2-7.1l0,0c-1.5-2.5-4.9-3-7-1.1L29.8,38.7c-1.2,1.1-1.8,2.6-1.8,4.1v33.1    c0,2.4,1.5,4.5,3.7,5.3l12.9,3.4c3.1,1.1,6.4,1.6,9.7,1.6h18c6.6,0,12.5-4.2,14.7-10.5l6.9-20c0.3-0.9,0.4-1.9,0.4-2.9v0    C94.3,46,88.7,40.4,81.7,40.4z" />
                      <path d="M22.2,40.4H7.8c-1.5,0-2.8,1.2-2.8,2.8v34c0,1.5,1.2,2.7,2.7,2.8h14.5c1.5,0,2.8-1.2,2.8-2.8v-34    C25,41.6,23.7,40.4,22.2,40.4z" />
                    </g>
                  </g>
                </svg>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


export default Roadmap1;

