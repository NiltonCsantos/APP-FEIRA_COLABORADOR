import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import Title from "../../Title"
import style from "./style"
import useAuth from "../../../hooks/useAuth";





export default()=>{

    const {handleChange, onRegister, formRegister}=useAuth();    


    return(
        <SafeAreaView style={style.container}>
            <Title title={"Criar Conta"}/>

            <View style={style.login}>

                <TextInput style={style.input} placeholder="Nome completo" value={formRegister.fullName} onChangeText={value=> handleChange('fullName', value)}/>
                
                <TextInput style={style.input} placeholder="Email" value={formRegister.email} onChangeText={value=>handleChange('email', value)} />

                <TextInput style={style.input} placeholder="Senha" value={formRegister.password} onChangeText={value =>handleChange('password', value)} secureTextEntry/>

                <TextInput style={style.input} placeholder="Confirmar senha" secureTextEntry value={formRegister.confirmPassword} onChangeText={value=> handleChange('confirmPassword', value)} />

                <TouchableOpacity style={style.button} onPress={()=>(onRegister())}>
                    <Text style={style.contentButton}>

                    Criar contar

                    </Text>

                </TouchableOpacity>


            </View>
        </SafeAreaView>
    )
}