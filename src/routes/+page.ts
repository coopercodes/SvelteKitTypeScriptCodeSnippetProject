import { snippetStore } from "../SnippetStore";
export const load = (() => {
    // you can get this data from ANY SOURCE
    // fetch call here
    // graphql client
    // manually change this object here whenever you want
	const snippets = [
		{
		  title: "Cooper Codes Snippet",
		  language: "html",
		  code: `<div>This is a div</div>`,
		  favorite: false
		},
		{
		  title: "Cool code snippet",
		  language: "typescript",
		  code: `console.log("Subscribe");`,
		  favorite: false
		}
	  ];
  
	  // Set the store value
	  snippetStore.set(snippets);
  
	}
) 