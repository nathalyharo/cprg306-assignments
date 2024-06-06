

// alternatively you can write the code like this to avoid using props.id, props.name, props.GPA
// export default function Student({id, name, GPA}) // this is destructuring the props

export default function Student(props) {
    
    // can also write code here and destruct the props like this so you can use it
    // later without the need of adding props to the variable
    // const {id, name, GPA}= props;

    const msg = `Student: ${props.id}`;
    console.log(msg);

    return (

        <>
        <h1>Student: {props.id}</h1>
        <h2>Name: {props.name}</h2>
        <h2>GPA: {props.GPA}</h2>
        </>

    );
    }