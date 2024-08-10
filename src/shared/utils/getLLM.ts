export const getLLM = (LLM?: string | null) => {
    if (LLM?.includes("llama")) return "llama";
    return "gpt";
}