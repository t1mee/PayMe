import React from "react";
import { IMaskInput } from "react-imask";

const Cvv = React.forwardRef(function TextMaskCustom(
  { onChange, name, ...other },
  ref,
) {
  return (
    <IMaskInput
      {...other}
      mask="#00"
      definitions={{
        "#": /0|[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ [name]: { value, error: false } })}
      overwrite
    />
  );
});

export default Cvv;
