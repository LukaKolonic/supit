const url='http://www.fulek.com/VUA/KS/GetPrognozaGradovaJSON';

function Grad(Naziv,Temperatura,Vrijeme, Vlaga,Tlak,VjetarSmjer,VjetarBrzina)
{
    this.Naziv = Naziv,
    this.Temperatura=Temperatura,
    this.Vrijeme=Vrijeme,
    this.Vlaga=Vlaga,
    this.Tlak=Tlak
    this.VjetarSmjer=VjetarSmjer
    this.VjetarBrzina=VjetarBrzina
}



let gradovi;
var nazivi=[];


$.ajax
({
    url,
    method: 'get',
    dataType:'json',
    
    success:(poljeGradova) => {
         gradovi = poljeGradova.map((g)=> 
         new Grad(g.Naziv,
                  g.Temperatura, 
                  g.Vrijeme,
                  g.Vlaga,
                  g.Tlak,
                  g.VjetarSmjer,
                  g.VjetarBrzina));

            
        gradovi.forEach(g => {
            nazivi.push(g.Naziv);
           });
           
           
         $('#txtGrad').autocomplete({
            source:nazivi,
            select:(e,ui) => {
                PrikaziDetaljeGrada(ui.item.label);
               
            }

        });
            
        const PrikaziDetaljeGrada = (naziv) => {
            console.log(naziv);
           gradovi.forEach(g => {
               if (naziv == g.Naziv) {
                   console.log(g.VjetarBrzina);
              
                   $('.Articl').append(
                `<article>
                    <div id="naziv">Grad:${g.Naziv} </div>
                    <div id="temp">Temperatura:${g.Temperatura} </div>
                    <div id="vrijeme">Vrijeme:${g.Vrijeme} </div>
                    <div id="vlaga">Vlaga:${g.Vlaga} </div>
                    <div id="tlak">Tlak:${g.Tlak} </div>
                    <div id="vsmjer">Smjer vjetra:${g.VjetarSmjer} </div>
                    <div id="vbrzina">Brzina vjetra:${g.VjetarBrzina} </div>
                 </article>`

                   )

                
                  
               }
           })

            
        }
    }   

    
    
    
});



