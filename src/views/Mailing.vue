<template>
    <div>
        <div class="card card-info shadow">
            <div class="card-header">
                <h3 class="card-title">SMS</h3>
            </div>
            <div class="card-body mt-5">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"
                            >Пользователи для рассылки SMS:
                        </span>
                    </div>
                    <div class="row form-group">
                        <div class="form-check mx-3">
                            <label class="form-check-label"
                                ><input
                                    v-model="mailing.smsToAll"
                                    class="form-check-input"
                                    type="radio"
                                    name="radio3"
                                    value="все"
                                />Все пользователи</label
                            >
                        </div>
                        <div class="form-check mx-3">
                            <label class="form-check-label"
                                ><input
                                    v-model="mailing.smsToAll"
                                    class="form-check-input"
                                    type="radio"
                                    name="radio3"
                                    value="выбранные"
                                />
                                Выбранные
                                <button
                                    class="btn btn-default"
                                    :disabled="showPicker"
                                    @click="chooseUsers"
                                >
                                    Выбрать получателей
                                </button>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row border my-3">
                    <div class="input-group my-5 col-md-6">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                Текст SMS ({{ mailing.smsText.length }} символов
                                ):
                            </span>
                        </div>
                        <textarea
                            v-model="mailing.smsText"
                            type="text"
                            class="form-control"
                            placeholder="текст SMS"
                        ></textarea>
                    </div>
                    <div class="col-md-6 my-5">
                        <p>Количество SMS: {{ mailing.smsQuantity }}</p>
                        <p>
                            Рассылка выполнена:
                            {{ ` ${smsPercent}%    шт: ${mailing.smsSent}` }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button
                    class="btn btn-outline-info btn-lg btn-block"
                    @click="sendSMS"
                >
                    Начать рассылку
                </button>
            </div>
        </div>

        <div class="card card-info mt-5 shadow">
            <div class="card-header">
                <h3 class="card-title">E-mail</h3>
            </div>
            <div class="card-body mt-5">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"
                            >Пользователи для рассылки email:
                        </span>
                    </div>
                    <div class="row form-group">
                        <div class="form-check mx-3">
                            <label class="form-check-label"
                                ><input
                                    v-model="mailing.emailToAll"
                                    class="form-check-input"
                                    type="radio"
                                    name="radio4"
                                    value="все"
                                />Все пользователи</label
                            >
                        </div>
                        <div class="form-check mx-3">
                            <label class="form-check-label"
                                ><input
                                    v-model="mailing.emailToAll"
                                    class="form-check-input"
                                    type="radio"
                                    name="radio4"
                                    value="выбранные"
                                />
                                Выбранные
                                <button
                                    class="btn btn-default"
                                    :disabled="showPicker2"
                                    @click="chooseUsers"
                                >
                                    Выбрать получателей
                                </button>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row border my-3">
                    <div class="col-md-7">
                        <div class="input-group my-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    Загрузить HTML-письмо:
                                </span>
                            </div>
                            <label class="m-3 btn btn-outline-secondary px-5">
                                Загрузить
                                <i class="fas fa-file ml-1"></i>
                                <input
                                    type="file"
                                    class="custom-file-input"
                                    accept="*.html"
                                    hidden
                                    @change="uploadFile"
                                />
                            </label>
                        </div>
                        <div class="input-group my-5">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    Загружен файл:
                                </span>
                            </div>
                            <span class="mx-3">{{ mailing.emailTemplateName }}</span>
                        </div>
                        <div class="input-group my-5">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    Шаблон используемый в текущей рассылке:
                                </span>
                            </div>
                            <span class="mx-3">{{ mailing.emailTemplateName }}</span>
                        </div>
                        <div class="col-md-6 my-5">
                            <p>
                                Количество писем: {{ mailing.emailsQuantity }}
                            </p>
                            <p>
                                Рассылка выполнена:
                                {{
                                    ` ${emailsPercent}%    шт: ${mailing.emailsSent}`
                                }}
                            </p>
                        </div>
                    </div>

                    <div class="col-md-5 my-3">
                        <div class="card shadow">
                            <div class="card-header bg-gray">
                                <h5>5 последних загруженных шаблонов:</h5>
                            </div>
                            <table class="table table-striped">
                                <tr
                                    v-for="item in templatesToShow"
                                    :key="item.fileUrl"
                                >
                                    <td>
                                        <input
                                            id="choosing"
                                            v-model="item.choosen"
                                            type="checkbox"
                                        />
                                    </td>
                                    <td>
                                        {{ item.title }}
                                    </td>
                                    <td>
                                        <button
                                            class="
                                                btn btn-sm btn-outline-danger
                                            "
                                            @click="removeTemplate(item)"
                                        >
                                            <i class="far fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button
                    class="btn btn-outline-info btn-lg btn-block"
                    @click="sendEmail"
                >
                    Начать e-mail рассылку
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mailing: {
                smsToAll: "все",
                smsQuantity: 100,
                smsSent: 10,
                smsText: "",
                emailToAll: true,
                emailTemplate: "",
                emailTemplateName: "",
                emailsQuantity: 129,
                emailsSent: 16,
                emailTemplates: [],
            },
            users: [],
            choosen: [],
        };
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadFromDatabase());
    },

    computed: {
        showPicker() {
            return this.mailing.smsToAll === "все";
        },
        showPicker2() {
            return this.mailing.emailToAll === "все";
        },

        smsPercent() {
            return Math.floor(
                (100 * this.mailing.smsSent) / this.mailing.smsQuantity
            );
        },

        emailsPercent() {
            return Math.floor(
                (100 * this.mailing.emailsSent) / this.mailing.emailsQuantity
            );
        },

        templatesToShow() {
            return this.mailing.emailTemplates.slice(-5);
        },
    },

    mounted() {},

    methods: {
        chooseUsers() {
            this.saveToDatabase();

            this.$router.push({
                name: "ChooseUsers",
            });
        },

        async saveToDatabase() {
            const payload = this.mailing;
            const path = `/mailing`;

            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            });
        },

        async loadFromDatabase() {
            let path = `/mailing`;

            let result = await this.$store.dispatch("readFromDatabase", path);
            if (result) this.mailing = result;

            path = `/users`;

            result = await this.$store.dispatch("readFromDatabase", path);
            if (result) this.users = result;
        },

        sendSMS() {
            if (this.mailing.smsToAll == "все") {
                this.choosen = this.users;
            } else {
                this.choosen = this.users.filter((item) => item.choosen);
            }
            const sentOk = this.choosen.length;
            this.mailing.smsSent += sentOk;
            this.mailing.smsQuantity += sentOk;
            this.$successMessage(`Успешно отправлено ${sentOk} SMS`);
        },

        sendEmail() {
            if (this.mailing.emailToAll == "все") {
                this.choosen = this.users;
            } else {
                this.choosen = this.users.filter((item) => item.choosen);
            }
            const sentOk = this.choosen.length;
            this.mailing.emailsSent += sentOk;
            this.mailing.emailsQuantity += sentOk;
            this.$successMessage(`Успешно отправлено ${sentOk} e-mail`);
        },

        async uploadFile(event, path = "files/") {
            const file = event.target.files[0];
            if (!file) return false;
            this.mailing.emailTemplateName = file.name;

            this.mailing.emailTemplate = await this.$store.dispatch(
                "uploadToStorage",
                {
                    file,
                    path,
                }
            );
            this.mailing.emailTemplates.push({
                choosen: true,
                title: file.name,
                fileUrl: this.mailing.emailTemplate,
            });

            this.saveToDatabase();

            this.$successMessage("Шаблон добавлен");
        },

        removeTemplate(target) {
            this.$store.dispatch("removeFromStorage", target.fileUrl);

            this.mailing.emailTemplates = this.mailing.emailTemplates.filter(
                (item) => item != target
            );
            this.saveToDatabase();
            this.$successMessage("Шаблон удален");
        },
    },
};
</script>
