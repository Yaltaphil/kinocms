export default async function load(path) {
    return await this.$store.dispatch("readFromDatabase", path);
}
