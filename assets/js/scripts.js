const avatar = document.querySelector("#avatar")

// Adicionando um evento à um elemento da pag
// menu = avatar
// --> nome_variavel.addEventListener("nome_Evento", função_a_executar)

//                                            HEADER
avatar.addEventListener("click", () =>{
    window.location.href = "https://myaccount.google.com/?hl=pt_BR&utm_source=OGB&utm_medium=act"
})

//                                             BODY 

// const btn2 = document.querySelector(".btn2")
// Ou
const btnEstouComSorte = document.querySelector('form [type="button"]');
btnEstouComSorte.addEventListener("click", () =>{
    // Redirecionando para outro site
    location.href = "https://doodles.google/"
})

//                                             FOOTER

// Adicionando evento para o botão de privacidade
const privacidade = document.querySelector("#Privacidade");
privacidade.addEventListener("click", ()=>{
    location.href = "https://policies.google.com/privacy?hl=pt-BR&fg=1"
})

// Adicionando evento para o botão de termos
const termos = document.querySelector("#Termos");
termos.addEventListener("click", ()=>{
    location.href = "https://policies.google.com/terms?hl=pt-BR&fg=1"
})

// Adicionando evento para o botão de como_funciona_pesquisa
const como_funciona_pesquisa = document.querySelector("#Como_Pesquisa");
como_funciona_pesquisa.addEventListener("click", ()=>{
    location.href = "https://www.google.com/search/howsearchworks/?fg=1"
})


// Adicionando evento para o botão de Negócios
const negocios = document.querySelector("#Negocios");
negocios.addEventListener("click", ()=>{
    location.href = "https://smallbusiness.withgoogle.com/intl/pt-BR_br/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=BR#!/"
})

// Adicionando evento para o botão de Publicidade
const publicidade = document.querySelector("#Publicidade");
publicidade.addEventListener("click", ()=>{
    location.href = "https://ads.google.com/intl/pt-BR_br/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
})

// Adicionando evento para o botão de Sobre
const sobre = document.querySelector("#Sobre");
sobre.addEventListener("click", ()=>{
    location.href = "https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1"
})
