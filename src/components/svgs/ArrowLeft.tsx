interface Props {
  size: number;
}
const ArrowLeft: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 138 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="137.605"
        y="137.181"
        width="137.507"
        height="136.59"
        transform="rotate(180 137.605 137.181)"
        fill="url(#pattern0_0_102)"
      />
      <defs>
        <pattern
          id="pattern0_0_102"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_0_102"
            transform="matrix(0.00993336 0 0 0.01 0.00333213 0)"
          />
        </pattern>
        <image
          id="image0_0_102"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB0UlEQVR4nO3bzYrUQAAA4Yg+hwcPHvxhD3uYlxZBRVzZd9KRUWRBKAnMRcf9cZ1JyqQ+mMsckqaLdOeQHoYkSZIkSXJcwIMjXzL3ATwGXgFb4DtwAZzd62L5N8AG+MShXVHmiTE+Fde5mHpMq8XtMdgvX+0rkhijbycfzNpx9xij13OPd9H4uxifgSdzj3mxgPNr3qb+ZIy2mXvMi0UxPIohUgyRYogUQ6QYIvQ25UExPCiGB8XwoBgeFMODYnhQDA+K4UExPCiGB8XwoBgeFMODYnhQDA+K4UExPCiGB8XwoBgeFMODYnhQDA+KcTAhj4CH/8Fhme2iz2cAT4FL4Mf+dznlOWyK8ctknO3PXP9u/O9lMSYGvL9haXh34ntvWqYOJ+XrDUF2xZjYbbvnie553gFLSRCK4QlCMTxBKIYnCMXwBCmGKEgxREGKIQpSDFGQYoiCFEMUpBiiIMUQBSmGKEgxREGKIQpSDFGQYoiCFEMUpBiiIMUQBSmGL0ifd8qC3MWyv7WdUjFkejJkWqZk2jOWuakf0xfgLfB8WCO8dlOcT9HB7eOwNrhdzXXmcTa4XRXE5cOwNrg39RfD2uCzBd4Az+aemyRJkiRJMizUT3d1Y7Z4H80jAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default ArrowLeft;
