export function SearchBar() {
    return (
        <div class="relative bg-neutral-100 border-2 border-neutral-500 mt-16 mb-4 p-2 w-8/12 shadow-md shadow-neutral-400 focus-within:border-neutral-700 flex items-center">
          <input type="text" placeholder="Faça sua pesquisa..." class="w-full focus:outline-none pr-10"></input>
        
        {
            // TODO: create a input for img
        }

          <img
            class="absolute inset-y-[-1] right-0"
            src="/glass.svg"
            width="50"
            height="50"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
        </div>
    )
}