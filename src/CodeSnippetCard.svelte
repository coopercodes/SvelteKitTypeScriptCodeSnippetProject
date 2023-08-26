<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import { deleteSnippet, toggleFavorite } from "./SnippetStore";

    export let snippet: CodeSnippet = {
        title: "",
        language: "",
        code: "",
        favorite: false
    }

    export let index: number;

    // Destructure the snippet for cleaner access
    const { title, language, code, favorite } = snippet;

</script>

<div class="card">
    <header class="card-header">
        {title}
        <div class="float-right">
            <button type="button" class="btn btn-sm variant-filled-secondary" on:click={() => toggleFavorite(index)} aria-label={favorite ? "Unfavorite snippet" : "Favorite snippet"}>
                { favorite ? "Unfavorite" : "Favorite" }
            </button>
            <button type="button" class="btn btn-sm variant-filled-error" on:click={() => deleteSnippet(index)} aria-label="Delete snippet">
                X
            </button>
        </div>
    </header>
    <section class="p-3">
        <CodeBlock language={language} code={code}/>
    </section>
</div>
