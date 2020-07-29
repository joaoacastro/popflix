import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 50px;
`;

function pageDefault({children}){
    return (
        <> {/* para o react essa "tag" vazia é chamada de fragment, ou pode ser usado tbm <React.Fragment> */}
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default pageDefault;