import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Item = styled.div<{ visible: boolean; delay: string }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible ? "translateY(0)" : "translateY(40px)"};

  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  transition-delay: ${({ delay }) => delay};
  /* padding-bottom: 1em; */
`;

export const Section2 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  const barbers = [
    {
      image: "/barber1.jpg",
      name: "Kael Monteiro",
      desc: "Especialista em degradês modernos e alinhamentos perfeitos.",
    },
    {
      image: "/barber2.jpg",
      name: "Ryan Lopes",
      desc: "Mestre da navalha e dos estilos clássicos com toque moderno.",
    },
    {
      image: "/barber3.jpg",
      name: "Dante Cruz",
      desc: "Criativo nos freestyle e cortes diferenciados.",
    },
  ];

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
      <div
        id="barbers"
        ref={ref}
        datatype="barbers"
        className="relative min-h-screen flex items-center justify-center flex-col gap-4 md:flex-row"
        style={{
            margin: '1em 0',
            padding: '2em 0',
            scrollPaddingTop: '10em',
        }}
      >
        {barbers.map((barber, index) => (
          <Item
            key={barber.name}
            visible={visible}
            delay={`${index * 0.4}s`}
            className="w-[90%] max-w-125 "
          >
            <div className="flex flex-col h-[45dvh] items-center gap-4 text-center backdrop-blur-md p-6 rounded-3xl shadow-2xl transition-all duration-300 hover:-translate-y-5 hover:z-10 group" style={{paddingBottom: '1em',}}>
              <img
                src={barber.image}
                alt={barber.name}
                title={barber.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-white transition-all duration-300 group-hover:-translate-y-5 group-hover:shadow-[0_7px_10px_rgb(255,255,255,.1)] "
              />

              <h2 className="text-2xl font-bold">{barber.name}</h2>

              <p className="text-lg text-gray-300">{barber.desc}</p>
            </div>
          </Item>
        ))}
      </div>
    </>
  );
};
