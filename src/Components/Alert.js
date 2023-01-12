import React from 'react'

const Alert = (props) => {
    const Upercase = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <>
            <div style={{marginTop : 60, height: 10}}>
                {props.alert && <div style={{borderRadius : 0}} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{Upercase(props.alert.type)}</strong> :- {props.alert.msg}
                </div>}
            </div>
        </>
    )
}

export default Alert