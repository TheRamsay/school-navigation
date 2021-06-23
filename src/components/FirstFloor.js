import React, {useEffect, useState} from "react";
import axios from "axios";

const FirstFloor = () => {
    return (
        <>
			<svg
			  xmlns="http://www.w3.org/2000/svg"
			  id="svg-map"
			  width="100%"
			  height="100%"
			  version="1.1"
			  viewBox="0 0 35.41 282.34"
			>
			  <defs id="defs6059">
				<clipPath id="clipPath563" clipPathUnits="userSpaceOnUse">
				  <path id="path561" d="M0 0h9921v14031H0V0"></path>
				</clipPath>
				<clipPath id="clipPath563-1" clipPathUnits="userSpaceOnUse">
				  <path id="path561-8" d="M0 0h9921v14031H0V0"></path>
				</clipPath>
				<clipPath id="clipPath563-6" clipPathUnits="userSpaceOnUse">
				  <path id="path561-2" d="M0 0h9921v14031H0V0"></path>
				</clipPath>
			  </defs>
			  <g id="layer1" transform="translate(-85.562 -7.757)">
				<path
				  id="rect189392-4"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M110.824 279.906H111.84V283.907H110.824z"
				></path>
				<path
				  id="rect189392-9"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M109.808 279.906H110.82400000000001V283.907H109.808z"
				></path>
				<path
				  id="rect189392-1"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M108.792 279.906H109.808V283.907H108.792z"
				></path>
				<path
				  id="rect189392-5"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M107.776 279.906H108.792V283.907H107.776z"
				></path>
				<g id="g557" transform="matrix(.02117 0 0 -.02117 45.503 303.803)">
				  <g id="g559" clipPath="url(#clipPath563-6)">
					<text
					  transform="matrix(1 0 0 -1 2576 13299)"
					  style={{ InkscapeFontSpecification: "Tahoma" }}
					  id="text567"
					  fill="#000"
					  fillOpacity="1"
					  fillRule="nonzero"
					  stroke="none"
					  fontFamily="Tahoma"
					  fontSize="84.471"
					  fontVariant="normal"
					  fontWeight="normal"
					  writingMode="lr-tb"
					>
					  <tspan id="tspan565" x="0 46.121166 92.242332" y="0">
						206
					  </tspan>
					</text>
				  </g>
				</g>
				<path
				  id="rect45259"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeDasharray="none"
				  strokeMiterlimit="4"
				  strokeOpacity="1"
				  strokeWidth="0.4"
				  d="M110.824 82.971H115.819V84.961H110.824z"
				></path>
				<path
				  id="rect45261"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeDasharray="none"
				  strokeMiterlimit="4"
				  strokeOpacity="1"
				  strokeWidth="0.4"
				  d="M105.807 94.465H110.824V97.958H105.807z"
				></path>
				<g
				  id="1"
				  fillOpacity="1"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372365"
					fill="#c8beb7"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1905 -13977H3322V-13268H1905z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2512"
					x="2535.912"
					y="-13537.393"
					fill="#000"
					stroke="none"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
					fontStyle="normal"
					fontWeight="normal"
				  >
					<tspan
					  id="tspan34522"
					  x="2535.912"
					  y="-13537.393"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  1
					</tspan>
				  </text>
				</g>
				<g
				  id="205"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372367"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1905 -13268H2519V-12323H1905z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2659"
					x="1988.579"
					y="-12710.678"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan31058"
					  x="1988.579"
					  y="-12710.678"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  205
					</tspan>
				  </text>
				</g>
				<g
				  id="2"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372381"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1905 -12323H2519V-11378H1905z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2661"
					x="2136.235"
					y="-11763.911"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan40854"
					  x="2136.235"
					  y="-11763.911"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  2
					</tspan>
				  </text>
				</g>
				<g
				  id="203"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372379"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1905 -11378H2519V-10670H1905z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2663"
					x="1989.092"
					y="-10939.178"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan42816"
					  x="1989.092"
					  y="-10939.178"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  203
					</tspan>
				  </text>
				</g>
				<g
				  id="202"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372377"
					fill="#c8beb7"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1905 -10670H2519V-9725H1905z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2666"
					x="1987.896"
					y="-10112.678"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan45328"
					  x="1987.896"
					  y="-10112.678"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  202
					</tspan>
				  </text>
				</g>
				<g
				  id="5"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372375"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2755 -11378H3322V-10433H2755z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2674"
					x="2961.938"
					y="-10822.443"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan46652"
					  x="2961.938"
					  y="-10822.443"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  5
					</tspan>
				  </text>
				</g>
				<g
				  id="3"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372373"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2755 -12796H3322V-11378H2755z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2672"
					x="2963.59"
					y="-12002.178"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan47646"
					  x="2963.59"
					  y="-12002.178"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  3
					</tspan>
				  </text>
				</g>
				<g
				  id="208"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372371"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2755.409 -13032H3322.409V-12796H2755.409z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2670"
					x="2846.282"
					y="-12841.295"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="200"
				  >
					<tspan
					  id="tspan48442"
					  x="2846.282"
					  y="-12841.295"
					  strokeWidth="12.5"
					  fontSize="200"
					>
					  208
					</tspan>
				  </text>
				</g>
				<g
				  id="207"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372369"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2755 -13268H3322V-13032H2755z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2668"
					x="2846.215"
					y="-13077.295"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="200"
				  >
					<tspan
					  id="tspan55864"
					  x="2846.215"
					  y="-13077.295"
					  strokeWidth="12.5"
					  fontSize="200"
					>
					  207
					</tspan>
				  </text>
				</g>
				<g
				  id="212"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372383"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2849 -10433H3086V-10174H2849z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2678"
					x="2871.455"
					y="-10266.391"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="100"
				  >
					<tspan
					  id="tspan95464"
					  x="2871.455"
					  y="-10266.391"
					  strokeWidth="12.5"
					  fontSize="100"
					>
					  212
					</tspan>
				  </text>
				</g>
				<g
				  id="213"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372385"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2849 -10174H3086V-9890H2849z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2680"
					x="2871.968"
					y="-9995.647"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="100"
				  >
					<tspan
					  id="tspan98030"
					  x="2871.968"
					  y="-9995.647"
					  strokeWidth="12.5"
					  fontSize="100"
					>
					  213
					</tspan>
				  </text>
				</g>
				<g
				  id="214"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372387"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M3086 -10339H3322V-9725H3086z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2676"
					x="3107.125"
					y="-9994.891"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="100"
				  >
					<tspan
					  id="tspan100512"
					  x="3107.125"
					  y="-9994.891"
					  strokeWidth="12.5"
					  fontSize="100"
					>
					  214
					</tspan>
				  </text>
				</g>
				<g
				  id="2222"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372389"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2842 -8215H3556V-7743H2842z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2682"
					x="2900.725"
					y="-7892.412"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan134636"
					  x="2900.725"
					  y="-7892.412"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  2222
					</tspan>
				  </text>
				</g>
				<g
				  id="6"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372391"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1902 -7743H2611V-7034H1902z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2686"
					x="2180.849"
					y="-7303.849"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan138918"
					  x="2180.849"
					  y="-7303.849"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  6
					</tspan>
				  </text>
				</g>
				<g
				  id="231"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372499"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1902 -7034H2611V-6089H1902z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2690"
					x="2037.237"
					y="-6476.678"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan141202"
					  x="2037.237"
					  y="-6476.678"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  231
					</tspan>
				  </text>
				</g>
				<g
				  id="8"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372501"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1902 -6089.001H2611V-5381.001H1902z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2694"
					x="2182.33"
					y="-5650.178"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan142760"
					  x="2182.33"
					  y="-5650.178"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  8
					</tspan>
				  </text>
				</g>
				<g
				  id="229"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372505"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1902 -5381H2611V-4672H1902z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2696"
					x="2032.509"
					y="-4941.564"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan145638"
					  x="2032.509"
					  y="-4941.564"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  229
					</tspan>
				  </text>
				</g>
				<g
				  id="228"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372509"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1902 -4672H2611V-3727H1902z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2700"
					x="2031.769"
					y="-4114.678"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan147382"
					  x="2031.769"
					  y="-4114.678"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  228
					</tspan>
				  </text>
				</g>
				<g
				  id="12"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372513"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1902 -3727H2611V-3019H1902z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2704"
					x="2099.9"
					y="-3286.412"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan148466"
					  x="2099.9"
					  y="-3286.412"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  12
					</tspan>
				  </text>
				</g>
				<g
				  id="14"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372515"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1902 -3019H2611V-2310H1902z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2706"
					x="2097.963"
					y="-2579.393"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan149804"
					  x="2097.963"
					  y="-2579.393"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  14
					</tspan>
				  </text>
				</g>
				<g
				  id="225"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372517"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1902 -2310H2611V-1365H1902z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2710"
					x="2033.079"
					y="-1752.678"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan151890"
					  x="2033.079"
					  y="-1752.678"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  225
					</tspan>
				  </text>
				</g>
				<g
				  id="13"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372521"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2847 -1838H3556V-1129H2847z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2712"
					x="3046.096"
					y="-1398.678"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan153766"
					  x="3046.096"
					  y="-1398.678"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  13
					</tspan>
				  </text>
				</g>
				<g
				  id="220"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372519"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2847 -2783H3556V-1838H2847z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2708"
					x="2977.509"
					y="-2225.677"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan155194"
					  x="2977.509"
					  y="-2225.677"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  220
					</tspan>
				  </text>
				</g>
				<g
				  id="11"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372511"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2847 -3727H3556V-2783H2847z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2702"
					x="3049.742"
					y="-3169.893"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan156554"
					  x="3049.742"
					  y="-3169.893"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  11
					</tspan>
				  </text>
				</g>
				<g
				  id="9"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372507"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2847 -4908.001H3556V-3727.001H2847z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2698"
					x="3128.583"
					y="-4232.621"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan158892"
					  x="3128.583"
					  y="-4232.621"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  9
					</tspan>
				  </text>
				</g>
				<g
				  id="7"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372503"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2847 -6089.001H3556V-4908.001H2847z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2692"
					x="3125.906"
					y="-5413.678"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan160450"
					  x="3125.906"
					  y="-5413.678"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  7
					</tspan>
				  </text>
				</g>
				<g
				  id="216B"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372497"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2847 -7270.999H3556V-6089H2847z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2688"
					x="2894.452"
					y="-6595.177"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan163328"
					  x="2894.452"
					  y="-6595.177"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  216B
					</tspan>
				  </text>
				</g>
				<g
				  id="216A"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372393"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M2847 -7743H3556V-7271H2847z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2684"
					x="2891.547"
					y="-7422.178"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan165138"
					  x="2891.547"
					  y="-7422.178"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  216A
					</tspan>
				  </text>
				</g>
				<g
				  id="224"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372523"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1902 -1365H2611V-893H1902z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2714"
					x="2030.458"
					y="-1042.412"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="233.333"
				  >
					<tspan
					  id="tspan169584"
					  x="2030.458"
					  y="-1042.412"
					  strokeWidth="12.5"
					  fontSize="233.333"
					>
					  224
					</tspan>
				  </text>
				</g>
				<g
				  id="223"
				  transform="matrix(.02117 0 0 -.02117 45.503 303.803) scale(1 -1)"
				>
				  <path
					id="rect372525"
					fill="#c8beb7"
					fillOpacity="1"
					stroke="#000"
					strokeDasharray="none"
					strokeMiterlimit="4"
					strokeOpacity="1"
					strokeWidth="18.898"
					d="M1902 -893H2611V-657H1902z"
				  ></path>
				  <text
					xmlSpace="preserve"
					style={{ lineHeight: "1.25" }}
					id="text2716"
					x="2065.436"
					y="-702.295"
					strokeWidth="12.5"
					fontFamily="sans-serif"
					fontSize="200"
				  >
					<tspan
					  id="tspan173804"
					  x="2065.436"
					  y="-702.295"
					  strokeWidth="12.5"
					  fontSize="200"
					>
					  223
					</tspan>
				  </text>
				</g>
				<path
				  id="rect189390"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeDasharray="none"
				  strokeMiterlimit="4"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M105.765 279.906H106.76V283.907H105.765z"
				></path>
				<path
				  id="rect189392"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M106.76 279.906H107.77600000000001V283.907H106.76z"
				></path>
				<path
				  id="rect189392-19"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M111.84 279.906H112.85600000000001V283.907H111.84z"
				></path>
				<path
				  id="rect189392-2"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M112.856 279.906H113.872V283.907H112.856z"
				></path>
				<path
				  id="rect189392-16"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M113.872 279.906H114.888V283.907H113.872z"
				></path>
				<path
				  id="rect189392-6"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M114.761 279.906H115.777V283.907H114.761z"
				></path>
				<path
				  id="rect189392-90"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M105.765 285.896H106.781V289.897H105.765z"
				></path>
				<path
				  id="rect189392-55"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M107.797 285.896H108.813V289.897H107.797z"
				></path>
				<path
				  id="rect189392-52"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M106.781 285.896H107.79700000000001V289.897H106.781z"
				></path>
				<path
				  id="rect189392-3"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M111.861 285.896H112.87700000000001V289.897H111.861z"
				></path>
				<path
				  id="rect189392-0"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M110.845 285.896H111.861V289.897H110.845z"
				></path>
				<path
				  id="rect189392-7"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M109.829 285.896H110.845V289.897H109.829z"
				></path>
				<path
				  id="rect189392-33"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M108.813 285.896H109.82900000000001V289.897H108.813z"
				></path>
				<path
				  id="rect189392-8"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M114.909 285.896H115.92500000000001V289.897H114.909z"
				></path>
				<path
				  id="rect189392-65"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M113.893 285.896H114.909V289.897H113.893z"
				></path>
				<path
				  id="rect189392-79"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M112.877 285.896H113.893V289.897H112.877z"
				></path>
				<path
				  id="rect190137"
				  fill="#c8beb7"
				  fillOpacity="1"
				  stroke="#000"
				  strokeDasharray="none"
				  strokeMiterlimit="4"
				  strokeOpacity="1"
				  strokeWidth="0.265"
				  d="M115.777 279.906H120.772V289.897H115.777z"
				></path>
			  </g>
			</svg>
        </>

    )
}

export default FirstFloor;
