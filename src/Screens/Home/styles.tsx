import { StyleSheet } from "react-native";


export const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#000'
    },
    results:{
        width:'100%',
        height:'25%',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        paddingRight:10
    },
    tecs:{
        height:'65%',
        width:'100%',
    },
    division:{
        justifyContent:'center',
        display:'flex',
        flexWrap:'wrap',
        height:'75%',
        flexDirection:"row",
    },
    tec:{
        height: 80,
        width: 80,
        margin:5,
        borderRadius:50,
        fontSize: 23,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        color:' #000',
    },
    numero:{
        backgroundColor: '#45453e',
        color: '#fff',
    },
    zero:{
        width:170,
        paddingLeft:10,
        backgroundColor: '#45453e',
        color: '#fff',
        borderRadius:35
    }
})