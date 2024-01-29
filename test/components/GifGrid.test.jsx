import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Pruebas en GifGrid", () => {
  const category = "Resident Evil";

  test("Debe de mostar el loading inicialmente", () => {
    render(<GifGrid category={category}/>);
    screen.debug()
  });
});
