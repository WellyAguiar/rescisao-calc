<div align="center">
  <img src="./docs/banner.svg" width="100%" alt="Rescisão Calc — CLT Calculation Engine" />
  <br />
  <br />
  <a href="https://quantovoureceber.vercel.app"><img src="https://img.shields.io/badge/LIVE_DEMO-ACESSAR_APP-A855F7?style=for-the-badge&labelColor=0B0714&logo=vercel&logoColor=F8FAFC" alt="Live Demo" /></a>
</div>

<br />

Aplicação web em **Next.js 16 + TypeScript + Vitest** projetada para simular verbas rescisórias da CLT (Consolidação das Leis do Trabalho) com precisão, tipagem estrita e desacoplamento total entre domínio e interface.

---

## Arquitetura & Engenharia de Software

O projeto segue princípios de **Clean Architecture** e **Feature-Sliced Design** (`src/features/rescission/`), isolando a lógica trabalhista pura da camada React:

### 1. Motor de Cálculo (`calculations/`)
Conjunto de funções puras em TypeScript estrito, cada uma responsável por uma regra trabalhista isolada e acompanhada por sua própria suíte de testes unitários (`.test.ts`):
- **Saldo de Salário:** proporcional aos dias efetivamente trabalhados no mês do desligamento.
- **Contagem de Avos (`1/12`):** aplicação precisa da regra dos 15 dias trabalhados com datas tratadas de forma determinística.
- **13º Salário Proporcional:** cálculo de avos no ano do desligamento respeitando as regras por modalidade de rescisão.
- **Férias Vencidas & Proporcionais + 1/3 Constitucional:** apuração completa sobre o período aquisitivo.
- **Aviso Prévio Proporcional (Lei 12.506/2011):** escalonamento automático de 30 dias + 3 dias por ano completo trabalhado (até 90 dias), diferenciando aviso trabalhado, indenizado e dispensa por justa causa.

### 2. Validação & Tipagem (`types/` e `validations/`)
- Uso de *discriminated unions* (`ValidationResult`, `TerminationReason`, `NoticeType`) eliminando estados inválidos antes da execução do cálculo.
- Feedback imediato na interface (ex.: datas inconsistentes ou parâmetros incompatíveis com a modalidade escolhida).

### 3. Qualidade & TDD
- Desenvolvimento orientado a testes com **Vitest**, cobrindo cenários de dispensa sem justa causa, pedido de demissão, justa causa e casos de borda calendários.

---

## Documentação Complementar

- [Requisitos do Produto](./docs/PRODUCT_REQUIREMENTS.md)
- [Regras de Negócio](./docs/BUSINESS_RULES.md)
- [Roadmap](./docs/ROADMAP.md)

---

## Rodando Localmente

```bash
# Instalar dependências
npm install

# Rodar suíte de testes (Vitest)
npm test -- --run

# Iniciar servidor de desenvolvimento (http://localhost:3000)
npm run dev
```

> **Nota:** Esta aplicação tem finalidade simulatória e educacional. Valores finais podem variar conforme descontos de INSS/IRRF, FGTS, convenções coletivas e particularidades contratuais.
