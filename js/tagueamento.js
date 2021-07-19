// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//Função para evento de Link externo:
function handleOutboundLinkClicks(event) {
	ga('send', 'event', {
		eventCategory: 'Link externo',
		eventAction: 'click',
		eventLabel: event.target.href,
		transport: 'beacon'
	});
}

let link_ext_val = document.getElementById("link_ext_dp6");
link_ext_val.addEventListener("click", handleOutboundLinkClicks, false);


//Função para tratar eventos na opção Tristique.
function EventAnaliseTq(){
	ga('send', {
		hitType: 'event',
		eventCategory: 'Analise',
		eventAction: 'click',
		eventLabel: 'Tristique'
	});

}

let btn_analisetq = document.getElementById("href_analise_tq");
btn_analisetq.addEventListener("click", EventAnaliseTq, false);

//Funcao para tratar eventos na opção conclusão.
function EventAnaliseConl(){
	ga('send', {
		hitType: 'event',
		eventCategory: 'Analise',
		eventAction: 'click',
		eventLabel: 'Conclusao'
	});

}

let btn_analiseconcl = document.getElementById("href_analise_conl");
btn_analiseconcl.addEventListener("click", EventAnaliseConl, false);

//Função que registra o evento de click na opção de Download index!
function download_revista(){
	ga('send', {
		hitType: "event",
		eventCategory: "menu",
		eventAction: "download_pdf",
		eventLabel: "download_pdf"
	});

}

let opcao_baixar = document.getElementById("href_pdf");
opcao_baixar.addEventListener("click", download_revista, false);


//Função que registra o evento de click na opção de Download Sobre!
function download_revista_sobre(){
	ga('send', {
		hitType: "event",
		eventCategory: "menu",
		eventAction: "download_pdf",
		eventLabel: "download_pdf"
	});

}

let opcao_baixar_sobre = document.getElementById("href_pdf_sobre");
opcao_baixar_sobre.addEventListener("click", download_revista_sobre, false);


//Função que registra o evento de click na opção de Download analise!
function download_revista_analise(){
	ga('send', {
		hitType: "event",
		eventCategory: "menu",
		eventAction: "download_pdf",
		eventLabel: "download_pdf"
	});

}

let opcao_baixar_analise = document.getElementById("href_pdf_analise");
opcao_baixar_analise.addEventListener("click", download_revista_analise, false);



//Função para evento de Link externo para Contato com a dp6 page Index:
function functionContatoDp6(event) {
	ga('send', 'event', {
		eventCategory: "menu",
		eventAction: "entre_em_contato",
		eventLabel: "link_externo",
		transport: 'beacon'
	});
}

let link_contatodp6 = document.getElementById("href_contato_idx");
link_contatodp6.addEventListener("click", functionContatoDp6, false);

//Função para evento de Link externo para Contato com a dp6 page Sobre:
function functionContatoDp6Sobre(event) {
	ga('send', 'event', {
		eventCategory: "menu",
		eventAction: "entre_em_contato",
		eventLabel: "link_externo",
		transport: 'beacon'
	});
}

let link_contatodp6_sobre = document.getElementById("href_contato_sobre");
link_contatodp6_sobre.addEventListener("click", functionContatoDp6Sobre, false);

//Função para evento de Link externo para Contato com a dp6 page analise:
function functionContatoDp6Analise(event) {
	ga('send', 'event', {
		eventCategory: "menu",
		eventAction: "entre_em_contato",
		eventLabel: "link_externo",
		transport: 'beacon'
	});
}

let link_contatodp6_analise = document.getElementById("href_contato_analise");
link_contatodp6_analise.addEventListener("click", functionContatoDp6Analise, false);


//Função para evento page analise:
function function_page_analise(event) {
	ga('send', 'event', {
		eventCategory: "analise",
		eventAction: "ver_mais",
		eventLabel: "Lorem"
	});
}

let lorem_analise_val = document.getElementById("lorem_analise_id");
lorem_analise_val.addEventListener("click", function_page_analise, false);


//Função para evento page analise:
function function_page_analise_ipsum(event) {
	ga('send', 'event', {
		eventCategory: "analise",
		eventAction: "ver_mais",
		eventLabel: "Ipsum"
	});
}

let ipsum_analise_val = document.getElementById("ipsum_analise_id");
ipsum_analise_val.addEventListener("click", function_page_analise_ipsum, false);


//Função para evento page analise:
function function_page_analise_dolor(event) {
	ga('send', 'event', {
		eventCategory: "analise",
		eventAction: "ver_mais",
		eventLabel: "Dolor"
	});
}

let dolor_analise_val = document.getElementById("dolor_analise_id");
dolor_analise_val.addEventListener("click", function_page_analise_dolor, false);


//Função para evento do input nome do formulário:
function contato_nome(event) {
	ga('send', 'event', {
		eventCategory: "contato",
		eventAction: "nome",
		eventLabel: "preencheu"
	});
}

let nome = document.getElementById("nome");
nome.addEventListener("click", contato_nome, false);


//Função para evento do input email do formulário:
function contato_email(event) {
	ga('send', 'event', {
		eventCategory: "contato",
		eventAction: "email",
		eventLabel: "preencheu"
	});
}

let email = document.getElementById("email");
email.addEventListener("click", contato_email, false);


//Função para evento do input telefone do formulário:
function contato_telefone(event) {
	ga('send', 'event', {
		eventCategory: "contato",
		eventAction: "telefone",
		eventLabel: "preencheu"
	});
}

let telefone = document.getElementById("telefone");
telefone.addEventListener("click", contato_telefone, false);


//Função para evento do input Aceito do formulário:
function contato_aceito(event) {
	ga('send', 'event', {
		eventCategory: "contato",
		eventAction: "aceito",
		eventLabel: "preencheu"
	});
}

let aceito = document.getElementById("aceito");
aceito.addEventListener("click", contato_aceito, false);


//Função para evento de popup:
function popup_screen(event) {
	ga('send', 'event', {
		eventCategory: "contato",
		eventAction: "enviado",
		eventLabel: "enviado",
		transport: 'beacon'
	});
}

let btn_sub = document.getElementById("btn_submit");
btn_sub.addEventListener("click", popup_screen, false);