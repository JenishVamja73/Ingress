import { StyleSheet } from "react-native";
const style = StyleSheet.create({
conster:{
    flex:1,
    backgroundColor:"blue",
    marginHorizontal:10,
    marginVertical:10
},
iconView:{
    // alignSelf:"center",
    justifyContent:"center",
    flex:0.5
},
TextInput:{
    borderColor:"white",
    borderWidth:1,
  
},
TextInputView:{
    flexDirection:"row",borderWidth:1,borderColor:"white",alignSelf:"center",width:"90%",marginVertical:10,alignItems:"center",borderRadius:10
},
LoginButton:{
    backgroundColor:"white",
    padding:"10%",
    alignSelf:"center",
    paddingHorizontal:10,
    paddingVertical:10,
 width:"80%",
    borderRadius:10
},
GoogleButton:{
    top:"5%",
    flexDirection:"row"
}

})
export default style