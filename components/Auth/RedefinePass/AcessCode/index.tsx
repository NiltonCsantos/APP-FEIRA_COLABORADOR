import { SafeAreaView } from "react-native-safe-area-context"
import style from "../../Cadastre/style"
import Title from "../../../Title"
import { Button, View } from "react-native"
import InputBox from "../../InputBox"
import { useNavigation } from "@react-navigation/native"

export default () => {

    const navigation= useNavigation()

    function handleClick(){
        navigation.navigate("Redefine")
    }

    return (
        <SafeAreaView style={style.container}>
            <Title title={"Redefinir Senha"} />
            <View style={style.contentInputs}>

                <InputBox placeholder="Email" secure={false}/>
                <Button title="confirmar" color="#FF785B" onPress={handleClick}/>
                
            </View>
        </SafeAreaView>
    )
}