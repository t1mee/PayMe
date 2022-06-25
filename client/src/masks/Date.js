import React from "react";
import { IMaskInput } from "react-imask";

const Date = React.forwardRef(function TextMaskCustom(
  { onChange, name, ...other },
  ref,
) {
  return (
    <IMaskInput
      {...other}
      mask="#0/0000"
      definitions={{
        "#": /0|[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange(value)}
      overwrite
    />
  );
});

export default Date;
