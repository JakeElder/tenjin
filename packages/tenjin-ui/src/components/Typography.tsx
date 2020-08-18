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
  fontWeight?: "regular" | "bold";
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
  fontWeight: "bold",
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

export const ExerciseSubheading = LongformDetail;

export const LongformSubheading = copyFactory({
  fontFamily: "heading",
  fontSize: 4,
  fontWeight: "bold",
  color: "shades.0",
});

export const ExerciseHeading = LongformSubheading;

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
  fontWeight: "bold",
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
      color: "shades.7",
    },
  }
);

export const MastHeading = copyFactory({
  fontFamily: "heading",
  fontSize: 4,
  color: "shades.2",
});

export const MastCaption = copyFactory({
  fontFamily: "body",
  fontSize: 0,
  color: "shades.5",
});

export const OrientationHeading = copyFactory({
  fontFamily: "heading",
  fontSize: 3,
  color: "shades.4",
});

export const OrientationSummary = copyFactory({
  fontFamily: "body",
  fontSize: 1,
  color: "shades.6",
});

export const TOCHeading = copyFactory({
  fontFamily: "heading",
  fontSize: 1,
  fontWeight: "bold",
  color: "shades.4",
});

export const TOCSubheading = copyFactory({
  fontFamily: "heading",
  fontSize: 2,
  color: "shades.4",
});

export const ChapterLink = copyFactory({
  fontFamily: "body",
  fontSize: 3,
  color: "link.1",
});

export const IconLink = ChapterLink;

export const GridHeader = copyFactory<"active">(
  {
    fontFamily: "heading",
    fontSize: 5,
    color: "shades.8",
  },
  {
    active: {
      color: "shades.3",
    },
  }
);

export const PhaseStep = copyFactory<"active">(
  {
    fontFamily: "heading",
    fontSize: 4,
    color: "shades.8",
  },
  {
    active: {
      color: "brand.0.0",
    },
  }
);

export const Button = copyFactory<"disabled">(
  {
    fontFamily: "heading",
    fontSize: 3,
    color: "link.0",
  },
  {
    disabled: {
      color: "shades.8",
    },
  }
);
