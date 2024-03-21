export function Navbar() {
    return (
        <nav class="bg-white w-full py-6">
            <div class="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <a href="#" class="text-gray-950 rounded-md px-3 py-2 text-5xl font-extrabold" aria-current="page">Jawyn</a>
                        </div>
                        <div class="flex items-center ml-auto">
                            <a href="#" class="text-gray-950 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-lg font-light">treinar</a>
                            <a href="#" class="text-gray-950 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-lg font-light">sobre</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}