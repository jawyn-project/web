export function SearchBar(props: { customCss?: string}) {

    return (
        <>
          <form method="POST" class={`relative bg-neutral-100 border-2 border-neutral-500 mb-4 p-2 shadow-md shadow-neutral-400 focus-within:border-neutral-700 focus-within:shadow-black focus-within:shadow flex items-center ${props.customCss || ""}`}>

            <input name="search" type="text" placeholder="Faça sua pesquisa..." class="w-full focus:outline-none pr-10 bg-neutral-100" required autocomplete="off" />
   
            <button type="submit" class="absolute inset-y-[-1] right-0">
              <img
                src="/glass.svg"
                width="50"
                height="50"
                alt="Search icon"
              />
            </button>
          </form>
        </>
    )
}