import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@media(max-width:614px){
*{
	box-sizing: border-box;
	--cor-fundo: #FB6B6B;
    --cor-fundo-card: #FFFFD4;
    --cor-nao-lembrei: #FF3030;
    --cor-quase-nao-lembrei: #FF922E;
    --cor-zap: #2FBE34;
    --preto: #333333;
}

body{
	width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--preto);
    font-family: 'Recursive', sans-serif;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	background-color: #FB6B6B;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
}
`
export default GlobalStyle;