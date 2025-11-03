import { Button, SafeAreaView, View } from "react-native"
import style from "../../Cadastre/style"
import Title from "../../../Title"
import InputBox from "../../InputBox"

export default()=>{
    return(
        <SafeAreaView style={style.container}>

            <Title title={"Redefinir Senha"}/>

            <View style={style.contentInputs}>

                <InputBox placeholder="Nova senha" secure={true}/>
                <InputBox placeholder="Confirmar senha" secure={true}/>
                <Button title="Confirmar" color={"#FF785B"}/>

            </View>

        </SafeAreaView>
    )
}