import {createVideoElement} from "../index.js";

describe("Insertar video dado un url", () => {

    const url = "https://vod.addevweb.com/sunmedia/demos/v/normal.mp4";
    const output = createVideoElement(url);
    const child = output.firstChild;

    test("Debe existir un tag llamado <video>", () => {
        expect(output.nodeName).toBe('VIDEO');
      });

    test("Debe tener un atributo 'id' con valor 'videoplayer'", () => {
        expect(output.getAttribute("id")).toBe('videoplayer');
    });

    test("El video debe iniciar de forma automatica", () => {
        expect(output.autoplay).toBe(true);
    });

    test("El video debe iniciar en silencio", () => {
        expect(output.muted).toBe(true);
    });

    test("Debe existir un tag llamado <source> que sea hijo del nodo <video>", () => {
        expect(child.nodeName).toBe('SOURCE');
    });

    test("Debe tener un atributo 'src' con un link del video como valor" , () => {
        expect(child.getAttribute("src")).toBe(url);
    });

    test("Debe tener un atributo 'type' con valor 'video/mp4'" , () => {
        expect(child.getAttribute("type")).toBe('video/mp4');
    });
  });

