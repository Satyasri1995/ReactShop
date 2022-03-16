

const InputWrapper = (props)=>{
    let id=Array.isArray(props.children)?props.children[0].props.id:props.children.props.id;
    return <div className="p-d-flex p-flex-column p-mb-2 p-mt-2">
        <label className="p-mb-2" htmlFor={id}>{props.label}</label>
        {props.children}
    </div>
}

export default InputWrapper;