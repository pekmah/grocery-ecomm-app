import React from 'react';
import Svg, {Defs, Ellipse, G, Path, Use} from 'react-native-svg';

const Kenya = () => {
  return (
    <Svg
      width="30px"
      height="25px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-120 -80 240 160">
      <Defs>
        <Path
          id="a"
          d="M-1 55.426h2V-38c2-2 2-5 2-8 0-2 0-10-3-18.663C-3-56-3-48-3-46c0 3 0 6 2 8z"
          strokeMiterlimit="10"
          transform="rotate(30)"
        />
      </Defs>
      <Path fill="#fff" d="M-120-80h240V80h-240z" />
      <Path d="M-120-80h240v48h-240z" />
      <Path fill="#060" d="M-120 32h240v48h-240z" />
      <G id="b">
        <Use xlinkHref="#a" stroke="#000" />
        <Use xlinkHref="#a" fill="#fff" />
      </G>
      <Use xlinkHref="#b" transform="scale(-1 1)" />
      <Path
        fill="#b00"
        d="M-120-24v48h101c3 8 13 24 19 24s16-16 19-24h101v-48H19C16-32 6-48 0-48s-16 16-19 24z"
      />
      <Path
        id="c"
        d="M19 24c3-8 5-16 5-24s-2-16-5-24c-3 8-5 16-5 24s2 16 5 24"
      />
      <Use xlinkHref="#c" transform="scale(-1 1)" />
      <G fill="#fff">
        <Ellipse rx="4" ry="6" />
        <Path id="d" d="M1 5.85s4 8 4 21-4 21-4 21z" />
        <Use xlinkHref="#d" transform="scale(-1)" />
        <Use xlinkHref="#d" transform="scale(-1 1)" />
        <Use xlinkHref="#d" transform="scale(1 -1)" />
      </G>
    </Svg>
  );
};

export default Kenya;
