import { filter } from "./VersionContainer"

it("Should filter by puissance", () => {
    // Given
    const vehicules = [{ puissance:4 }, { puissance:5 }, { puissance:6 }]

    // When
    let vehiculesFiltered = filter(vehicules, 4)

    // Then
    expect(vehiculesFiltered).toEqual([{ puissance:4 }])
})