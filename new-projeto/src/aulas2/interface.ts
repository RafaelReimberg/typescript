// File: interface.ts
// configurações do TypeScript

// interface Animal e Voar
// Define a estrutura que as classes devem seguir
interface Animal {
  name: string;
  speak(): void;
}

interface Voar {
  voar(): void;
}

export { Animal, Voar };