

function Item(props) {
    return (
        <li className="border border-purple-200 text-center rounded-md p-3 mx-20 my-2">
            <div className="flex flex-col">
                <span className="capitalize p-1">{props.name}</span>
                <span>Buy {props.quantity} in {props.category}</span>
            </div>
        </li>
    );
}

export default Item;