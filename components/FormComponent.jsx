import { useState } from "react"

export const FormComponent = ({ ingresarciudad }) => {

    const [InputValue, setInputValue] = useState('');

    const onInputChange = e => {
        setInputValue(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        ingresarciudad(InputValue);
    }

    return (
        <div className="div-Form">
            <form className="Form" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="ciudad"
                    className="Form-Input"
                    placeholder="ingresar ciudad"
                    value={InputValue}
                    onChange={onInputChange}
                />
                <button type="submit" className="Submit">Buscar</button>
            </form>

        </div>
    )
}
