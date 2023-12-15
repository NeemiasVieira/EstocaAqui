import styled from "styled-components";


export const PaginaInicialStyle = styled.main`

display: flex;
justify-content: center;
align-items: center;
flex-flow: column wrap;
gap: 25px;
overflow-x: hidden;

min-height: 95vh;

.ConteudoPrincipal{
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    gap: 100px;
}

.BoasVindasDiv{
    margin-top: 80px;
    h1, p{
        text-align: center;
    }
}

.imagens{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 50px;
    img{
        width: 200px;
        height: 200px;
        border-radius: 35px;
    }
}

.vantagens{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 10px;
}

.vantagem{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 25px;
    max-width: 490px;
    border: solid #000 1px;
    padding: 10px;
    border-radius: 10px;

    svg{
        height: 30px;
        margin-left: 20px;
    }

    p{
        margin: 8px;
    }

    h3{
        margin: 5px 0 0 0;
    }
}

.descricaoVantagem{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;

    h3{
        margin-right: 33.75px;
    }
}

.Lampada{
    color: #FFD700;
}
.Escudo{
    color: #3498DB;
}
.Rolo{
    color: #4CAF50;
}

/* Estilos para a seção de recursos */
.recursos {
  margin-top: 20px;
}

.recursos h2 {
  font-size: 24px;
  color: #333; /* Cor do texto */
}

.recursos ul {
  list-style-type: none;
  padding: 0;
}

.recursos li {
  margin-bottom: 10px;
  font-size: 18px;
  color: #555; /* Cor do texto */
  display: flex;
  align-items: center;
}

.recursos li svg {
  margin-right: 10px;
  color: #4CAF50; /* Cor do ícone (verde) */
}

.comeceAgora {
    background-color: #123;
    color: #fff;
    text-align: center;
    padding: 50px 0;
    width: 100vw;
  }

  .comeceAgora h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .comeceAgora p {
    font-size: 18px;
    margin-bottom: 30px;
  }

  .comeceAgora button {
    background-color: #fff; 
    color: #000; 
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: all 200ms;
  }

  .comeceAgora button:hover {
    transform: scale(1.1);
  }



`
