import searchUsers from "@/utils/searchFunction.js";

const users = [
    { name: "gleb", nick: "gl" },
    { name: "ivan", age: 25 },
];

describe("Testing searchUsers function", () => {
    test("This function exists", () => {
        expect(searchUsers.exists()).toBeTruthy();
    });

    test("seach for string field:", () => {
        expect(searchUsers(users, "gle").toBe({ name: "Gleb", nick: "gl" }));
    });
});
