import { omitKeys } from "../objectManipulation";

test("omitKeys", () => {
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue",
  };
  expect(omitKeys(car, ["make", "model"])).toEqual({
    year: 2020,
    color: "blue",
  });
});
