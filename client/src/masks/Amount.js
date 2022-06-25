import React from "react";
import { IMaskInput } from "react-imask";

const Amount = React.forwardRef(function TextMaskCustom(
  { onChange, name, ...other },
  ref,
) {
  return (
    <IMaskInput
      {...other}
      mask="#000000000000000000"
      definitions={{
        "#": /0|[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange(value)}
      overwrite
    />
  );
});

export default Amount;
