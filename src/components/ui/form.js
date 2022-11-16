// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

function gridAreaFunc (props) { return props.gridArea || ''; }
function margin (props) { return props.margin || '.4em 0 .3rem 0'; }
function padding (props) { return props.padding || '.1em 0 .1rem 0'; }
function justifySelf (props) { return props.justifySelf || ''; }
function alignSelf (props) { return props.alignSelf || ''; }
function lineHeight (props) { return props.lineHeight || 1; }
function mediaQuery (props) { return props.mediaQuery || null; }
function transform (props) { return props.transform || ''; }

const FormInputWrapper = styled.div`
  grid-area: ${gridAreaFunc};
  display: grid;
  grid-template-areas: "label" "input";
  grid-template-rows: 2.5em 3em;

  @media (max-width: 1200px) {
    grid-template-rows: 1.8em 3em;
  }

  @media (max-width: 580px) {
    grid-template-rows: 1.6em 2.6rem;
  }
`;

const TextAreaWrapper = styled.div`
  grid-area: ${gridAreaFunc};
  display: grid;
  grid-template-areas: "label" "textarea";
  grid-template-rows: 2.5rem 17rem;

  @media (max-width: 1200px) {
    grid-template-rows: 1.8em 15rem;
  }

  @media (max-width: 580px) {
    grid-template-rows: 1.6em 10rem;
  }
`;

const FormLabel = styled.label`
  grid-area: label;
  font-family: ${fonts.mono.fontFamily};
  font-weight: ${fonts.mono.light.weight};
  font-style: ${fonts.mono.light.style};
  font-size: 1rem;
  color: ${colors.greys.seven};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  transform: ${transform};
  ${mediaQuery}

  @media (max-width: 580px) {
    font-size: .9rem;
  }
  `;

const Input = styled.input`
  grid-area: input;
  border: .1rem solid ${colors.greys.seven};
  background-color: ${colors.greys.one};
  padding: .2em 1em .2em 1em;
  color: ${colors.greys.seven};
  font-size: 1.6rem;
  font-weight: ${fonts.mono.light.weight};
  font-family: ${fonts.mono.fontFamily};
  box-shadow: 4px 4px 0 ${colors.colors.green};

  &:hover {
    border-color: ${colors.colors.orange};
  }

  &:focus {
    outline: none;
    border-color: ${colors.colors.orange};
    box-shadow: 4px 4px 0 ${colors.greys.six};
  }

  &::placeholder {
    color: ${colors.greys.six};
  }

  @media (max-width: 580px) {
    font-size: 1.2rem;
    padding: .1em 1em .2em 1em;
  }
`;

const TextArea = styled.textarea`
  grid-area: textarea;
  border: .1rem solid ${colors.greys.seven};
  background-color: ${colors.greys.one};
  padding: .2em 1em .2em 1em;
  color: ${colors.greys.seven};
  font-size: 1.6em;
  font-weight: ${fonts.mono.light.weight};
  font-family: ${fonts.mono.fontFamily};
  box-shadow: 4px 4px 0 ${colors.colors.green};
  resize: none;

  &:hover {
    border-color: ${colors.colors.orange};
  }

  &:focus {
    outline: none;
    border-color: ${colors.colors.orange};
    box-shadow: 4px 4px 0 ${colors.greys.six};
  }

  &::placeholder {
    color: ${colors.greys.five};
  }

  @media (max-width: 580px) {
    font-size: 1.2rem;
    padding: .1em 1em .2em 1em;
  }
`;

export function FormInput ({ label, placeholder, name, onChange, gridArea, value }) {
  return (
    <FormInputWrapper gridArea={gridArea}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        id={name}
      />
    </FormInputWrapper>
  );
}

export function FormTextArea ({ label, placeholder, name, onChange, gridArea, value }) {
  return (
    <TextAreaWrapper gridArea={gridArea}>
      <FormLabel for={name}>{label}</FormLabel>
      <TextArea
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        id={name}
      />
    </TextAreaWrapper>
  );
}
