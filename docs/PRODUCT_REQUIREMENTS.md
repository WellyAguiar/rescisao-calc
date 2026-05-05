# Product Requirements — Calculadora de Rescisão

## 1. Objetivo

Criar uma aplicação web para simular valores de rescisão trabalhista no Brasil, considerando dados básicos do contrato de trabalho e o motivo do desligamento.

O projeto tem finalidade educacional e demonstrativa, não substituindo orientação jurídica, contábil ou trabalhista profissional.

## 2. Público-alvo

- Trabalhadores CLT que querem ter uma estimativa inicial da rescisão
- Estudantes de tecnologia interessados em regras de negócio reais
- Recrutadores avaliando capacidade técnica em projetos com lógica aplicada

## 3. Problema que o projeto resolve

Muitas pessoas não entendem quais valores entram em uma rescisão trabalhista. A aplicação deve organizar os dados de entrada, aplicar regras básicas e exibir uma simulação clara.

## 4. Funcionalidades do MVP

O MVP deve permitir:

- Informar salário bruto
- Informar data de admissão
- Informar data de desligamento
- Selecionar motivo da rescisão
- Selecionar tipo de aviso prévio
- Calcular saldo de salário
- Calcular 13º proporcional
- Calcular férias proporcionais
- Calcular 1/3 de férias
- Calcular aviso prévio indenizado, quando aplicável
- Exibir resumo detalhado dos valores

## 5. Fora do escopo do MVP

Nesta primeira versão, o sistema não irá calcular:

- INSS
- IRRF
- FGTS mensal acumulado real
- Seguro-desemprego
- Horas extras
- Adicionais noturnos
- Comissões
- Férias vencidas complexas
- Rescisão de contrato de experiência
- Casos de empregado doméstico
- Convenções coletivas

## 6. Motivos de rescisão no MVP

- Demissão sem justa causa
- Pedido de demissão
- Demissão com justa causa

## 7. Aviso importante

Os cálculos devem ser apresentados como simulação aproximada. O sistema deve exibir um aviso informando que o resultado pode variar conforme descontos legais, acordos, convenções coletivas e dados específicos do contrato.

## 8. Critérios de sucesso

O projeto será considerado funcional quando:

- O usuário conseguir preencher o formulário
- O sistema validar entradas inválidas
- O cálculo retornar uma tabela detalhada
- As regras principais estiverem documentadas
- As funções de cálculo tiverem testes automatizados