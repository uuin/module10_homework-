let users = new Map();
users.set("ключ 1", "вход A");
users.set("ключ 2", "вход B");
users.set("ключ 3", "вход A");
users.set("ключ 4", "вход B");
users.set("ключ 5", "вход A");
users.set("ключ 6", "вход C");
users.set("ключ 7", "вход A");

for (let user of users.keys()){
    console.log(user + " для " + users.get(user));
}