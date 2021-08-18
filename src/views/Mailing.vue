<template>
    <div>
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">SMS</h3>
            </div>
            <div class="card-body">
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
                                    Выбрать получателей (выбрано:{{
                                        choosen.length
                                    }})
                                </button>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-group my-5 col-md-6">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Текст SMS</span>
                        </div>
                        <textarea
                            v-model="mailing.smsText"
                            type="text"
                            class="form-control"
                            placeholder="текст SMS"
                        ></textarea>
                        <div class="input-group-append">
                            <span class="input-group-text"
                                >Символов: {{ mailing.smsText.length }}
                            </span>
                        </div>
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
                <button class="btn btn-info btn-block" @click="sendSMS">
                    Начать рассылку
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
                sendEmailToAll: true,
                emailTemplate: "",
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
        smsPercent() {
            return Math.floor(
                (100 * this.mailing.smsSent) / this.mailing.smsQuantity
            );
        },
    },

    mounted() {},

    methods: {
        chooseUsers() {
            this.saveToDatabase().then(() => {
                this.$successMessage("Настройки записаны");
            });

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
    },
};
</script>
