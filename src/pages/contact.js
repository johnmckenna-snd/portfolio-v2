// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { colors } from '../styles/colors';

import Layout from '../components/layout';
import { JumboSmall } from '../components/ui/text';
import { FormInput, FormTextArea } from '../components/ui/form';
import { Button } from '../components/ui/button';

const API_URL = process.env.GATSBY_API_URL;

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

  @media (max-width: 1200px) {
    margin: 5rem 0 20vh 0;
    grid-template-rows: 9rem auto;
  }

  @media (max-width: 580px) {
    margin: 5rem 0 20vh 0;
    grid-template-rows: 7rem auto;
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

  @media (max-width: 580px) {
    grid-template-rows: 4rem 4rem 8rem;
  }
`;

function Contact () {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  function handleChange (e) {
    e.preventDefault();

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleClick (e) {
    try {
      e.preventDefault();
      setLoading(true);
      console.log('Button Clicked!', formData);
      const { name, email, message } = formData;

      const headers = { 'Access-Control-Allow-Origin': 'https://www.johnmckenna.io', 'Content-Type': 'application/json' };

      const result = await axios.post(API_URL, { name, email, content: message }, headers);
      if (result.status === 200) setLoading(false);
    } catch (err) {
      console.error(err);
    }
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
              label="Send it!"
              margin="6rem 0 0 0"
              alignSelf="top"
            />
          </FormWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

export default Contact;
