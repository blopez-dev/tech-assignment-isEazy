import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #dee2e6;
    background-color: #fff;
    img {
        display: block;
        max-width: 15%;
    }
    .search-input {
        display: flex;
        align-items: center;
    }
    .language-select {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;
