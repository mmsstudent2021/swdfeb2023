class TitleUI {
    constructor(titleText,className = null){
        const h1 = document.createElement("h1");
        h1.innerText = titleText;
        className && (h1.className = className);
        return h1;
    }
}

export default TitleUI;