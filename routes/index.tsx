import { Navbar } from "../components/Navbar.tsx";
import { SearchBar } from "../components/SearchBar.tsx";

export default function Home() {
  return (
    <div class="mx-auto bg-white">
      <Navbar />
      <div class="max-w-screen-xl mx-auto flex flex-col items-center justify-center my-16  w-11/12">
        <img
          class="my-4"
          src="/wiki_logo.svg"
          width="200"
          height="200"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <SearchBar />
        <p class="text-sm text-neutral-700 font-light"> Motor de Busca para o <a class="font-medium hover:text-neutral-900 transition-colors duration-150" href="https://www.wikipedia.org/">Wikipedia</a> usando modelo <a class="font-medium hover:text-neutral-900 transition-colors duration-150" href="https://pt.wikipedia.org/wiki/Aloca%C3%A7%C3%A3o_latente_de_Dirichlet">Latent Direchlet Allocation</a></p>
      </div>
    </div>
  );
}
