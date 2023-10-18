import PropTypes from "prop-types";
import { Link } from "react-router-dom";
Main.propTypes = {
  products: PropTypes.array.isRequired,
};

function Main({ products }) {
  return (
    <>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center m-5 p-5 underline ">
        👋 Welcome to our Sneakers Store! 👟
      </h2>
      <div className=" mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
