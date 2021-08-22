// returns array
export default function searchUsers(array, pattern) {
    return Object.values(array)
        .map((item) => item.toString())
        .filter((item) => item.includes(pattern));
}
