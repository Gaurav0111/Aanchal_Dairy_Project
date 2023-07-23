import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border: 1px solid #d4d4d4;
  padding: 20px;

  form {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    border-top: 0.5rem solid #d4d4d4;
    padding: 20px; /* Increased the padding to increase the height of the form */
    text-align: center;
    background-color: #fff;
    height: 400px;
  }

  .factoryLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: #4e9b8d;
  }

  .factoryLogo img {
    margin-right: 2rem;
    max-width: 100px;
  }

  .factoryLogo h1 {
    margin-left: 10px;
  }

  h3 {
    margin-bottom: 20px;
    color: #4e9b8d;
  }

  .lableInput {
    display: block;
    text-align: left;
    margin-bottom: 8px;
    color: #4e9b8d;
    padding-left: 2rem;
  }

  .formInput {
    width: 100%;
    max-width: 300px;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s ease-in-out;
  }

  .formInput:focus {
    outline: none;
    border-color: #4e9b8d;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    padding: 12px;
    border: none;
    border-radius: 4px;
    background-color: #4e9b8d;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .btn:hover {
    background-color: #409383;
  }

  @media (max-width: 768px) {
    padding: 10px;

    form {
      padding: 10px; /* Adjusted the padding for smaller screens */
    }

    .factoryLogo {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    .lableInput {
      font-size: 0.9rem;
    }

    .formInput,
    .btn {
      font-size: 0.9rem;
    }
  }
`;

export default Wrapper;
