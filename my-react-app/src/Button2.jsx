//In-line styling
//prevents global style conflicts by not working with classnames
//great for isolated elements

function Button2(){

    //for this thing to work, use camel case and separate by commas

    const styles = {
        backgroundColor: 'hsl(200, 100%, 50%)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    }

    return(
        <button style={styles}>I'm an in-line styled button</button>
    );
}

export default Button2