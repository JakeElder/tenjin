import React from "react";
import css from "@styled-system/css";
import _ from "lodash";

type CopyProps = {
  as: string;
  children: React.ReactNode;
};

type CopyFactoryStyleMap = {
  fontFamily: "heading" | "body";
  fontSize: number;
  color: string;
};

type CopyFactoryModifierMap = {
  [key: string]: Partial<CopyFactoryStyleMap>;
};

function copyFactory<M extends string>(
  styles: CopyFactoryStyleMap,
  modifierStyles: CopyFactoryModifierMap = {}
) {
  const R = ({
    children,
    as,
    ...modifiers
  }: CopyProps & Partial<{ [key in M]: boolean }>) => {
    const mergedStyles = _.reduce(
      modifiers,
      (result, _, key) => {
        return { ...result, ...modifierStyles[key] };
      },
      styles
    );

    const C = as as React.ReactType;
    return <C children={children} css={css(mergedStyles)} />;
  };

  R.defaultProps = { as: "span" } as Partial<CopyProps>;

  return R;
}

export const LongformHeading = copyFactory({
  fontFamily: "heading",
  fontSize: 5,
  color: "shades.0",
});

export const ExerciseName = copyFactory({
  fontFamily: "heading",
  fontSize: 4,
  color: "shades.0",
});

export const LongformDetail = copyFactory({
  fontFamily: "heading",
  fontSize: 3,
  color: "shades.6",
});

export const ExerciseSubheading = copyFactory({
  fontFamily: "heading",
  fontSize: 3,
  color: "shades.6",
});

export const LongformSubheading = copyFactory({
  fontFamily: "heading",
  fontSize: 4,
  color: "shades.0",
});

export const ExerciseHeading = copyFactory({
  fontFamily: "heading",
  fontSize: 4,
  color: "shades.0",
});

export const LongformCopy = copyFactory({
  fontFamily: "body",
  fontSize: 2,
  color: "shades.1",
});

export const FigCaption = copyFactory({
  fontFamily: "body",
  fontSize: 2,
  color: "shades.5",
});

export const LongformSectionHeading = copyFactory({
  fontFamily: "heading",
  fontSize: 4,
  color: "brand.0.0",
});

export const ChecklistHeading = copyFactory<"inactive">(
  {
    fontFamily: "heading",
    fontSize: 3,
    color: "shades.3",
  },
  {
    inactive: {
      color: "shades.5",
    },
  }
);

<ChecklistHeading inactive></ChecklistHeading>;
