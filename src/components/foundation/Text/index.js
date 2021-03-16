/* eslint-disable react/jsx-props-no-spreading */
import { css } from 'styled-components';

const inputLabel = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.inputLabel.fontStyle};
    font-weight: ${theme.typographyVariants.inputLabel.fontWeight};
    font-size: ${theme.typographyVariants.inputLabel.fontSize};
    line-height: ${theme.typographyVariants.inputLabel.lineHeight};
  `}
`;

const input = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.input.fontStyle};
    font-weight: ${theme.typographyVariants.input.fontWeight};
    font-size: ${theme.typographyVariants.input.fontSize};
    line-height: ${theme.typographyVariants.input.lineHeight};
  `}
`;

const button = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.button.fontStyle};
    font-weight: ${theme.typographyVariants.button.fontWeight};
    font-size: ${theme.typographyVariants.button.fontSize};
    line-height: ${theme.typographyVariants.button.lineHeight};
  `}
`;

const navBarTitle = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.navBarTitle.fontStyle};
    font-weight: ${theme.typographyVariants.navBarTitle.fontWeight};
    font-size: ${theme.typographyVariants.navBarTitle.fontSize};
    line-height: ${theme.typographyVariants.navBarTitle.lineHeight};
  `}
`;

const titleCard = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.titleCard.fontStyle};
    font-weight: ${theme.typographyVariants.titleCard.fontWeight};
    font-size: ${theme.typographyVariants.titleCard.fontSize};
    line-height: ${theme.typographyVariants.titleCard.lineHeight};
  `}
`;

const subTitleCard = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.subTitleCard.fontStyle};
    font-weight: ${theme.typographyVariants.subTitleCard.fontWeight};
    font-size: ${theme.typographyVariants.subTitleCard.fontSize};
    line-height: ${theme.typographyVariants.subTitleCard.lineHeight};
  `}
`;

const titleDetailCard = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.titleDetailCard.fontStyle};
    font-weight: ${theme.typographyVariants.titleDetailCard.fontWeight};
    font-size: ${theme.typographyVariants.titleDetailCard.fontSize};
    line-height: ${theme.typographyVariants.titleDetailCard.lineHeight};
  `}
`;

const subTitleDetailCard = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.subTitleDetailCard.fontStyle};
    font-weight: ${theme.typographyVariants.subTitleDetailCard.fontWeight};
    font-size: ${theme.typographyVariants.subTitleDetailCard.fontSize};
    line-height: ${theme.typographyVariants.subTitleDetailCard.lineHeight};
  `}
`;

const naverInfoTitleDetailCard = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.naverInfoTitleDetailCard.fontStyle};
    font-weight: ${theme.typographyVariants.naverInfoTitleDetailCard.fontWeight};
    font-size: ${theme.typographyVariants.naverInfoTitleDetailCard.fontSize};
    line-height: ${theme.typographyVariants.naverInfoTitleDetailCard.lineHeight};
  `}
`;

const naverInfoDetailCard = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.naverInfoDetailCard.fontStyle};
    font-weight: ${theme.typographyVariants.naverInfoDetailCard.fontWeight};
    font-size: ${theme.typographyVariants.naverInfoDetailCard.fontSize};
    line-height: ${theme.typographyVariants.naverInfoDetailCard.lineHeight};
  `}
`;

const modalTitle = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.modalTitle.fontStyle};
    font-weight: ${theme.typographyVariants.modalTitle.fontWeight};
    font-size: ${theme.typographyVariants.modalTitle.fontSize};
    line-height: ${theme.typographyVariants.modalTitle.lineHeight};
  `}
`;

const modalsubTitle = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.modalsubTitle.fontStyle};
    font-weight: ${theme.typographyVariants.modalsubTitle.fontWeight};
    font-size: ${theme.typographyVariants.modalsubTitle.fontSize};
    line-height: ${theme.typographyVariants.modalsubTitle.lineHeight};
  `}
`;

const formTitle = css`
  ${({ theme }) => css`
    font-style: ${theme.typographyVariants.formTitle.fontStyle};
    font-weight: ${theme.typographyVariants.formTitle.fontWeight};
    font-size: ${theme.typographyVariants.formTitle.fontSize};
    line-height: ${theme.typographyVariants.formTitle.lineHeight};
  `}
`;

// eslint-disable-next-line import/prefer-default-export
export const TextStyleVariantsMap = {
  inputLabel,
  input,
  button,
  navBarTitle,
  titleCard,
  subTitleCard,
  titleDetailCard,
  subTitleDetailCard,
  naverInfoTitleDetailCard,
  naverInfoDetailCard,
  modalTitle,
  modalsubTitle,
  formTitle,
};
