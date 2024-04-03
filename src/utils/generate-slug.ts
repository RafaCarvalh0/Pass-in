export function generateSlug(text: string): string {
    return text
        .toLowerCase() // Transforma o texto em minúsculas
        .normalize("NFD") // Remove os acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove os caracteres especiais
        .replace(/[^\w\s]/g, "") // Remove os símbolos
        .replace(/\s+/g, "-"); // Substitui os espaços por traços
}