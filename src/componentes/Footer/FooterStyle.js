import styled from 'styled-components';

export const FooterStyle = styled.footer`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  color: #fff;
  background-color: #222;
  height: auto;
  padding: 40px 20px;

  h1,
  h2,
  h3,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  /* Footer styles */

  .Intro{
    margin: 5px 5px 0 0;

    p{
        max-width: 300px;
        margin-bottom: 45px;
    }
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }

  .footerServices {
    max-width: 200px;
  }

  .footer-section {
    flex: 1;
    margin: 5px;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  ul {
    list-style: none;
    max-width: 200px;
  }

  ul li {
    margin-bottom: 10px;
    max-width: 200px;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: rgb(16, 187, 64);
  }

  .social-media-icons {
    display: flex;
  }

  .social-media-icons a {
    margin-right: 15px;
    font-size: 1.25rem;
  }

  .footer-bottom {
    width: 100%;
    padding: 0 20px;
    width: 100vw;
    text-align: center;
    padding: 10px 0;
  }

  .footer-bottom p {
    font-size: 0.9rem;
  }

  svg {
    font-size: 2rem;
  }

  @media print {
    display: none;
  }

  @media screen and (max-width: 480px){

    .footer-content{
      flex-flow: column wrap;
      padding: 0;
      gap: 5px;
    }

    p{
      max-width: 75vw;
      padding: 0;
    }

    .copyrights{
      max-width: 90vw;
    }
  }

  @media screen and (max-width: 480px){
    .Intro p {
      width: 380px;
      max-width: 400px;
    }

    img{
      width: 350px;
      height: 85px;
    }
  }
`;