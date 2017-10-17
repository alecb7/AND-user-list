const request = require("superagent");

test("Users listing returned", done => {
  const users = JSON.parse(
    '[{"_id": "59e5dc6202b762d8c13ce86c", "age": "21", "firstName": "Olly", "lastName": "Nural", "nat": "British", "userid": 1}, {"_id": "59e5dc6202b762d8c13ce86d", "age": "30", "firstName": "Graziano", "lastName": "Statello", "nat": "Italian", "userid": 2}, {"_id": "59e5dc6202b762d8c13ce86e", "age": "20", "firstName": "Jasmien", "lastName": "Cels", "nat": "some", "userid": 3}, {"_id": "59e5dc6202b762d8c13ce86f", "age": "24", "firstName": "Mickell", "lastName": "Crawford", "nat": "British", "userid": 4}]'
  );

  request
    .get("http://localhost:8080/users")
    .set("accept", "json")
    .end((err, res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual(users);
      done();
    });
});
