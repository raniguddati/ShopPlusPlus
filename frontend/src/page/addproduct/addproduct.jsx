export default function addProduct() {
    return (
        <main className="w-full h-screen flex flex-row  justify-center bg-gray-50 sm:px-4">
            <div className="w-full text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Add Product</h3>
                    </div>
                </div>
                <div className="bg-white shadow p-4 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className="font-medium">
                                Product Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Model
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Year
                            </label>
                            <input
                                type="number"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Price
                            </label>
                            <input
                                type="number"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Photo
                            </label>
                            <input
                                type="file"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Photo alt
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Photo alt
                            </label>
                            <select required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                                <option value="red">Motorcycles</option>
                                <option value="blue">Accessories</option>
                            </select>

                        </div>
                        <button
                            className="w-full mt-5 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            add product
                        </button>
                    </form>

                </div>
            </div>
        </main >
    )
}