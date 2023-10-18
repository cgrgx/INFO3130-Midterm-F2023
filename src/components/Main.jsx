import sneaker1 from "../assets/images/sneaker-1.png";
import sneaker2 from "../assets/images/sneaker-2.png";
import sneaker3 from "../assets/images/sneaker-3.png";
import sneaker4 from "../assets/images/sneaker-4.png";
import sneaker5 from "../assets/images/sneaker-5.png";
import sneaker6 from "../assets/images/sneaker-6.png";
function Main() {
  const products = [
    {
      id: 1,
      name: "Nike Men's Court Vision Next Nature Shoes, Sneakers, Mid Top",
      href: "#",
      price: "$85.95",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker1,
      imageAlt: "Nike Men's Court Vision Next Nature Shoes, Sneakers, Mid Top",
    },
    {
      id: 2,
      name: "Men's Grand Court 2.0 Cloudfoam Comfort Sneakers",
      href: "#",
      price: "$89.99",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker2,
      imageAlt: "Men's Grand Court 2.0 Cloudfoam Comfort Sneakers",
    },
    {
      id: 3,
      name: "Converse Men's Chuck Taylor All Star Ox Uni Hightop Sneakers - Black",
      href: "#",
      price: "$79.95",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker3,
      imageAlt:
        "Converse Men's Chuck Taylor All Star Ox Uni Hightop Sneakers - Black",
    },
    {
      id: 4,
      name: "PUMA Men's Softrider Enzo NXT Shoes",
      href: "#",
      price: "$95.99",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker4,
      imageAlt: "PUMA Men's Softrider Enzo NXT Shoes",
    },
    {
      id: 5,
      name: "PUMA Men's Classic XXI Shoes, Sneakers, Suede",
      href: "#",
      price: "$89.95",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker5,
      imageAlt: "PUMA Men's Classic XXI Shoes, Sneakers, Suede",
    },
    {
      id: 6,
      name: "Nike Men's Air Jordan 1 Basketball Shoes",
      href: "#",
      price: "$155.95",
      sizes: ["8", "9", "10", "11", "12"],
      imageSrc: sneaker6,
      imageAlt: "Nike Men's Air Jordan 1 Basketball Shoes",
    },
  ];
  return (
    <>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center m-5 p-5 underline ">
        👋 Welcome to our Sneakers Store! 👟
      </h2>
      <div className=" mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group border border-gray-200 flex flex-col overflow-hidden rounded-lg hover:shadow-xl"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-md text-gray-700 p-3">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 px-3">
                Price: {product.price}
              </p>
              <p className="mt-1 text-lg font-medium text-gray-900 px-3">
                Sizes: {product.sizes.join(", ")}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
