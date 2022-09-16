import React from "react";

export default function Home() {
  return (
    <div>
      <h1>
        Welcome to <span id="BJJB">BJJB!</span>
      </h1>
      <h2 className="home-phrase" id="left">
        For grapplers by grapplers <span id="anytime">anytime</span>,{" "}
        <span id="anywhere">anywhere</span>.
      </h2>
      <img
        className="home-image"
        id="right"
        src="https://static.tvtropes.org/pmwiki/pub/images/bjj.jpg"
        alt="stockimage"
      />
    </div>
  );
}
