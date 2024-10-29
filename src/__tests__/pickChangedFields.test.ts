import { pickChangedFields } from "../objectManipulation";

test("pickChangedFields", () => {
  const oldCar = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue",
  };
  const newCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "red",
  };
  expect(pickChangedFields(oldCar, newCar)).toEqual({
    year: 2022,
    color: "red",
  });
});
