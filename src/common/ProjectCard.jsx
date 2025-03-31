import React from "react";

function ProjectCard({ src, link, h3, p, desc }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" title={desc}>
      <img
        className="hover"
        src={src}
        alt={`${h3} logo`}
        target="_blank"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain", // or "contain" if you don’t want to crop
        }}
      />
      <h3>{h3}</h3>
      <p style={{ width: "24ch" }}>{p}</p>
    </a>
  );
}

export default ProjectCard;
