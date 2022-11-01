<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 390 354.1"
  style="enable-background:new 0 0 390 354.1;"
  xml:space="preserve"
>
  <style type="text/css">
    .st0 {
      fill: none;
      stroke: #000000;
      stroke-width: 12;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-miterlimit: 10;
    }
  </style>
  <g id="calendar">
    <g>
      <path
        d="M350.8,36.8h-19.6V30c0-3.3-2.7-6-6-6c-3.3,0-6,2.7-6,6v6.8h-20V30c0-3.3-2.7-6-6-6c-3.3,0-6,2.7-6,6v6.8h-20V30
			c0-3.3-2.7-6-6-6c-3.3,0-6,2.7-6,6v6.8h-20V30c0-3.3-2.7-6-6-6c-3.3,0-6,2.7-6,6v6.8h-20V30c0-3.3-2.7-6-6-6c-3.3,0-6,2.7-6,6v6.8
			h-20V30c0-3.3-2.7-6-6-6c-3.3,0-6,2.7-6,6v6.8h-20V30c0-3.3-2.7-6-6-6c-3.3,0-6,2.7-6,6v6.8h-20V30c0-3.3-2.7-6-6-6
			c-3.3,0-6,2.7-6,6v6.8h-20V30c0-3.3-2.7-6-6-6c-3.3,0-6,2.7-6,6v6.8H43.6C26.2,36.8,12,51,12,68.4v230.4
			c0,17.4,14.2,31.6,31.6,31.6h307.2c17.4,0,31.6-14.2,31.6-31.6V68.4C382.4,51,368.2,36.8,350.8,36.8L350.8,36.8z M43.6,48.8h19.6
			v6.8c0,3.3,2.7,6,6,6c3.3,0,6-2.7,6-6v-6.8h20v6.8c0,3.3,2.7,6,6,6c3.3,0,6-2.7,6-6v-6.8h20v6.8c0,3.3,2.7,6,6,6c3.3,0,6-2.7,6-6
			v-6.8h20v6.8c0,3.3,2.7,6,6,6c3.3,0,6-2.7,6-6v-6.8h20v6.8c0,3.3,2.7,6,6,6c3.3,0,6-2.7,6-6v-6.8h20v6.8c0,3.3,2.7,6,6,6
			c3.3,0,6-2.7,6-6v-6.8h20v6.8c0,3.3,2.7,6,6,6c3.3,0,6-2.7,6-6v-6.8h20v6.8c0,3.3,2.7,6,6,6c3.3,0,6-2.7,6-6v-6.8h20v6.8
			c0,3.3,2.7,6,6,6c3.3,0,6-2.7,6-6v-6.8h19.6c10.8,0,19.6,8.8,19.6,19.6v6.8H24v-6.8C24,57.6,32.8,48.8,43.6,48.8L43.6,48.8z
			 M350.8,318.4H43.6c-10.8,0-19.6-8.8-19.6-19.6V87.2h346.4v211.6C370.4,309.6,361.6,318.4,350.8,318.4L350.8,318.4z M350.8,318.4"
      />
    </g>
  </g>
  <g id="croix">
    <polyline class="st0" points="146.2,140 157.8,152 184.2,126.4 	" />
    <polyline class="st1" points="211.2,197.2 222.8,209.2 249.2,183.6 	" />
    <polyline class="st2" points="82.2,255.2 93.8,267.2 120.2,241.6 	" />
    <line class="st0" x1="82" y1="145.2" x2="120.2" y2="145.2" />
    <line class="st0" x1="210.2" y1="145.2" x2="248.4" y2="145.2" />
    <line class="st0" x1="274.1" y1="145.2" x2="312.3" y2="145.2" />
    <line class="st1" x1="82" y1="202.8" x2="120.2" y2="202.8" />
    <line class="st1" x1="274.1" y1="202.8" x2="312.3" y2="202.8" />
    <line class="st1" x1="146.1" y1="202.8" x2="184.3" y2="202.8" />
    <line class="st2" x1="146.1" y1="260.4" x2="184.3" y2="260.4" />
    <line class="st2" x1="210.1" y1="260.4" x2="248.3" y2="260.4" />
    <line class="st2" x1="274.4" y1="260.4" x2="312.6" y2="260.4" />
  </g>
</svg>

<style>
  svg {
    width: 80px;
    position: absolute;
    top: 50px;
    right: 20px;
    transform: rotate(12deg);
  }

  @media screen and (min-width: 480px) {
    svg {
      position: static;
      display: inline-block;
      margin-left: 20px;
    }
  }

  #calendar {
    fill: rgba(127, 127, 127, 0.644);
  }

  #croix .st0,
  #croix .st1,
  #croix .st2 {
    fill: none;
    stroke: red;
    stroke-width: 12;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }

  #croix .st0 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 5s ease-in infinite forwards;
  }

  #croix .st1 {
    stroke: blue;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash-1 5s ease-in infinite forwards;
  }

  #croix .st2 {
    stroke: green;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash-2 5s ease-in infinite forwards;
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes dash-1 {
    20% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes dash-2 {
    30% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
</style>
