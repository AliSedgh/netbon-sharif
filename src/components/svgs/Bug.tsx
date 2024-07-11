interface IProps {
  size: number;
}
const Bug: React.FC<IProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 172 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="0.527832"
        y="0.203125"
        width="171.12"
        height="169.979"
        fill="url(#pattern0_0_99)"
      />
      <defs>
        <pattern
          id="pattern0_0_99"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_0_99"
            transform="matrix(0.00993336 0 0 0.01 0.00333212 0)"
          />
        </pattern>
        <image
          id="image0_0_99"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Bug;
