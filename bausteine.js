/* Erstellt einen eigenständigen HTML-Element wie zb hr, br, img */
function singleElement(tag) {
  return `<${tag}>`;
}
/* Erstellt ein HTML Block-Element wie zb zb hr, br, img mit zwei Attributen */
function singleElementEx(tag, attr) {
  // <img class = "xyz" src = "meinbild.png" />
  //  --- ------------- --------------------
  //  tag    attr 0        attr 1
  /* n = [ { a : "Apfel", b : "Birne" } ]
          [
            {
              name : "x",
              wert : "y"
            }
          ]
        */
  return `<${tag} ${attr[0].name} = "${attr[0].wert}" ${attr[1].name} = "${attr[1].wert}" />`;
}
/* Erstellt ein HTML Block-Element wie zb div oder p */
function blockElement(tag, wert) {
  return `<${tag}>${wert}</${tag}>`;
}
/* Erstellt ein HTML Block-Element wie zb div oder p mit einem Attribut */
function blockElementEx(tag, wert, attr) {
  // <p class = "hurra">ABC ALLES IST GUT</p>
  /* n = [ "Apfel", "Birne" ]
          [
            "x",
            "y"
          ]
        */
  return `<${tag} ${attr[0]} = "${attr[1]}">${wert}</${tag}>`;
}
/* Erstellt ein HTML Block-Element wie zb div oder p mit zwei Attribut */
function blockElementEx2(tag, wert, attr) {
  /*
          <..........     ...... = "......."> ..... </......>
          <div    id = "wow">                inhalt </div>
           tag     attr                      wert
        */
  return `<${tag} ${attr[0].name} = "${attr[0].wert}" ${attr[1].name} = "${attr[1].wert}">${wert}</${tag}>`;
}
