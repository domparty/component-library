import React from "react";
import { styled } from "goober";

const Img = styled("div")`
  width: 100px;
  overflow: hidden;
`;

function Image({ src }) {
  return (
    <Img>
      <img src="http://lorempixel.com/400/200/sports/" />
    </Img>
  );
}

export default Image;
