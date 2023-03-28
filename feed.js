/**
 * author: Roman Volkov
 * TGfeed v1.2 *отправляет запрос с бэкенда
 *
 */

document.addEventListener('DOMContentLoaded', () => {
    const feed = new TgBotRV({});
});

class TgBotRV {
    constructor(params) {
        this.params = params;
        this.body = document.body;
        this.form = params.form ?? document.forms.tgform;
        this.time = new Date().toLocaleTimeString();
        if (params) this.form.addEventListener('submit', this.onSubmit.bind(this));
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        const message = this.prepareMsg();
        this.sendMessage(message);
    };

    prepareMsg = () => {
        const data = [...this.form.elements];
        const fields = {};
        const message = [];

        data.forEach((el) => {
            if (el.name) fields[el.name] = el.value;
        });

        for (const key in fields) {
            const value = fields[key];
            message.push(`*Имя поля*:${key}\n*содержимое*: ${value}  \n\n`);
        }

        return message.join('');
    };

    sendMessage = (message) => {
        fetch(`/server.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => console.error(error));
    };
}
