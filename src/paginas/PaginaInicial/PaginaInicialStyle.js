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
    border: solid var(--preto) 1px;
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

.recursos {
  margin-top: 20px;
}

.recursos h2 {
  font-size: 24px;
  color: var(--cinza-escuro); 
}

.recursos ul {
  list-style-type: none;
  padding: 0;
}

.recursos li {
  margin-bottom: 10px;
  font-size: 18px;
  color: #555; 
  display: flex;
  align-items: center;
}

.recursos li svg {
  margin-right: 10px;
  color: #4CAF50; 
}

.comeceAgora {
    background-color: var(--azul-primario);
    color: var(--branco);
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
    background-color: var(--branco); 
    color: var(--preto); 
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
