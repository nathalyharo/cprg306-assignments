import ItemList from "./item-list";

function Page() {
    return (
        <main>
            <h1 className="text-center text-red-100 mx-40 my-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}

export default Page;