import { TextInput } from "react-native"
import style from "../Cadastre/style"

interface Input{
    placeholder:string;
    secure?:boolean,
    value:string
}


export default ({placeholder, secure=false, value}:Input)=>{
    return(
        <TextInput style={style.input} placeholder={placeholder} secureTextEntry={secure}></TextInput>
    )
}