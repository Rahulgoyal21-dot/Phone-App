import React from "react";
import { Box, Text } from "grommet";
import { TextStyle } from "../styled_components/Text";

function Title({ name, title }) {
  return (
    <>
      <Box margin={{ top: "large" }}>
        <TextStyle textAlign="center" weight="bold" size="large">
          {name}
        </TextStyle>
        <TextStyle
          textAlign="center"
          weight="bold"
          size="large"
          color=" #009ffd"
        >
          {title}
        </TextStyle>
      </Box>
    </>
  );
}
export { Title };
