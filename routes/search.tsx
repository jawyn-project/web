import { Handlers, PageProps } from "$fresh/server.ts";
import { Navbar } from "../components/Navbar.tsx";
import { SearchBar } from "../components/SearchBar.tsx";

// interfaces to get the response pattern of LDA API
interface Documents {
    results: Document[]
}

interface Document {
    link: string
    title: string
    content: string
}

// static documents only to test the application without use the LDA API
const documents: Documents = 
    { results: [
        {
            link: "https://pt.wikipedia.org/wiki/Fel%C3%ADdeos",
            title: "Felídeos - Wikipédia, a enciclopédia livre",
            content: "Existem atualmente 41 espécies de felídeos. De acordo com cientistas, os felídeos evoluíram no Eoceno a partir do grupo Viverravidae, que também deu origem às civetas, hienas e aos extintos nimravídeos. O primeiro verdadeiro felídeo foi o Proailurus que viveu na Europa há cerca de 30 milhões de anos, segundo teorias. Este animal tinha corpo longo, patas curtas e um dente molar adicional em cada mandíbula, por comparação aos felídeos modernos. Já no ...",
        },
        {
            link: "https://unir.br/homepage",
            title: "UNIR - Universidade Federal de Rondônia",
            content: "Institucional. Ensino. Pesquisa. Extensão. Multicampi. Acesso à informação. Serviços. Ingresso. Editais. Universidade mantém canais de atendimento psicossocial para servidores e alunos. Segurança. UNIR instala totens de vigilância em todos os campi. O sistema com 18 totens e mais de 200 câmeras estará...",
        },
        {
            link: "https://deno.com",
            title: "Deno, the next-generation JavaScript runtime",
            content: "Seamless persistence with Deno KV. The Deno runtime ships with Deno KV, a key/value database designed for globally distributed applications. Go from development to production on Deno Deploy with no API keys or infrastructure to configure. Learn about KV.",
        },
        {
            link: "https://fresh.deno.dev",
            title: "Introduction | Fresh docs",
            content: "Fresh is a full stack modern web framework for JavaScript and TypeScript developers, designed to make it trivial to create high-quality, performant, and personalized web applications. You can use it to create your home page, a blog, a large web application like GitHub or Twitter, or anything else you can think of.",
        }
    ]
} 


export const handler: Handlers<Documents> = {

    // GET method to fetch the LDA API given a URL params of the query
    GET(req, ctx) {
        
        // get the url's params
        const url = new URL(req.url);
        const params = url.searchParams.get("q") ?? null;
        console.log(params)

        // the fetch function on external API here

        // render the results

        return ctx.render(documents);
    },

    // POST method to get the query and send to /search route for fetch the LDA API
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

export default function Search({ data }: PageProps<Documents>) {
    
    const { results } = data

    return (
        <div class="mx-auto bg-white">
            <Navbar customCss="border-b-2"/>
            
            <div class="max-w-screen-xl mx-auto flex flex-col items-start justify-center my-16 w-11/12">
                
                <div className="flex justify-start w-full p-5 mb-4">
                    <SearchBar customCss="w-full" />
                </div>

                <div class="flex flex-col items-start justify-start w-full">
                    {results.map((doc) =>
                        <div className="p-5 mb-4">
                            <p class="text-sm text-neutral-900 font-medium"><a href={doc.link}>{doc.link}</a></p>
                            <p class="text-2xl text-blue-600 font-bold mb-2 hover:underline hover:text-blue-700 transition-colors inline-block"><a href={doc.link}>{doc.title}</a></p>
                            <p class="text-base text-neutral-900 font-light">{doc.content}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}