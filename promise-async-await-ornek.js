function getUser(id){
    console.log(`${id} idli kullanıcının bilgisi ekrana getiriliyor.`);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ad:'bilal',id:id});
        }, 2000);
    });
}

function getCourses(userName){
    console.log(`${userName} isimli kullanıcının kursları getiriliyor.`);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(['node','js','react']);
            //reject("kursları getirirken hata çıktı");
        }, 2000);
    });
}

function getComments(kursAdi){
    console.log(`${kursAdi} isimli kursun yorumları getiriliyor`);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("kurs harika");
        }, 2000);
    });
}


//Promise then-catch gösterim

/* getUser(12345)
    .then(user=>getCourses(user.ad))
    .then(kurslardizisi=>getComments(kurslardizisi[0]))
    .then(yorum=>console.log(yorum))
    .catch(hata=>console.log("hata çıktı:"+hata)); */


//Async-await gösterim
yorumlarıGoster();

async function yorumlarıGoster(){

    try{
        const userObje=await getUser(45675);
        const kurslarDizisi=await getCourses(userObje.ad);
        const yorum=await getComments(kurslarDizisi[0]);
        console.log(yorum);
    }catch(err){
        console.log("hata çıktı:"+err);
    }

}




















