// react
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPix } from "react-icons/md";
import { CiBarcode } from "react-icons/ci";
import { BsCreditCard } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { BsJournalArrowUp } from "react-icons/bs";

//
import Produtos from "../produtos"; 
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"; 

const CarrosselProdutos = () => {
    
        const produtos = [
           {
          img: <CiBarcode />,
          titulo: "Boleto",
          txt: "Pague ou parcele em até 12 vezes seus boletos com o cartão de crédito e tenha mais controle sobre o seu dinheiro."
        },
        {
          img: <MdPix />,
          titulo: "Pix",
          txt: "Faça um Pix e pague com o cartão de crédito: não use o saldo da sua conta e concentre os gastos no cartão."
        },
        {
          img: <BsCreditCard />,
          titulo: "Cartão Adicional",
          txt: "Cartão de crédito físico adicional para ser compartilhado com outra pessoa utilizando o mesmo limite."
        },
        {
          img: <BsJournalArrowUp />,
          titulo: "Beneficios",
          txt: "Aproveite uma série de benefícios exclusivos ao usar nosso cartão, como recompensas, descontos e muito mais."
        },
        {
          img: <BiUser />,
          titulo: "Conta",
          txt: "Receba, movimente e guarde seu dinheiro de um jeito simples e com rendimento maior que a poupança."
        },
        {
          img: <BsFillTelephoneFill />,
          titulo: "Fale Conosco",
          txt: "Entre em contato conosco a qualquer momento para obter suporte e assistência."
        },
        {
          img: <BsCreditCard />,
          titulo: "Desbloqueio de Cartão",
          txt: "Saiba como desbloquear o seu cartão de crédito de forma rápida e fácil."
        },
        {
          img: <BiUser />,
          titulo: "Conta Universitária",
          txt: "Desfrute de vantagens financeiras projetadas para estudantes, como isenção de taxas e facilidades de pagamento."
        },
      ];
  
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const slideToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const slideToNext = () => {
    sliderRef.current.slickNext(); 
  };

  return (
    <div className="carrossel-produtos">
      <Slider ref={sliderRef} {...settings}>
        {produtos.map((produto, index) => (
          <div key={index}>
            <Produtos img={produto.img} titulo={produto.titulo} txt={produto.txt} />
          </div>
        ))}
      </Slider>
      <div class="setas">
          <div className="seta-esquerda seta" onClick={slideToPrev}>
            <BsFillArrowLeftCircleFill /> {/* Ícone de seta para a esquerda */}
          </div>
          <div className="seta-direita seta" onClick={slideToNext}>
            <BsFillArrowRightCircleFill   /> {/* Ícone de seta para a direita */}
          </div>
              </div>
      </div>
  );
};

export default CarrosselProdutos;
