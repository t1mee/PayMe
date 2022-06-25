import React from "react";
import { IMaskInput } from "react-imask";

const NumberCard = React.forwardRef(function TextMaskCustom(
  { onChange, name, ...other },
  ref,
) {
  return (
    <IMaskInput
      {...other}
      mask="#000 0000 0000 0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange(value)}
      overwrite
    />
  );
});

export default NumberCard;
