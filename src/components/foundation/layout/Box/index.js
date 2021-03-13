import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

// eslint-disable-next-line import/prefer-default-export
export const Box = styled.div`
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('alignItems')}
    ${propToStyle('flex')}
    ${propToStyle('alignSelf')}
    ${propToStyle('flexWrap')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('width')}
    ${propToStyle('height')}
    ${propToStyle('border')}
    ${propToStyle('paddingTop')}
    ${propToStyle('paddingBottom')}
    ${propToStyle('paddingLeft')}
    ${propToStyle('paddingRight')}
`;
