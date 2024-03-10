export default function NavBar(){
    return (
        <div className="font-sans bg-black text-white">
            <ol className="flex flex-col sm:flex-row p-5 mx-5">
                <li className="p-3 pr-20">
                    <a href= '' className="p-5">IMAGE</a>
                </li>
                <li className="p-3">
                    <a href='/cart' className="p-5 text-center"> option One</a>
                </li>
                <li className="p-3">
                    <a href='/home' className="p-5">Option two</a>
                </li>       
                <li className="p-3 ml-0 sm:p-3 sm:ml-auto">
                    <a href='' className="p-5">Menu</a>
                </li>
            </ol>
        </div>

    );
}