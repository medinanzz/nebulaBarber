import { useForm, ValidationError } from "@formspree/react";
import 'animate.css';
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import { useState } from "react";

const Form = styled.form<{ visible: boolean; delay: string }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible ? "translateY(0)" : "translateY(40px)"};

  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  transition-delay: ${({ delay }) => delay};
  /* padding-bottom: 1em; */
`;

export const Schedule = () => {
  const [state, handleSubmit] = useForm("mnjwyjqk");
  const [textArea, setTextArea] = useState('');
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    
  }
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  }

  const handleSubmitFunction = () => {
    if (email.trim() === '' || textArea.trim() === '') {
      // handleSubmit;
      setHasError('O email ou a mensagem não podem ser vazios!');
      return;
    }
  }

  
    const ref = useRef<HTMLDivElement>(null);
  
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        {
          threshold: 0.2,
        },
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);
  return (
    <>
      <div ref={ref} className="min-h-screen bg-[#444] w-full center-element " id="schedule">
        {state.succeeded ? (
          <h1 className="text-3xl font-bold animate__animated animate__rubberBand text-center">Obrigado pela sua avaliação</h1>
        ) : (
          <Form delay='.3s' visible={visible} onSubmit={handleSubmit} className="w-[60%] h-[60%] center-element flex-col gap-3 bg-[rgb(255,255,255,.1)] rounded-lg backdrop-blur-md max-w-100" style={{ padding: '1em' }}>
            <div className="flex gap-2 flex-col w-[80%] ">
              <label>Seu email</label>
              <input type="email" name="email" id="email" className="rounded-lg border-2 outline-0" value={email} onChange={handleEmail} style={{ padding: '.2em ' }} />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>


            <div className="flex flex-col w-[80%]  gap-3">
              <label>
                Sua mensagem
              </label>
              <textarea
                minLength={5}
                maxLength={500}
                placeholder="Nos avalie"
                rows={5}
                cols={30}
                name="message"
                className="border-2 outline-0"
                style={{ padding: '.4em' }}
                // id="text"
                value={textArea}
                onChange={handleTextArea}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <span className="text-red-500 text-shadow-[0_0_1px_rgb(255,255,255)] font-bold text-lg text-center">{hasError}</span>
            <button
              type="submit"
              disabled={state.submitting}
              onClick={handleSubmitFunction}
              className="w-40 h-9 relative overflow-hidden rounded-md border-2 py-2 transition-all duration-200 shadow-[7px_7px_0_rgb(41,41,41)] outline-0 text-white active:translate-1.75 active:shadow-[0_0_0_rgb(1,1,1)] cursor-pointer "
            >
              <span className="relative z-10">
                {state.submitting ? "Sending..." : "Send"}
              </span>
            </button>
          </Form>
        )}
      </div>
    </>
  );
};
