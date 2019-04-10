# Vaga de dev Mobile na indWise

A indWise é uma solução de internet das coisas industrial que coleta dados de funcionamento de linhas de produção e gera relatórios gerenciais com inteligência para gerenciar a operação de linhas de produção.

Mas somos mais do que isso. Somos uma oportunidade única de trabalho fora do comum, e nós vamos lhe explicar porque:

- Somos uma startup que nasceu com o objetivo de construir uma solução de indústria 4.0; Nossa solução é composta por hardware e software e exploramos novas maneiras de implementar soluções de automação industrial;
- Somos uma das 5 startups vencedoras do Fiemg Lab e fomos investidos pelo BMG Uptech.
- Fomos premiados nacionalmente pela UFMG no UFMG Challenge e internacionalmente pelo MIT no Business Plan Competition.
- Fazemos parte de grupos estratégicos de negócios que estão ajudando a transformar a realidade da indústria no país.
- Temos a solução instalada em indústrias gerando resultados.
- Estamos buscando alguém com sangue no olho para construir história dentro do ramo industrial conosco, trabalhando direto com uma equipe forte, participando de forma ativa de nossa caminhada. E vai ter um experiência completa de trabalhar em uma startup em crescimento.

# Descrição da vaga:

## Um pouco sobre nós, como é o trabalho e a estrutura atual da indWise
Nossa equipe é formada por engenheiros de controle e automação, engenheiros de produção, cientistas da computação e engenheiros mecânicos. Nós temos uma longa jornada com este projeto, no início de 2018 chegamos a 4a etapa do Fiemg Lab, programa onde entraram 100 startups e selecionaram as 5 melhores. Atualmente estamos expandindo a equipe, e caminhando rumo ao Breakeven.

Na parte de desenvolvimento e tecnologia somos dois desenvolvedores somos apaixonados pela cultura maker e hackear coisas, nós temos projetos próprios que vão desde fazer hidromel (e controlar a temperatura de frigobares) até fazer uma fita genérica de SNES usando um SD card.
Nós somos responsáveis por todo (enorme) stack tecnológico que é composto pelas seguintes partes:
   - Hardware coletor de dados - **C++** - Utilizando nosso próprio hardware que é um processador ARM Cortex-M+
   - Gateway integrador - **C# Mono** - Gateway embarcado.
   - Cloud - **Node.js com framework (sails.js)** - Nosso backend
   - Mobile - **HTML/CSS/JS com framework (react.js)** - Nossos dashboards com as análises de dados
   - Análise de dados - **Java** - Nós buscamos dados via REST, e transformamos em indicadores de produtividade
   - Análise exploratório de dados - **R** e **PowerBI**
   - Apps em **React-native**.

Como se não fossem atividades suficientes, ainda realizamos visitas a clientes para entender seus problemas e também realizamos instalações. Apesar de estarmos buscando desenvolvedores Mobile, também haverá possibilidade de atuar em todas estas áreas!

## Requisitos para fazer parte da indWise:
- Amar programar, principalmente programação Mobile
- Comer javascript no café da manhã
- Ser (muito) rápido em aprender novas tecnologias
- Ser determinado para resolver problemas "insolucionáveis"

## Conhecimentos Necessários e Desejados:
- Sistemas de controle de versão (utilizamos o git)
- Conhecimento em desenvolvimento Mobile Android (Nativo/React-native/Flutter)
- Java/Javascript

## Principais Atividades:
- Desenvolvimento Mobile Android
- Desenvolvimento web utilizando backend em node.js/Sails.js

## Interessou na vaga? Deixamos um desafio para você mostrar suas habilidades ninjas de programador!

##Compilação do App

- 1) Instale o framework Ionic: 
   ```
   npm install -g ionic
   ```
- 2) Dentro da pasta desafio_mobile (root), instale as dependencias com o comando:
   ```
   npm install
   ```
- 3) Ainda na pasta root, caso queira testar o app em um emulador android, rode o comando: 
   ```
   ionic cordova emulate android --prod
   ```
   Caso queira instalar o app em um dispositivo real, conecte o dispositivo android desejado ao computador via usb e rode o comando: 
   ```
   ionic cordova run android --prod
   ```  