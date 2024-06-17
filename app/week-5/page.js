import ItemList from "./item-list";

function Page() {
    return (
        <main className="flex min-screen flex-col items-center justify-between p-5">
            <h1 className="text-center text-fuchsia-100  text-lg uppercase pb-3">Shopping List</h1>
            <ItemList />
        </main>
    );
}

export default Page;