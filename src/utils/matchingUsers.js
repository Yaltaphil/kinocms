export default function matchingUsers(users, pattern) {
    return users.filter((item) =>
        Object.values(item)
            .map((item) => item.toString())
            .some((item) => item.includes(pattern.toString()))
    );
}
