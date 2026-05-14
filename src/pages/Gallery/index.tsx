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
`;
export const Courteous = () => {
    const ref = useRef<HTMLDivElement>(null);
    
      const [visible, setVisible] = useState(false);
    
      const courteous = [
        { src: '/courteous1.jpeg', alt: 'Corte 1', desc: 'Um corte estiloso com laterais em fade limpo e topo volumoso com ondas naturais bem definidas. Isso combina atitude e elegância, criando um visual moderno que destaca a textura e o movimento do cabelo.', title: 'Curly Flow Fade', style: 'whitespace-nowrapl', },
        { src: '/courteous2.jpeg', alt: 'Corte 2', desc: 'Corte moderno com degradê baixo muito suave e topo texturizado, trazendo um estilo jovem e descontraído. É perfeito para quem prefere um visual atual, leve e cheio de personalidade.', title: 'Low Fade Texturizado', style: 'whitespace-nowrap', },
        { src: '/courteous3.jpg', alt: 'Corte 3', desc: 'Um visual elegante e sofisticado, com laterais baixas e alinhadas, e volume no topo bem moldado.', title: 'Corte Clássico Moderno', style: 'whitespace-normal', },
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
            <div ref={ref} className="min-h-screen w-full bg-[#222] flex items-center justify-center flex-row flex-wrap gap-4 md:gap-7" style={{
              scrollPaddingTop: '2em',
              padding: '1em',
            }} id='courteous'>
                {courteous.map((item, i) => (
                    <Item key={i} delay={`${i * 0.4}s`} visible={visible} className='flex flex-col items-center justify-center h-[50dvh] w-fit'>
                        <div className="w-60 group rounded-2xl overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-[0_7px_10px_rgb(255,255,255,.15)] md:hover:-translate-y-6">
                          <i className="max-w-50">
                              <img src={item.src} alt={item.alt} width={250} height={200} className="rounded-2xl transition-all duration-300 group-hover:scale-110" />
                          </i>
                          <div className="flex items-start justify-around flex-col bg-[rgb(0,0,0,.6)] absolute h-full w-full top-full group-hover:top-0 transition-all duration-200 pointer-events-none" style={{
                            padding: '1em'
                          }}>
                            <h4 className={`font-bold text-xl ${item.style}`}> {item.title} </h4>
                            <p className="flex-1" style={{
                              paddingTop: '1em',
                            }}> {item.desc} </p>
                          </div>
                        </div>
                    </Item>
                ))}
            </div>
        </>
    )
}