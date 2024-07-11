import { FC } from "react";

interface IProps {
  size?: number;
}

const Earth: FC<IProps> = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 274 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="0.605225"
        y="0.826172"
        width="272.977"
        height="271.157"
        fill="url(#pattern0_0_96)"
      />
      <defs>
        <pattern
          id="pattern0_0_96"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_0_96"
            transform="matrix(0.00993336 0 0 0.01 0.00333212 0)"
          />
        </pattern>
        <image
          id="image0_0_96"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Earth;
