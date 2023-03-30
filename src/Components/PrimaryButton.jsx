function PrimaryButton(props) {
    return ( 
        <button className="primarybutton" onClick={props.action}>{props.title}</button>
     );
}

export default PrimaryButton;