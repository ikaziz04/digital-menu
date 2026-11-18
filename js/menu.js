class Section{
    constructor(name,categories){
        this.name=name;
        this.categories=categories;
    }
}

class Category {
    constructor(name,items){
        this.name=name;
        this.items=items;
    }
}

class Item{
    constructor(name,description,price,images){
        this.name=name;
        this.description=description;
        this.price=price;
        this.images=images;
    }
}
const escalopeGrillée =new Item("Escalope grillée","nothing for now",19500,[".."])
const escalopePannée=new Item("Escalope Pannée","nothing for now",22500,[".."])
const cordonBleu=new Item("Cordon Bleu Maison","nothing",26500,[])
const brochettes=new Item("Brochettes Chich taouk","nothing",23000,[])
const pouletCréme=new Item("Poulet à la crème","nothing",27500,[])
const kababViande= new Item("Kabab Viande","nothing",31000,[])
const eminceBoeuf=new Item("Émincé de bœuf","nothing",33000,[])
const coteAlos=new Item("Côte à l'os","nothing",35000,[])
const grilladeMixte=new Item("Grillade Mixte","nothing",37500,[])
const filletboeuf=new Item("Fillet de bœuf","nothing",40500,[])
const poissonDaurade=new Item("Poisson de jour Daurade","nothing",23500,[])
const poissonLoup=new Item("Poisson du jour Loup","nothing",26500,[])
const calamarDore = new Item("Calamr Doré","nothing",26500,[])
const calamrgrille = new Item("Calamr Grillé","nothing",34500,[])
const fruitsDeMerALaCreme=new Item("Fruits De Mer à la Crème","nothing",38500,[])
const ojjaFruitDeMer= new Item("Ojja Fruits De Mer","nothing",31500,[])
const ojjaMerguez=new Item("Ojja Merguez","nothing for now",19500,[".."])

const nosPlats=new Category("Nos plats",[escalopeGrillée,escalopePannée,cordonBleu,brochettes,pouletCréme,kababViande,eminceBoeuf,coteAlos,grilladeMixte,filletboeuf,poissonDaurade,poissonLoup,calamarDore,calamrgrille,fruitsDeMerALaCreme,ojjaFruitDeMer,ojjaMerguez])
const sale=new Section("Salé",[nosPlats])

const Container=document.getElementById("categories-container");