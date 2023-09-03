const inputForm = () => {
    const form = document.createElement("form");
    form.id = "inputForm";
    form.innerHTML = `
        <input name="input_text" />
        <button>Add</button>
    `;

    return form;
}

export default inputForm;