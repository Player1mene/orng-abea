import React from 'react'

const useForm = (type) => {

    const types = {
        email: {
            regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Preencha um email valido"
        },
        password: {
            regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
            message: "Senha fraca, deve ter no minimo 1 caracter minusculo, 1 maiusculo, 1 especial e no minimo 8 digitos"
        },
        number: {
            regex: /^\d+$/,
            message: "Ultilize Numeros Apenas",
        },

        telefone: {
            regex: /^\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/,
            message: "Numero de telefone invalido",
        }
    }


    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null)

    function validate(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError("Preencha um valor");
            return false;
        } else if (types[type] && !types[type].regex.test(value)){
            setError(types[type].message)
            return false;
        } else {
            setError(null)
            return true;
        }

    }

    function onChange({ target }){
        if (error) validate(target.value);
        setValue(target.value);
    }
  
    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value)
  }
}

export default useForm