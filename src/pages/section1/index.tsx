import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  margin-left: .5em;
`;

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Item = styled.div<{ delay: string }>`
  opacity: 0;
  animation: ${reveal} 0.8s ease forwards;
  animation-delay: ${({ delay }) => delay};
`;

export const Section1 = () => {
  return (
    <>
      <div className="min-h-screen w-full" id="home">
        <div className="w-full h-screen bg-bottom-right bg-no-repeat bg-cover gap-4 bg-[url('/bgBarber.jpg')] absolute inset-0 flex flex-col md:items-center md:justify-between items-start justify-center md:flex-row" >
          <div className="flex flex-col gap-4">
            <Item delay='0s'>
              <Title className="font-bold text-5xl drop-shadow-lg md:text-5xl text-white">Nebula baber</Title>
            </Item>
            <Item delay='0.5s' datatype="description" className="flex flex-col gap-2 backdrop-blur-2xl w-[90%] rounded-2xl shadow-2xl max-w-215" style={{marginLeft: '1em', padding: '1em' }}>
              <p className="text-white text-xl">
                Na Nebula Barber, cada corte é uma experiência fora do comum.
              </p>
              <p className="text-white text-xl">
                Aqui, o cliente não vem apenas cortar o cabelo vem renovar a autoestima.
              </p>
              <p className="text-white text-xl">
                Especializada em degradês, desenhos, barba e cortes modernos, a Nebula Barber entrega precisão em cada detalhe.
              </p>
            </Item>
          </div>
          <div className="hidden md:block">
            <Item delay='1s' className='group overflow-hidden rounded-md' >
              <img src="/barberPhoto.png" width={500} alt="Barber photo" className="group-hover:scale-110 transition-all duration-200 hidden md:block blur-[2px] group-hover:blur-[0] " style={{
                marginRight: '4em'
              }} />
            </Item>
          </div>
          <div className="absolute bottom-8 left-[50%] translate-x-[-50%] block md:hidden">
            <Item delay='1s'>
              <Link to='courteous' className="text-xl cursor-pointer text-zinc-500 relative courteous ">Ver cortes</Link>
            </Item>
          </div>
        </div>
      </div>
    </>
  );
};
