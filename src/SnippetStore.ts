import { writable } from "svelte/store";

// SnippetStore
export const snippetStore = writable<CodeSnippet[]>([]);

// Add a new snippet to the store
export function addSnippet(input: CodeSnippetInput) {
    snippetStore.update(snippets => [{ ...input, favorite: false }, ...snippets]);
}

// Delete a snippet by its index
export function deleteSnippet(index: number) {
    snippetStore.update(snippets => {
        snippets.splice(index, 1);
        return snippets;
    });
}

// Toggle the favorite status of a snippet by its index
export function toggleFavorite(index: number) {
    snippetStore.update(snippets => {
        const targetSnippet = snippets[index];
        if (targetSnippet) {
            targetSnippet.favorite = !targetSnippet.favorite;
        }
        return snippets;
    });
}