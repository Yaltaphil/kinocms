<template>
    <form>
        Film details {{ filmId }} form
        <p>{{ destination }}</p>

        <!-- Input addon -->
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">Input Addon</h3>
            </div>
            <div class="card-body">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Название</span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="название фильма"
                    />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Описание</span>
                    </div>
                    <textarea
                        type="text"
                        class="form-control"
                        placeholder="описание"
                    ></textarea>
                </div>

                <div class="input-group">Главная картинка</div>
                <div class="input-group">Галерея картинок</div>
                <div class="">
                    SEO

                    <div class="input-group input-group-sm mb-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">URL</span>
                        </div>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="url"
                        />
                    </div>
                    <div class="input-group input-group-sm mb-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Title</span>
                        </div>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="title"
                        />
                    </div>
                    <div class="input-group input-group-sm mb-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Keywords</span>
                        </div>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="keywords"
                        />
                    </div>
                     <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Description</span>
                    </div>
                    <textarea
                        type="text"
                        class="form-control"
                        placeholder="описание"
                    ></textarea>
                </div>

                </div>

                <div class="card-footer">
                    <button type="submit" class="btn btn-info">
                        Сохранить
                    </button>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-info">
                        Вернуть базовую версию
                    </button>
                </div>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </form>
</template>

<script>
export default {
    props: {
        film: {
            type: Object,
            requred: true,
        },
        filmId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            currentFilm: this.film,
        };
    },
    computed: {
        destination() {
            return this.$route.params.filmId;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>