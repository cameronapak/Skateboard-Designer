import type React from "react"

const SkateboardTemplate: React.FC<React.SVGProps<SVGSVGElement> & { color?: string }> = ({
  color = "black",
  ...props
}) => {
  return (
    <svg viewBox="0 0 2976 719.997" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M2616.000,0.001C2814.823,0.001,2976.000,161.179,2976.000,359.999C2976.000,558.821,2814.823,719.997,2616.000,719.997L360.000,719.997C161.177,719.997,0.000,558.820,0.000,359.997C0.000,161.177,161.177,0.000,360.000,0.000Z"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
        className="fills"
      />
      <g
        className="strokes"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
      >
        <g className="outer-stroke-shape">
          <defs>
            <mask id="b" x="-9.657" y="-9.657" width="2995.314" height="739.311" maskUnits="userSpaceOnUse">
              <use href="#a" style={{ fill: "none", stroke: "white", strokeWidth: 8 }} />
              <use href="#a" style={{ fill: "black", stroke: "none" }} />
            </mask>
            <path
              d="M2616.000,0.001C2814.823,0.001,2976.000,161.179,2976.000,359.999C2976.000,558.821,2814.823,719.997,2616.000,719.997L360.000,719.997C161.177,719.997,0.000,558.820,0.000,359.997C0.000,161.177,161.177,0.000,360.000,0.000Z"
              id="a"
            />
          </defs>
          <use href="#a" mask="url(#b)" style={{ fill: "none", strokeWidth: 8, stroke: color, strokeOpacity: 1 }} />
          <use href="#a" style={{ fill: "none", strokeWidth: 4, stroke: color, strokeOpacity: 1 }} />
        </g>
      </g>
      <path
        d="M2633.122,25.587C2809.393,25.587,2952.292,175.825,2952.292,361.142C2952.292,546.465,2809.393,696.695,2633.122,696.695L341.713,696.695C165.438,696.695,22.541,546.463,22.541,361.141C22.541,175.823,165.438,25.586,341.713,25.586Z"
        style={{
          fill: "none",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeDasharray: 12,
          strokeMiterlimit: 4,
          stroke: color,
        }}
        className="fills"
      />
      <g
        className="strokes"
        style={{
          fill: "none",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeDasharray: 12,
          strokeMiterlimit: 4,
          stroke: color,
        }}
      >
        <path
          d="M2633.122,25.587C2809.393,25.587,2952.292,175.825,2952.292,361.142C2952.292,546.465,2809.393,696.695,2633.122,696.695L341.713,696.695C165.438,696.695,22.541,546.463,22.541,361.141C22.541,175.823,165.438,25.586,341.713,25.586Z"
          style={{ fill: "none", strokeWidth: 4, stroke: color, strokeOpacity: 1 }}
          className="stroke-shape"
        />
      </g>
      <path
        d="M2363.904,434.745C2363.904,429.773,2367.932,425.745,2372.904,425.745C2377.876,425.745,2381.904,429.773,2381.904,434.745C2381.904,439.714,2377.876,443.745,2372.904,443.745C2367.932,443.745,2363.904,439.714,2363.904,434.745ZZ"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
        className="fills"
      />
      <g
        className="strokes"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
      >
        <path
          d="M2363.904,434.745C2363.904,429.773,2367.932,425.745,2372.904,425.745C2377.876,425.745,2381.904,429.773,2381.904,434.745C2381.904,439.714,2377.876,443.745,2372.904,443.745C2367.932,443.745,2363.904,439.714,2363.904,434.745ZZ"
          style={{ fill: "none", strokeWidth: 4, stroke: color, strokeOpacity: 1 }}
          className="stroke-shape"
        />
      </g>
      <path
        d="M2363.904,284.809C2363.904,279.839,2367.932,275.809,2372.904,275.809C2377.876,275.809,2381.904,279.839,2381.904,284.809C2381.904,289.781,2377.876,293.811,2372.904,293.811C2367.932,293.811,2363.904,289.781,2363.904,284.809ZZ"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
        className="fills"
      />
      <g
        className="strokes"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
      >
        <path
          d="M2363.904,284.809C2363.904,279.839,2367.932,275.809,2372.904,275.809C2377.876,275.809,2381.904,279.839,2381.904,284.809C2381.904,289.781,2377.876,293.811,2372.904,293.811C2367.932,293.811,2363.904,289.781,2363.904,284.809ZZ"
          style={{ fill: "none", strokeWidth: 4, stroke: color, strokeOpacity: 1 }}
          className="stroke-shape"
        />
      </g>
      <path
        d="M2166.055,434.745C2166.055,429.773,2170.085,425.745,2175.055,425.745C2180.027,425.745,2184.055,429.773,2184.055,434.745C2184.055,439.714,2180.027,443.745,2175.055,443.745C2170.085,443.745,2166.055,439.714,2166.055,434.745ZZ"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
        className="fills"
      />
      <g
        className="strokes"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
      >
        <path
          d="M2166.055,434.745C2166.055,429.773,2170.085,425.745,2175.055,425.745C2180.027,425.745,2184.055,429.773,2184.055,434.745C2184.055,439.714,2180.027,443.745,2175.055,443.745C2170.085,443.745,2166.055,439.714,2166.055,434.745ZZ"
          style={{ fill: "none", strokeWidth: 4, stroke: color, strokeOpacity: 1 }}
          className="stroke-shape"
        />
      </g>
      <path
        d="M2166.055,284.807C2166.055,279.838,2170.085,275.807,2175.055,275.807C2180.027,275.807,2184.055,279.838,2184.055,284.807C2184.055,289.779,2180.027,293.810,2175.055,293.810C2170.085,293.810,2166.055,289.779,2166.055,284.807ZZ"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
        className="fills"
      />
      <g
        className="strokes"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
      >
        <path
          d="M2166.055,284.807C2166.055,279.838,2170.085,275.807,2175.055,275.807C2180.027,275.807,2184.055,279.838,2184.055,284.807C2184.055,289.779,2180.027,293.810,2175.055,293.810C2170.085,293.810,2166.055,289.779,2166.055,284.807ZZ"
          style={{ fill: "none", strokeWidth: 4, stroke: color, strokeOpacity: 1 }}
          className="stroke-shape"
        />
      </g>
      <path
        d="M827.924,434.745C827.924,429.773,831.952,425.745,836.924,425.745C841.896,425.745,845.924,429.773,845.924,434.745C845.924,439.714,841.896,443.745,836.924,443.745C831.952,443.745,827.924,439.714,827.924,434.745ZZ"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
        className="fills"
      />
      <g
        className="strokes"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
      >
        <path
          d="M827.924,434.745C827.924,429.773,831.952,425.745,836.924,425.745C841.896,425.745,845.924,429.773,845.924,434.745C845.924,439.714,841.896,443.745,836.924,443.745C831.952,443.745,827.924,439.714,827.924,434.745ZZ"
          style={{ fill: "none", strokeWidth: 4, stroke: color, strokeOpacity: 1 }}
          className="stroke-shape"
        />
      </g>
      <path
        d="M827.924,284.807C827.924,279.838,831.952,275.807,836.924,275.807C841.896,275.807,845.924,279.838,845.924,284.807C845.924,289.779,841.896,293.810,836.924,293.810C831.952,293.810,827.924,289.779,827.924,284.807ZZ"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
        className="fills"
      />
      <g
        className="strokes"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
      >
        <path
          d="M827.924,284.807C827.924,279.838,831.952,275.807,836.924,275.807C841.896,275.807,845.924,279.838,845.924,284.807C845.924,289.779,841.896,293.810,836.924,293.810C831.952,293.810,827.924,289.779,827.924,284.807ZZ"
          style={{ fill: "none", strokeWidth: 4, stroke: color, strokeOpacity: 1 }}
          className="stroke-shape"
        />
      </g>
      <path
        d="M630.075,434.745C630.075,429.773,634.106,425.745,639.075,425.745C644.049,425.745,648.075,429.773,648.075,434.745C648.075,439.714,644.049,443.745,639.075,443.745C634.106,443.745,630.075,439.714,630.075,434.745ZZ"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
        className="fills"
      />
      <g
        className="strokes"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
      >
        <path
          d="M630.075,434.745C630.075,429.773,634.106,425.745,639.075,425.745C644.049,425.745,648.075,429.773,648.075,434.745C648.075,439.714,644.049,443.745,639.075,443.745C634.106,443.745,630.075,439.714,630.075,434.745ZZ"
          style={{ fill: "none", strokeWidth: 4, stroke: color, strokeOpacity: 1 }}
          className="stroke-shape"
        />
      </g>
      <path
        d="M630.075,284.807C630.075,279.838,634.106,275.807,639.075,275.807C644.049,275.807,648.075,279.838,648.075,284.807C648.075,289.779,644.049,293.810,639.075,293.810C634.106,293.810,630.075,289.779,630.075,284.807ZZ"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
        className="fills"
      />
      <g
        className="strokes"
        style={{ fill: "none", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "none", stroke: color }}
      >
        <path
          d="M630.075,284.807C630.075,279.838,634.106,275.807,639.075,275.807C644.049,275.807,648.075,279.838,648.075,284.807C648.075,289.779,644.049,293.810,639.075,293.810C634.106,293.810,630.075,289.779,630.075,284.807ZZ"
          style={{ fill: "none", strokeWidth: 4, stroke: color, strokeOpacity: 1 }}
          className="stroke-shape"
        />
      </g>

      {/* Add Nose (N) and Tail (T) labels */}
      <text
        x="695"
        y="370"
        style={{
          fill: color,
          stroke: "none",
          fontSize: "125px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          dominantBaseline: "middle",
          opacity: 0.2
        }}
      >
        N
      </text>
      <text
        x="2310"
        y="370"
        style={{
          fill: color,
          stroke: "none",
          fontSize: "125px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          dominantBaseline: "middle",
          textAnchor: "end",
          opacity: 0.2
        }}
      >
        T
      </text>
    </svg>
  )
}

export default SkateboardTemplate

