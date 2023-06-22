import React, { forwardRef } from "react";
import StyledButton from "./styled";

const Button = forwardRef(
  ({ children, link, className, onClick, $width }, ref) => {
    return (
      <StyledButton
        ref={ref}
        {...(link ? { to: link } : { as: "button", type: "button" })}
        className={className}
        onClick={onClick}
        $width={$width}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
