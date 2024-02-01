import React, { forwardRef } from "react";

import { type SvgIconProps, Icon } from "../Icon";

export const RSS = forwardRef<SVGSVGElement, SvgIconProps>(
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
          <path
            d="M13.9463 14.464C13.6639 14.464 13.4351 14.236 13.4343 13.9536C13.4175 7.69601 8.31353 2.58561 2.05673 2.56001C1.77433 2.55921 1.54553 2.32881 1.54713 2.04561C1.54793 1.76321 1.77753 1.53601 2.05913 1.53601H2.06153C2.90073 1.53921 3.73993 1.62721 4.55513 1.79681C5.35033 1.96241 6.13193 2.20801 6.87913 2.52641C7.61273 2.83921 8.32073 3.22561 8.98233 3.67441C9.63833 4.11921 10.2551 4.62881 10.8151 5.19041C11.3759 5.75201 11.8847 6.36961 12.3287 7.02561C12.7767 7.68801 13.1623 8.39681 13.4735 9.13041C13.7911 9.87841 14.0351 10.6608 14.1999 11.456C14.3687 12.272 14.4551 13.1112 14.4575 13.9504C14.4583 14.2328 14.2295 14.4632 13.9471 14.464H13.9463Z"
            fill="white"
          />
          <path
            d="M9.36553 14.4541C9.08313 14.4541 8.85433 14.2261 8.85353 13.9437C8.84313 10.2061 5.79433 7.15327 2.05673 7.13807C1.77433 7.13727 1.54553 6.90687 1.54713 6.62367C1.54793 6.34127 1.77753 6.11407 2.05913 6.11407H2.06153C3.11513 6.11807 4.13673 6.32848 5.09913 6.73888C6.02873 7.13488 6.86393 7.69968 7.58073 8.41808C8.29833 9.13648 8.86233 9.97248 9.25673 10.9021C9.66553 11.8653 9.87433 12.8877 9.87753 13.9405C9.87833 14.2229 9.64953 14.4533 9.36713 14.4541C9.36633 14.4541 9.36553 14.4541 9.36553 14.4541Z"
            fill="white"
          />
          <path
            d="M3.21986 14.464C3.21906 14.464 3.21906 14.464 3.21906 14.464C2.77186 14.464 2.35186 14.2896 2.03586 13.9728C1.38386 13.32 1.38466 12.2584 2.03746 11.6056C2.69026 10.9536 3.75186 10.9544 4.40466 11.6072C5.05666 12.26 5.05586 13.3216 4.40306 13.9744C4.08626 14.2904 3.66626 14.464 3.21986 14.464ZM3.21986 12.1408C3.05346 12.1408 2.88706 12.204 2.76066 12.3304C2.50706 12.5832 2.50706 12.996 2.75986 13.2488C2.88226 13.3712 3.04546 13.4392 3.21906 13.4392H3.21986C3.39346 13.4392 3.55586 13.372 3.67906 13.2496C3.93266 12.9968 3.93266 12.584 3.67986 12.3312C3.55266 12.2048 3.38626 12.1408 3.21986 12.1408Z"
            fill="white"
          />
        </svg>
      </Icon>
    );
  }
);
RSS.displayName = "RSS";

export default RSS;