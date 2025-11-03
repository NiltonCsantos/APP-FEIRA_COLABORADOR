
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native"

import style from "../style"
import { globalStyles } from "../../../../Globals.Styles"
import { SafeAreaView } from "react-native-safe-area-context"
import Title from "../../../Title"
import InputBox from "../../InputBox"
import useAuth from "../../../../hooks/useAuth"



export default () => {

    const {formLogin, handleChangeLogin, onLogin, navigateToForget, navigateToCadastre}= useAuth();


    return (


        <SafeAreaView style={style.container}>

            <Title title={"Login"}/>

            <View style={style.login}>

                <TextInput style={style.input} placeholder="Email" value={formLogin.email} onChangeText={(value)=>handleChangeLogin("email", value)}/>


                <TextInput style={[style.input, globalStyles.text]} placeholder="Senha" value={formLogin.password} onChangeText={(value)=>handleChangeLogin("password", value)}/>
              
                <View>
                    <Text style={[style.forgetPassword, globalStyles.text]} onPress={navigateToForget}>

                        Esqueceu a senha?

                    </Text>
                </View>


                <TouchableOpacity style={style.button}>
                    <Text style={style.contentButton} onPress={()=>onLogin()}>Login</Text>
                </TouchableOpacity>

                {/* <Text style={style.text}>
                    Faça Login com
                </Text>

                <Text style={style.icon}>G</Text> */}



                <Text onPress={navigateToCadastre} style={globalStyles.text}>
                    Criar conta
                </Text>

            </View>

        </SafeAreaView>




    )
}