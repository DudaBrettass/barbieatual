// Feito por Ana Lívia Gregório e Marya Eduarda Fernandes Brettas

import React from 'react';
import { Header } from '../components/Header';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #fdbefd;
  text-align: center;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
 

function Info() {
    return (
      <div style={{backgroundColor: '#fda2e9'}}>
        <Header/>
        
        <div style={{marginTop: '70px'}}>
          <h1 style={{ color: '#e22f8a'}}>Por que este tema?</h1>
        </div>
        
        <div style={{display: 'flex', 
        gap: '150px', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        marginBottom: '70px', 
        marginTop: '70px'}}>

          <div style={{ height: '325px', 
          width: '300px', 
          backgroundColor: '#ffe5ff', 
          padding: '10px', 
          border: '2px solid #e22f8a', 
          borderRadius: '5%'}}>

            <p style={{ color: '#e22f8a', 
            fontSize: '20px' }}><b>Ana:</b></p>

            <p style={{ color: '#e22f8a', 
            fontSize: '18px' }}>"Escolhemos criar um site de filmes da Barbie, um ícone que inspirou inúmeras crianças ao redor do mundo com sua versatilidade. A Barbie nos ensinou que podemos ser quem quisermos ser, e essa é uma mensagem poderosa que queríamos trazer para o nosso projeto."</p>
        
        </div>
        
        <div style={{ height: '325px', 
        width: '300px', 
        backgroundColor: '#ffe5ff', 
        padding: '10px', 
        border: '2px solid #e22f8a', 
        borderRadius: '5%' }}>

          <p style={{ color: '#e22f8a', 
          fontSize: '20px' }}><b>Marya:</b></p>
          
          <p style={{ color: '#e22f8a', 
          fontSize: '18px' }}>"Os filmes da Barbie são conhecidos por suas histórias envolventes e mensagens positivas. Queríamos criar um espaço onde os fãs pudessem explorar esse universo encantador. Nosso objetivo era criar algo que refletisse a diversidade e a criatividade dos filmes da Barbie."</p>
        
        </div>
        
        </div>

        <div style={{ display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '60vh', 
        marginTop: '-90px'}}>
        
          <div style={{ display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100px', 
          width: '1000px', 
          padding: '10px'}}>
           
              <p style={{ color: '#e22f8a'}}><b>Escolhemos criar um site de filmes da Barbie, reconhecendo o impacto que a Barbie teve em muitas crianças ao redor do mundo. A versatilidade da Barbie, que nos ensinou que podemos assumir qualquer papel que quisermos, foi um fator motivador para este projeto. Os filmes da Barbie são bem conhecidos e apreciados por suas histórias envolventes e mensagens positivas. Nosso objetivo com este site é criar um espaço onde os fãs possam explorar o universo dos filmes da Barbie e refletir a diversidade e a criatividade que eles representam.</b></p> 
          
          </div>
        
        </div>
        
        <div>
        
        <h1 style={{ color: '#e22f8a', 
        marginTop: '-60px'}}>Back-End</h1>
        </div>
        
        <div style={{display: 'flex', 
        gap: '150px', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        marginBottom: '70px', 
        marginTop: '70px'}}>

          <div style={{ width: '750px', 
          backgroundColor: '#ffe5ff', 
          padding: '10px', 
          border: '2px solid #e22f8a', 
          borderRadius: '5%'}}>

            <p style={{ color: '#e22f8a', 
            fontSize: '20px' }}><b>Banco de Dados</b></p>
            
            <p style={{ color: '#e22f8a', 
            fontSize: '18px', 
            textAlign: 'justify', 
            marginLeft: '10px', 
            marginRight: '10px'}}>Estamos usando um serviço chamado ElephantSQL para o nosso site de filmes. O ElephantSQL é um serviço de banco de dados PostgreSQL que é hospedado na nuvem. Ele nos permite criar e gerenciar bancos de dados PostgreSQL sem a necessidade de lidar com a infraestrutura subjacente.
              <br/>  No nosso site de filmes, usamos o ElephantSQL para armazenar e gerenciar os dados dos filmes. Esses dados incluem títulos, capas, descrições e durações dos filmes. Cada filme é representado como um registro na tabela do banco de dados, e cada atributo do filme (título, capa, descrição, duração) é armazenado como uma coluna na tabela.
              Por exemplo, temos uma tabela chamada `Filmes` com as seguintes colunas:
              <br/>
              <br/>1. `Nome`: Armazena o título do filme.
              <br/>2. `Img`: Armazena o link para a imagem da capa do filme.
              <br/>3. `Descricao`: Armazena uma breve descrição do filme.
              <br/>4. `Duracao`: Armazena a duração do filme em minutos.
              <br/>
              <br/>
              Quando um usuário visita o nosso site, o nosso aplicativo consulta o banco de dados ElephantSQL para recuperar os dados dos filmes e exibi-los na interface do usuário. Isso permite que o nosso site seja dinâmico e facilmente atualizável, pois adicionar um novo filme ao site é tão simples quanto adicionar um novo registro à tabela `Filmes` no banco de dados.
              Além disso, o ElephantSQL oferece uma série de recursos úteis, como backups automáticos, monitoramento de desempenho e escalabilidade fácil, tornando-o uma escolha popular para aplicações web modernas.</p>
        </div>
        </div>
        
        <div style={{display: 'flex', 
        gap: '150px', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        marginBottom: '70px', 
        marginTop: '70px'}}>
          
          <div style={{ width: '750px', 
          backgroundColor: '#ffe5ff', 
          padding: '10px', 
          border: '2px solid #e22f8a', 
          borderRadius: '5%'}}>

            <p style={{ color: '#e22f8a', 
            fontSize: '20px' }}><b>API</b></p>
            
            <p style={{ color: '#e22f8a', 
            fontSize: '18px', 
            textAlign: 'justify', 
            marginLeft: '10px', 
            marginRight: '10px'}}>Nós construímos esta API usando o framework Express.js para Node.js, que é uma estrutura popular para a construção de APIs web. Nossa API se conecta a um banco de dados PostgreSQL usando o pacote `pg`.
              <br/>
              <br/>
              Nossa API tem várias rotas que correspondem a diferentes endpoints:
              <br/>
              <br/>
              1. Uma rota GET para a raiz ("/") que retorna uma mensagem de confirmação de que o servidor está disponível.
              <br/>
              2. Uma rota GET para "/filmess" que retorna todos os filmes do banco de dados.
              <br/>
              3. Uma rota GET para "/filmess/:id" que retorna um filme específico com base no ID fornecido na URL.
              <br/>
              <br/>
              Nossa API usa o middleware `cors` para permitir solicitações de origens cruzadas, o que é útil se a API for usada por um cliente em um domínio diferente.
              <br/>
              Finalmente, nossa API começa a ouvir em uma porta específica, pronta para receber solicitações HTTP. A porta é definida em um arquivo de configuração separado. 
              <br/>
              Em resumo, nossa API fornece uma maneira de interagir com um banco de dados de filmes através de uma interface HTTP, permitindo operações como busca de filmes.</p>
        </div>
        </div>
        <Footer>
        <p style={{color: '#e02d88'}}>© 2023 BarbieFlix. Criado por Ana Lívia Gregório e Marya Eduarda Fernandes Brettas. Todos os direitos reservados.</p>
      </Footer>
      </div>
    );
  }

export default Info;
