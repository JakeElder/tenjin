import React from "react";
import styled from "@emotion/styled";
import { variant } from "styled-system";
import css from "@styled-system/css";
import shouldForwardProp from "@styled-system/should-forward-prop";

// type CopyProps<AS> = {
//   children: React.ReactNode;
//   as: AS;
// };

// type CopyFactoryStyleMap = {
//   fontFamily: "heading" | "body";
//   fontSize: number;
//   color: string;
// };

// type CopyFactoryStyleVariantMap = {
//   [key: string]: Partial<CopyFactoryStyleMap>;
// };

// const Copy = styled("span", { shouldForwardProp })(typography, color);

// function copyFactory<T, V = never>(
//   styles: CopyFactoryStyleMap,
//   variants?: CopyFactoryStyleVariantMap
// ) {
//   const R = ({
//     children,
//     as,
//     ...rest
//   }: CopyProps<T> & { [K in keyof V]: boolean }) => {
//     const { fontFamily, fontSize, color } = styles;
//     return (
//       <Copy
//         as={as}
//         fontFamily={fontFamily}
//         fontSize={fontSize}
//         color={color}
//         {...rest}
//       >
//         {children}
//       </Copy>
//     );
//   };
//   return R;
// }

// type HTMLHeadingTagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
// type HTMLLongformTagName = "p" | "span" | "strong" | "em";
// type HTMLCopyTagName = HTMLLongformTagName | HTMLHeadingTagName;

// export const LongformHeading = copyFactory<HTMLCopyTagName>({
//   fontFamily: "heading",
//   fontSize: 5,
//   color: "shades.0",
// });

// export const ExerciseName = copyFactory<HTMLCopyTagName>({
//   fontFamily: "heading",
//   fontSize: 4,
//   color: "shades.0",
// });

// export const LongformDetail = copyFactory<HTMLCopyTagName>({
//   fontFamily: "heading",
//   fontSize: 3,
//   color: "shades.6",
// });

// export const ExerciseSubheading = copyFactory<HTMLCopyTagName>({
//   fontFamily: "heading",
//   fontSize: 3,
//   color: "shades.6",
// });

// export const LongformSubheading = copyFactory<HTMLCopyTagName>({
//   fontFamily: "heading",
//   fontSize: 4,
//   color: "shades.0",
// });

// export const ExerciseHeading = copyFactory<HTMLCopyTagName>({
//   fontFamily: "heading",
//   fontSize: 4,
//   color: "shades.0",
// });

// export const LongformCopy = copyFactory<HTMLCopyTagName>({
//   fontFamily: "body",
//   fontSize: 2,
//   color: "shades.1",
// });

// export const FigCaption = copyFactory<HTMLCopyTagName>({
//   fontFamily: "body",
//   fontSize: 2,
//   color: "shades.5",
// });

// export const LongformSectionHeading = copyFactory<HTMLCopyTagName>({
//   fontFamily: "heading",
//   fontSize: 4,
//   color: "brand.0.0",
// });

// export const ChecklistHeading = copyFactory<
//   HTMLCopyTagName,
//   "inactive" | "disabled"
// >(
//   {
//     fontFamily: "heading",
//     fontSize: 3,
//     color: "shades.3",
//   },
//   {
//     inactive: {
//       color: "shades.5",
//     },
//   }
// );

// <ChecklistHeading disabled ></ChecklistHeading>;

// export const LongformHeading = styled("span", { shouldForwardProp })(
//   css({
//     fontFamily: "heading",
//     fontSize: 5,
//     color: "shades.0",
//   })
// );

type AnyTag =
  | string
  | React.FunctionComponent<never>
  | (new (props: never) => React.Component);

type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never;

export const LongformHeading = styled<"span", { variant: "disabled" }>("span", {
  shouldForwardProp,
})(
  css({ fontFamily: "heading", fontSize: 5, color: "shades.0" }),
  variant({
    variants: {
      disabled: {
        color: "shades.5",
      },
    },
  })
);

export const Button = styled("span")({
  color: "red",
});

// <LongformHeading as="a" href="#place" va></LongformHeading>;
