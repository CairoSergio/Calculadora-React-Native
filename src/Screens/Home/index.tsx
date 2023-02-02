import {  StatusBar, Text, TouchableOpacity, View } from "react-native";
import {Styles} from './styles'
import { useState } from "react";
export default function Home(){
    const [display, setDisplay] = useState("0");
    const [nome, setNome ]= useState('Resultados');
    const [maxtamanho, setMaxtamanho] = useState(10)
    const [ index, setIndex] = useState(0)

    
    const handleNumberClick = (number) => {
        if(index===30){
            alert('voce atingiu o numero maximo de digitos')

        }else{
            setIndex(index + 1)
            if(number==='%' || number==='.'){
                return
            }else{
                setDisplay((prevDisplay) => prevDisplay === "0" ? number : prevDisplay + number);
            }
        }
    };
    
    const handleOperatorClick = (operator) => {
        if(index===4){
            alert('voce atingiu o numero maximo de digitos')

        }else{
            if(display==='0'){
                if(operator==='/' || operator==='*' || operator==='.'){
                    return
                }else{
                    setDisplay((prevDisplay) => prevDisplay === "0" ? operator : prevDisplay + operator);
                }
            }else{
                if(display==='-' || display==='+'){
                if(operator==='*' || operator==='/'){
                    return
                }else{
                    setDisplay(operator)
                }
                }else{
                
                setDisplay((prevDisplay) => prevDisplay === "0" ? operator : prevDisplay + operator);
                }
            }
        }
    };
    
    const handleEqualClick = () => {
    
        setDisplay((prevDisplay) => eval(prevDisplay).toString());
    };
    
    const handleClearClick = () => {
        setDisplay("0");
        setNome('Resultados')
        setIndex(0)
        setMaxtamanho(10)
    };
    const handleClear1Click = () =>{
        let newDisplay = display.substring(0, display.length - 1);
        if(display.length===10){
        setIndex(0)
        setMaxtamanho(10)
        setNome('Resultados')
        }
        if(display.length===13){
        setIndex(1)
        setMaxtamanho(13)
        setNome('Resultados nivel1')
        }
        if(display.length===16){
        setIndex(2)
        setMaxtamanho(16)
        setNome('Resultados nivel1')
        }
        if(display.length===1){
        setDisplay("0")
        }else{
        setDisplay(newDisplay)
        }
    }



    const buttonData = [
        { description: "AC", callback: handleClearClick,state:'' },
        { description: "C", callback: handleClear1Click, state:''},
        { description: "%", callback: () => handleNumberClick("%"), state:'' },
        { description: "/", callback: () => handleOperatorClick("/"), state: 'amarela'},
        { description: "7", callback: () => handleNumberClick("7"),state:'numero' },
        { description: "8", callback: () => handleNumberClick("8"),state:'numero' },
        { description: "9", callback: () => handleNumberClick("9"),state:'numero' },
        { description: "x", callback: () => handleOperatorClick("*"), state: 'amarela'},
        { description: "4", callback: () => handleNumberClick("4"),state:'numero' },
        { description: "5", callback: () => handleNumberClick("5"),state:'numero' },
        { description: "6", callback: () => handleNumberClick("6") ,state:'numero'},
        { description: "-", callback: () => handleOperatorClick("-"), state: 'amarela' },
        { description: "1", callback: () => handleNumberClick("1"),state:'numero' },
        { description: "2", callback: () => handleNumberClick("2") ,state:'numero'},
        { description: "3", callback: () => handleNumberClick("3") ,state:'numero'},
        { description: "+", callback: () => handleOperatorClick("+"), state: 'amarela'},
        { description: "0", callback: () => handleNumberClick("0"), state:'zero' },
        { description: ".", callback: () => handleOperatorClick(".") ,state:'numero'},
        { description: "=", callback: handleEqualClick , state: 'amarela'},
    ];
    function Tecla() {
        return (
          <View style={Styles.division}>
            {buttonData.map((data, index) => (
                <TouchableOpacity 
                key={index} 
                style={[Styles.tec, data.state === 'amarela' ? { backgroundColor:'rgb(255, 140, 0)'} :data.state==='' ? Styles.nada :data.state === 'zero' ? Styles.zero : Styles.numero]}
                onPress={data.callback}>
                    <Text style={[{fontSize:23,fontFamily: 'sans-serif'},data.state === 'amarela' ? {color:'#fff'} :data.state==='' ? Styles.nada :data.state === 'zero' ? {color:'#fff',marginLeft:-100} : {color:'#fff'}]}>
                        {data.description}
                    </Text>
                </TouchableOpacity>

            ))}
          </View>
        );
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.results}>
                <Text style={{color:'#fff', fontSize:45}}>
                    {display}
                </Text>
            </View>
            <Tecla/>
            <StatusBar barStyle={"light-content"}/>
        </View>
    )
}