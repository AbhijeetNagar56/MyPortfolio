import { Link } from 'react-router'

const header = () => {
    return (
        <header className="flex justify-between items-center flex-wrap p-8 text-white">
            <h1 className="text-[#c8fbff] text-3xl font-bold">Abhijeet Nagar</h1>
            <nav>
                <ul className="flex gap-4 text-lg font-bold">
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/project'><li>Projects</li></Link>
                    <Link to='/about'><li>About</li></Link>
                </ul>
            </nav>
            <div className="flex items-right gap-4 flex-wrap">
                <form action="#" method="GET" className="flex">
                    <input
                        type="text"
                        placeholder="Type..."
                        name="search"
                        className="w-[400px] text-black text-[20px] border-none border-b-2 border-black p-2 rounded-l-md bg-amber-50"
                    />
                    <button
                        type="submit"
                        className="bg-[#464b8f] text-white h-[45px] text-[20px] w-[50px] rounded-r-md"
                    >
                        Go
                    </button>
                </form>
            </div>
        </header>
    )
}

export default header
