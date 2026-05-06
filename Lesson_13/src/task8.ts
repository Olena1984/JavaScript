/* 
При старті питаємо у користувача чи хоче він читати новини. Якщо так, то одразу переходимо до сайту Ukr.Net, якщо ні, то через 20 секунд самі переходимо на сайт ukr.net. Для цього
через 20 секунд після відкриття треба виконати команду window.location.href = 'https://www.ukr.net/'
*/
const url:string = 'https://www.ukr.net/'

function transitionToSite():void {
    const questionToUser = confirm(`Хочете прочитати новини?`)
    if (questionToUser) {
        window.location.href = url
    }else{
        setTimeout(() => {
            window.location.href = url
        }, 20000);
    }
}
transitionToSite()