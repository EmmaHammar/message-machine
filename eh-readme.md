# Exercise
Beskrivning
Vi skall skapa ett verktyg i react för att skriva brev eller medelanden i ett system.

Men nu skall vi bara hantera själva medelandesystemet.

Du skall ta fram en sida som består utav 2 delar, dessa skall vara sida vid sida, 50/50.

Den vänstra delen utav sidan innehåller ett formulär med input fält för rubrik, ett för en mottagere (namn) samt en textarea för att skriva ett meddelande samt en skicka knapp. Denna del av sidan skall vara vit bakgrund med svart text. 

Den högra delen utav sidan skall reflektera det som fyllts i formuläret fast med svart bakgrund och vit text.

Du skall använda minst 3 komponenter. En parent förslagsvis App.js med två child komponenter Form.js (vänster) och Message.js (höger).


# Obesvarade frågor:
===
Är det såhär det går till: getNewForm är callback till getNewForm i Form.js? 
    1) kallar på getNewForm i App.js som körs
    2) kallar på saveForm i App.js som körs
===
Om jag i Message.js skriver: 
 <h3>To: {this.props.showName}</h3> blir det i DOMen <h3>"To:" "emma"</h3> - varför?
===
Om jag vill att To ska komma först efter klick på send-btn - hur gör jag då?







# Q&A; 
===

I App.js hur gör jag för att det ska bli mer dynamiskt så jag kan återanvända funktioner o även i <Form/> samt <Message/>?
Svar: behövs inte då det inte är flera olika formulär som skapas dynamiskt. 
===

I Form.js i onSubmit = (evt) => {} - Hur gör jag för att skicka det mer dynamiskt? 
svar:  i Form.js: this.props.getNewForm(this.state.inputTitle, this.state.inputName, this.state.textAreaMsg) 
i App.js i return( getNewForm={this.saveForm} )
i App.js som lifecycle-metod: 
    saveForm = (myTitle, myReceiver, myMsg) => {
        this.setState ({
            title: myTitle,
            receiver: myReceiver,
            msg: myMsg,
        })
    }

===
Hur skiljer sig detta från didMount osv? didMount är en annan lifecyclemetod? I detta fall har jag valt onChange o onSubmit som lifecyclemetoder?
Svar: Det är andra lifecyclemetoder som alltid körs, som är inbyggda i React. Om vi inte skriver ut ex DidMount så är de tomma och syns ej.
===
