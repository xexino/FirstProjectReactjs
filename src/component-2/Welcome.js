const Welcome = props => {
    console.log('props:' , props.name);
    return (
        <button onClick={() => props.functionHello('My name is James Brown' )}>
            ClickMe
        </button>
    );
};
export default Welcome;