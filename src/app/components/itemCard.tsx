import Image from "next/image";

interface ItemcardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  onAddToCart : ()=> void;
}


export default function Itemcard({ src, alt, title, description, onAddToCart}:ItemcardProps) {
    return (
        <div className="p-5 bg-blue-300 border-4">
            <ol className="flex-col">
                <li>
                    <Image src={src} width={300} height={150}alt={alt}></Image>
                    <h2 className="p-2 text-left"> {title}</h2>
                    <p className="p-2 text-center"> {description}</p>
                    <div className="flex flex-row justify-center">
                        <button className="m-3 p-3 border-4 border-black" onClick={onAddToCart}>Add Me To Cart!</button>
                    </div>
                </li>
                
            </ol>

        </div>
    )
}