import matchingUsers from "@/utils/matchingUsers.js";

const pattern = "cb";

const users = [
    { name: "aaaa", nick: "bbbb" },
    { name: "aacc", nick: "ccbb" },
    { name: "ssaa", nick: "cbcd" },
    { name: "ivan", age: 25 },
];

describe("Testing function", () => {
    test("This function return object", () => {
        expect(typeof matchingUsers(users, pattern)).toBe("object");
    });

    test("search for number field:", () => {
        expect(matchingUsers(users, "25")).toStrictEqual([
            { name: "ivan", age: 25 },
        ]);
    });

    test("search for string field:", () => {
        expect(matchingUsers(users, pattern)).toStrictEqual([
            { name: "aacc", nick: "ccbb" },
            { name: "ssaa", nick: "cbcd" },
        ]);
    });

    test("search for nothing", () => {
        expect(matchingUsers(users, "")).toStrictEqual(users);
    });

    test("search in empty array", () => {
        expect(matchingUsers([], "pattern")).toStrictEqual([]);
    });
});
