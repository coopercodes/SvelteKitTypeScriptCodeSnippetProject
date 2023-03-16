import { writable, get } from "svelte/store";

// SnippetStore
// Code Snippet
// Title, Code, Language, Favorite
export const snippetStore = writable<CodeSnippet[]>([]); // [codesnippet1,codesnippet2,etc.]

// addSnippet
export function addSnippet(input: CodeSnippetInput) {
    let snippets = get(snippetStore); // $snippetStore -> listen to changes to the value of snippetStore
    snippetStore.update(() => { // CodeSnippet[]
        return [ { ...input, favorite: false } , ...snippets]
    });
}

// deleteSnippet
export function deleteSnippet(index: number) { // if you have a db, delete by ID?
    let snippets = get(snippetStore);
    snippets.splice(index, 1); // removes one item from index "index"
    snippetStore.update(() => { // CodeSnippet[]
        return snippets;
    });
}

// toggleFavorite
export function toggleFavorite(index: number) {
    let snippets = get(snippetStore);
    
    snippetStore.update(() => { // [ { favorite: true }, { favorite: false } ]  1
        return snippets.map((snippet, snippetIndex) => {
            if(snippetIndex === index) {
                return { ...snippet, favorite: !snippet.favorite }
            }
            return snippet;
        });
    });
}
