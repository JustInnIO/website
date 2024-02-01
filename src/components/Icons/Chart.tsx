import React, { forwardRef } from "react";

import { type SvgIconProps, Icon } from "../Icon";

export const Chart = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ color = "currentColor", ...props }: SvgIconProps, forwardedRef) => {
    return (
      <Icon {...props}>
        <svg
          fill={color}
          height="inherit"
          ref={forwardedRef}
          viewBox="0 0 16 16"
          width="inherit"
          {...props}
        >
          <g clip-path="url(#clip0_632_1605)">
            <path
              d="M0.941176 9.77775C0.420706 9.77775 0 10.176 0 10.6666V15.1111C0 15.6018 0.420706 16 0.941176 16C1.46165 16 1.88235 15.6018 1.88235 15.1111V10.6666C1.88235 10.176 1.46165 9.77775 0.941176 9.77775Z"
              fill="#6C2BD9"
            />
            <path
              d="M5.64706 6.22217C5.12659 6.22217 4.70588 6.6204 4.70588 7.11107V15.1111C4.70588 15.6018 5.12659 16 5.64706 16C6.16753 16 6.58824 15.6018 6.58824 15.1111V7.11107C6.58824 6.6204 6.16753 6.22217 5.64706 6.22217Z"
              fill="#6C2BD9"
            />
            <path
              d="M10.3529 9.77775C9.83247 9.77775 9.41177 10.176 9.41177 10.6666V15.1111C9.41177 15.6018 9.83247 16 10.3529 16C10.8734 16 11.2941 15.6018 11.2941 15.1111V10.6666C11.2941 10.176 10.8734 9.77775 10.3529 9.77775Z"
              fill="#6C2BD9"
            />
            <path
              d="M15.0588 6.22217C14.5384 6.22217 14.1176 6.6204 14.1176 7.11107V15.1111C14.1176 15.6018 14.5384 16 15.0588 16C15.5793 16 16 15.6018 16 15.1111V7.11107C16 6.6204 15.5793 6.22217 15.0588 6.22217Z"
              fill="#6C2BD9"
            />
            <path
              d="M0.940235 7.11107C1.21035 7.11107 1.47765 7.00173 1.66494 6.79107L5.64706 2.27726L9.62918 6.79107C9.98776 7.1964 10.7172 7.1964 11.0758 6.79107L15.7816 1.4577C16.1148 1.08081 16.0602 0.519922 15.6612 0.206143C15.2602 -0.108526 14.6682 -0.0569701 14.3351 0.319921L10.3529 4.83372L6.37082 0.319921C6.01224 -0.0854147 5.28282 -0.0854147 4.92424 0.319921L0.218353 5.65328C-0.114824 6.03017 -0.0602355 6.59106 0.338823 6.90484C0.514823 7.04351 0.727529 7.11107 0.940235 7.11107Z"
              fill="#6C2BD9"
            />
          </g>
          <defs>
            <clipPath id="clip0_632_1605">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Icon>
    );
  }
);
Chart.displayName = "Chart";

export default Chart;
