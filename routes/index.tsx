import { Handlers } from "$fresh/server.ts";

import { Navbar } from "../components/Navbar.tsx";
import { SearchBar } from "../components/SearchBar.tsx";

export const handler: Handlers = {
  
  async POST(req, ctx) {

    const form = await req.formData()
    const q = form.get("search")?.toString();
    
    if (!q) {
      return new Response("Query não pode ser vazia", { status: 400 });
    }
    
    const searchParams = new URLSearchParams({ q })
    const url = `/search?${searchParams.toString()}`
    
    const headers = new Headers()
    headers.set("location", url)
    
    return new Response(url, {
      status: 302,
      headers
    })
  }
}

export default function Home() {
  return (
    <div class="mx-auto bg-white">
      <Navbar />
      <div class="max-w-screen-xl mx-auto flex flex-col items-center justify-center my-16 w-11/12">
        <img
          class="my-4"
          src="/wiki_logo.svg"
          width="200"
          height="200"
          alt="Wikipedia Official Logo"
        />
        <SearchBar customCss="mt-16 w-8/12"/>
        <p class="text-sm text-neutral-700 font-light"> Motor de Busca para o <a class="font-medium hover:text-neutral-900 transition-colors duration-150" href="https://www.wikipedia.org/">Wikipedia</a> usando modelo <a class="font-medium hover:text-neutral-900 transition-colors duration-150" href="https://pt.wikipedia.org/wiki/Aloca%C3%A7%C3%A3o_latente_de_Dirichlet">Latent Direchlet Allocation</a></p>
      </div>
    </div>
  );
}
