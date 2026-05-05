# Business Rules — Calculadora de Rescisão

## 1. Premissas gerais

Esta aplicação calcula uma simulação simplificada de rescisão trabalhista para contratos CLT.

Os valores exibidos são estimativas brutas e não consideram todos os descontos legais ou particularidades contratuais.

## 2. Dados de entrada

O usuário deve informar:

- Salário bruto mensal
- Data de admissão
- Data de desligamento
- Motivo da rescisão
- Tipo de aviso prévio

## 3. Motivos de rescisão

### 3.1 Demissão sem justa causa

Pode incluir:

- Saldo de salário
- 13º proporcional
- Férias proporcionais
- 1/3 sobre férias proporcionais
- Aviso prévio indenizado, se aplicável

### 3.2 Pedido de demissão

Pode incluir:

- Saldo de salário
- 13º proporcional
- Férias proporcionais
- 1/3 sobre férias proporcionais

Não inclui, no MVP:

- Multa de FGTS
- Saque de FGTS
- Seguro-desemprego

### 3.3 Demissão com justa causa

Pode incluir:

- Saldo de salário

Não inclui, no MVP:

- 13º proporcional
- Férias proporcionais
- Aviso prévio indenizado

## 4. Saldo de salário

O saldo de salário corresponde aos dias trabalhados no mês da rescisão.

Fórmula inicial:

- saldo de salário = salário mensal / 30 * dias trabalhados no mês

## 5. 13º proporcional

O 13º proporcional considera os meses trabalhados no ano da rescisão.

Fórmula inicial:

- 13º proporcional = salário mensal / 12 * meses proporcionais

## 6. Férias proporcionais

As férias proporcionais consideram os meses trabalhados no período aquisitivo.

Fórmula inicial:

- férias proporcionais = salário mensal / 12 * meses proporcionais

## 7. Um terço de férias

O adicional constitucional de férias corresponde a 1/3 do valor das férias.

Fórmula:

- 1/3 de férias = férias / 3

## 8. Aviso prévio

No MVP, o aviso prévio pode ser:

Trabalhado
Indenizado
Não aplicável

Para aviso indenizado em demissão sem justa causa, usar inicialmente:

- aviso prévio = salário mensal / 30 * dias de aviso

A regra base considerada será de 30 dias, podendo futuramente incluir aviso proporcional por tempo de serviço.

## 9. Arredondamento

Valores monetários devem ser arredondados para duas casas decimais apenas na exibição.

Durante o cálculo interno, evitar arredondamentos intermediários desnecessários.

## 10. Limitações conhecidas

Esta primeira versão não considera:

INSS
IRRF
FGTS real depositado
Multa de 40% do FGTS
Férias vencidas
Médias de remuneração variável
Horas extras
Adicionais
Convenções coletivas
Estabilidade provisória
Contrato de experiência

