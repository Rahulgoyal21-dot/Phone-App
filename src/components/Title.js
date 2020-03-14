import React from "react";
import { Box, Text } from "grommet";
import { TextStyle } from "../styled_components/Text";

function Title({ name, title }) {
  return (
    // <>
    //   <Box margin={{ top: "large" }}>
    //     <TextStyle textAlign="center" weight="bold" size="large">
    //       {name}
    //     </TextStyle>
    //     <TextStyle
    //       textAlign="center"
    //       weight="bold"
    //       size="large"
    //       color=" #009ffd"
    //     >
    //       {title}
    //     </TextStyle>
    //   </Box>
    // </>
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name}
          <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
export { Title };
