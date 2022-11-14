// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../styles/colors';

import Layout from '../components/layout';
import { JumboSmall, Label } from '../components/text';
import { FormInput, FormTextArea } from '../components/form';

import Arrow from '../svg/PostLinkArrow.svg';

const Wrapper = styled.section`
  display: grid;
  grid-template-areas: "content";
  justify-items: center;
`;

const ContentWrapper = styled.div`
  grid-area: content;
  display: grid;
  margin: 13rem 0 0 0;
  grid-template-areas: "cta" "form";
  grid-template-rows: 11rem auto;

  @media (max-width: 1600px) {
    margin: 5rem 0 0 0;
    grid-template-rows: 9rem auto;
  }
`;

const FormWrapper = styled.form`
  grid-area: form;
  display: grid;
  grid-template-areas: "form-inputs submit";
  grid-template-columns: 34em auto;
  column-gap: 8rem;

  @media (max-width: 1200px) {
    grid-template-areas: "form-inputs" "submit";
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
  }
`;

const InputsWrapper = styled.div`
  grid-area: form-inputs;
  display: grid;
  grid-template-areas: "name" "email" "message";
  grid-template-rows: 6rem 6rem 20rem;
  row-gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-rows: 4.5rem 4.5rem 16rem;
  }
`;

const Button = styled.button`
  grid-area: submit;
  height: 4em;
  border: none;
  background: none;
  margin: 6rem 0 0 0;

  path {
    fill: ${(props) => (props.isHovered ? colors.greys.six : colors.greys.four)};
  }

  &:active {
    path {
      fill: ${colors.colors.green};
    }
  }

  @media (max-width: 1200px) {

  }
`;

function Contact () {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [isHovered, setIsHovered] = useState(false);

  function handleChange (e) {
    e.preventDefault();

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleClick (e) {
    e.preventDefault();
  }
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <JumboSmall justifySelf="start">
            Get in touch
            <span style={{ color: colors.colors.orange }}>!</span>
          </JumboSmall>
          <FormWrapper>
            <InputsWrapper>
              <FormInput
                gridArea="name"
                label="Name"
                placeholder="Name"
                onChange={handleChange}
                name="name"
                value={formData.name}
              />
              <FormInput
                gridArea="email"
                label="Email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
              <FormTextArea
                gridArea="message"
                label="Message"
                placeholder="Message"
                onChange={handleChange}
                name="message"
                value={formData.message}
              />
            </InputsWrapper>
            <Button
              onClick={handleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              isHovered={isHovered}
            >
              <Label
                margin="0 0 -.5rem -9rem"
                color={isHovered ? colors.colors.orange : colors.greys.six}
              >
                Send it!
              </Label>
              <Arrow />
            </Button>
          </FormWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

export default Contact;
