let clientWeb = null;

const clientId = "ESP8266" + Math.floor(Math.random() * 900) +100;
clientWeb = new Paho.MQTT.Client("broker.emqx.io", 8084, clientId);

//clientWeb = new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId);

clientWeb.connect({
    useSSL: true,
    timeout: 5,
    onSuccess: function(){
        alert(`Conectado com sucesso!!`)
    },
    onFailure: function(){
        alert(`A conexão falhou!`)
    }
})

function ligarAmarelo(){
    document.getElementById("amarelo").classList.add("amar");
    const msgAmar = new Paho.MQTT.Message("");
    msgAmar._getDestinationName = "MLC123/led/on"
    clientWeb.send(msgAmar)



}

function desligar(){
     document.getElementById("amarelo").classList.remove("amar");

     let msg = new Paho.MQTT.Message("");
     msg.destinationName = "MLC123/led/off"
     clientWeb.send(msg);
}