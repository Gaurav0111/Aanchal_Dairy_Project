import styled from 'styled-components';

const Wrapper = styled.main`
 
  background-color: #f0f0f0;
  box-sizing: border-box; 
  .navBar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f0f0f0; 
    box-sizing: border-box;
  }

  .division_1 {
    display: flex;
    align-items: center;
    margin-left: 3rem; 
  }

  .logo_1 {
    height: 6rem;
    cursor: pointer;
    border: solid 0.1em;
    margin-right: 10px;
  }

  .factoryName {
    cursor: pointer;
    padding: 2rem;
    color: #4e9b8d;
  }

  .loginTag {
    display: block;
    color: #4e9b8d;
    padding: 0rem 4rem;
    text-decoration: none;
    font-size: 1.5rem;
  }

  .heading1 {
    padding: 0rem 3rem;
    color: #406c63;
    /* background-color: #f0f0f0; */
    padding-top: 3rem;
    span {
      color: #4e9b8d;
    }
  }

  .container_1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start; 
    padding: 0rem 3rem;
  }

  .content {
    flex: 1; 
    padding-right: 1rem; 
  }

  .btn {
    margin: 1rem 0; 
    padding: 0.6rem 2.8rem;
    background: #63c9c9;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease-in-out;
  }

  .btn:hover {
    transform: scale(1.1); 
    background: #4cb2b2; 
    font-size: 1.5rem;
  }

  .landingpageMaineImage {
    width: 100%; 
    margin-top: 1rem;
  }

  /* Responsive Media Queries */
  @media (max-width: 1050px) {
    .navBar {
      flex-direction: column;
      align-items: center;
    }

    .factoryName {
      padding: 1rem;
    }

    .loginTag {
      padding: 0.5rem; 
    }

    .heading1 {
      padding: 2rem; 
    }

    .container_1 {
      flex-direction: column; 
      padding: 0rem 1rem; 
    }
  }
`;

export default Wrapper;
