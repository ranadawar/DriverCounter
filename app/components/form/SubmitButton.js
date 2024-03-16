import React from "react";

import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const SubmitButton = ({ title, color, textColor, style, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      color={color}
      titleColor={textColor}
      style={style}
      {...otherProps}
    />
  );
};

export default SubmitButton;
