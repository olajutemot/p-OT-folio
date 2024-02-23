import React from "react";

const Info = () => {
  return (
    <div>
      <div id="info">
        <div>
          <h3>1+</h3>
          <span>years of work</span>
        </div>
        <div>
          <h3>15+</h3>
          <span>Completed projects</span>
        </div>
        <div>
          <h3>10</h3>
          <span>Satisfied Customers</span>
        </div>
      </div>
      <div id="contact-info">
        <a
          href="https://docs.google.com/document/d/1Qr93NMRdaiEXkNffimNsAe4TDVsc3UkB-OlbcrLAN_A/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          id="resume"
        >
          Check Resume <i class="fa-solid fa-arrow-right"></i>
        </a>

        <a href="https://wa.link/fw0mz7" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default Info;
