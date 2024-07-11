import React, { ComponentPropsWithRef, ElementType } from "react";

type RowContainerProps<T extends ElementType> = {
  as: T;
  children: React.ReactNode;
} & ComponentPropsWithRef<T>;

function RowContainer<T extends ElementType>({
  as,
  children,
  ...props
}: RowContainerProps<T>) {
  const Component = as || "tr";
  return (
    <Component className="assets-table-header" {...props}>
      {children}
    </Component>
  );
}

export default RowContainer;
