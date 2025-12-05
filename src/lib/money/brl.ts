// // src/lib/money.ts
// // import { Prisma } from '../generated/prisma';

// /**
//  * Converte QUALQUER valor brasileiro (string ou número) para Prisma.Decimal
//  * Aceita:
//  *   "42,90" | "R$ 42,90" | "1.234,56" | "999" | 42.90 | "42.90"
//  */
// export function brl(value: string | number | null | undefined): Prisma.Decimal {
//   if (value === null || value === undefined || value === '') {
//     throw new Error('Valor monetário não pode ser vazio');
//   }

//   const cleaned = String(value)
//     .trim()
//     // Remove tudo que não for número, vírgula, ponto ou sinal negativo
//     .replace(/[^\d,\-.]/g, '')
//     // Remove separadores de milhar (pontos brasileiros)
//     .replace(/\./g, '')
//     // Troca vírgula por ponto (separador decimal BR → US)
//     .replace(',', '.');

//   // Validação final
//   if (!/^[-]?\d+\.?\d*$/.test(cleaned)) {
//     throw new Error(`Valor monetário inválido: "${value}"`);
//   }

//   return new Prisma.Decimal(cleaned);
// }