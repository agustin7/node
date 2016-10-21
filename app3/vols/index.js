//definir nou element
var Flight=function(){


    //definim objecte (array)
    this.data={
        number: null,
        origin: null,
        destination: null,
        departs: null,
        arrives: null,
        actualDepart: null,
        actualArrive:null
    };


    //definicio de funcions o metodes
    //omplir atributs
    /**
    *
    *   fill: omplir atributs de Fligth
    *
    *
    **/

    this.fill=function(info){
        //Omplir objecte (array)
        //bucle que s'encarrega de proporcionar valors a l'array (recorrer l'array)
        for(var prop in this.data){
            if(this.data[prop] !=='undefined'){ //!== identico (valor y tipo de dato)
                this.data[prop]=info[prop];
            }
        }
    };

    
    //actualitzar les dates de sortida/arrivada
    this.triggerDepart=function(){
        this.data.actualDepart=Date.now();
    };
    this.triggerArrive= function(){
        this.data.actualArrive=Date.now();
    };
    this.getInformation= function(){
        return this.data;
    };

};

module.exports=Flight;