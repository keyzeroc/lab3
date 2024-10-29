import { pickKeys } from "../objectManipulation";

test("pickKeys", () => {
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue",
  };
  expect(pickKeys(car, ["make", "model"])).toEqual({
    make: "Toyota",
    model: "Camry",
  });
});
