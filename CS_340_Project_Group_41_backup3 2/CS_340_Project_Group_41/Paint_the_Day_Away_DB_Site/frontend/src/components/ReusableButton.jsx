function ReusableButton({label, onClick, styleClass}) {
    return (
        <button className = {styleClass} onClick = {onClick}>
            {label}
        </button>
    )


}