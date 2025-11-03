import { Dimensions, StyleSheet } from "react-native";

const {width}= Dimensions.get("screen")

export default StyleSheet.create(
    {
        container: {
            height: "100%",
            justifyContent:"center",
            gap:25,
            padding: 20,
            backgroundColor: "#EE6928",
    
        },

        login: {
            flex:1,
            // borderWidth:1,
            alignItems:"center",
            gap: 25,
        },
        input: {
            backgroundColor:"#ffffff",
            fontFamily:'Roboto_400Regular',
            width: "90%",
            height: 50,
            borderRadius: 8,
            paddingLeft:20
        },
        forgetPassword: {
            marginTop:-8,
            paddingHorizontal:30,
            textAlign: "right",
            width:width/1.05
        },
        button:{
            width:200,
            borderRadius:33,
            overflow:"hidden",
            backgroundColor:"#FF785B",
            padding:8
        },
        contentButton:{

            textAlign:'center',
            color:'#fff',
            fontWeight:'600',
            fontSize:18,
            fontFamily:'Roboto_500Medium'

        },
        icon:{
            backgroundColor:"#FF785B",
            textAlign:"center",
            fontSize:25,
            fontWeight:"bold",
            color:"#fff",
            width:50,
            height:50,
            borderRadius:50
        }
    }
)