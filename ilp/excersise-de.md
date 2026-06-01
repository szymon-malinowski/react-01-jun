# Individuelle Learning Phase: React 19 – Komponenten, Props und dynamische Listen

## Dein Ziel

Du baust eine kleine React-19-Anwendung für einen Produktkatalog. Dabei zerlegst du die Oberfläche in verschachtelte Komponenten, gibst Daten per Props weiter, renderst Listen mit `map()` und achtest auf sinnvolle `key`-Props. Am Ende hast du eine wiederverwendbare Struktur, mit der du mehrere Produktlisten darstellen kannst.

## Das brauchst du

- Ein laufendes React-19-Projekt
- Einen Editor, z. B. VS Code
- Einen Browser
- Grundlegende Kenntnisse in JSX, Komponenten und `useState`
- Optional: ein bereits erstelltes Vite-Projekt als Startpunkt

## Zeitplanung

- 10 Minuten: Projekt prüfen und Daten vorbereiten
- 20 Minuten: Komponentenhierarchie aufbauen
- 25 Minuten: Erste Liste mit `map()` rendern
- 25 Minuten: Wiederverwendbare Karten-Komponente erstellen
- 20 Minuten: Zweite Listenansicht ergänzen
- 20 Minuten: Erweitern, prüfen, aufräumen

## Basis-Aufgaben

### Aufgabe 1:

Produktdaten vorbereiten **Ziel:** Du legst eine realistische Datenbasis an, mit der du später Listen und Komponenten testen kannst.

**Arbeitsauftrag:**  
Erstelle in deiner `App`-Komponente oder in einer separaten Datei ein Array mit mindestens 6 Produkten. Jedes Produkt soll mindestens diese Eigenschaften haben:

- `id`
- `name`
- `price`
- `category`
- `inStock`
- `description`

Lege die Daten so an, dass sich mindestens 2 Kategorien ergeben, z. B. „Zubehör“ und „Hardware“. Speichere die Produktliste in `state` oder übergib sie zunächst als konstante Datenstruktur.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine saubere Produktdatenbasis, die sich direkt in JSX weiterverarbeiten lässt. Jedes Element besitzt eine eindeutige `id`.

---

### Aufgabe 2:

Komponentenhierarchie erstellen **Ziel:** Du strukturierst die Anwendung in mehrere verschachtelte Komponenten.

**Arbeitsauftrag:**  
Plane und erstelle folgende Komponenten:

- `App`
- `PageHeader`
- `ProductSection`
- `ProductList`
- `ProductCard`

Baue zunächst ein Grundlayout auf:

- `App` enthält die Gesamtdaten
- `PageHeader` zeigt einen Titel und einen kurzen Untertitel
- `ProductSection` kapselt jeweils einen Bereich mit Überschrift
- `ProductList` ist für das Rendern der Liste zuständig
- `ProductCard` zeigt die Daten eines einzelnen Produkts

Verwende die Komponenten direkt im JSX und verschachtele sie sinnvoll.

**Erwartetes Ergebnis / Soll-Zustand:**  
Deine Anwendung besteht aus mehreren klar getrennten Komponenten, die miteinander zusammengesetzt sind. Im Browser ist mindestens eine strukturierte Seite mit Überschrift und Platzhaltern oder ersten Daten sichtbar.

---

### Aufgabe 3:

Daten von Eltern zu Kind weitergeben **Ziel:** Du übergibst Produktdaten per Props durch die Komponentenhierarchie.

**Arbeitsauftrag:**  
Übergebe die Produktliste aus `App` an `ProductSection` und von dort an `ProductList`. Achte darauf, dass die Daten nicht in jeder Komponente neu definiert werden. Übergib zusätzlich einen Titel für den Abschnitt, z. B. „Alle Produkte“.

Nutze in `ProductList` die übergebenen Daten, um die Einträge mit `map()` zu rendern. Übergib jedes Produkt weiter an `ProductCard`.

**Erwartetes Ergebnis / Soll-Zustand:**  
Die Daten fließen nachvollziehbar von oben nach unten durch deine Komponenten. `ProductList` rendert die Einträge dynamisch aus Props, und `ProductCard` bekommt genau die Daten für ein einzelnes Produkt.

---

### Aufgabe 4:

Wiederverwendbare Produktkarte umsetzen **Ziel:** Du baust eine Komponente, die für unterschiedliche Produkte mehrfach verwendet werden kann.

**Arbeitsauftrag:**  
Setze `ProductCard` so um, dass sie mindestens diese Inhalte anzeigt:

- Produktname
- Kategorie
- Preis
- Kurzbeschreibung
- Lagerstatus, z. B. „Auf Lager“ oder „Nicht auf Lager“

Verwende Props statt festem Text. Ergänze innerhalb der Karte bei Bedarf kleine Unterelemente, z. B. eine separate Darstellung für den Status. Achte darauf, dass dieselbe `ProductCard` für alle Produkte funktioniert, ohne angepasst werden zu müssen.

**Erwartetes Ergebnis / Soll-Zustand:**  
Jedes Produkt wird in derselben wiederverwendbaren Kartenstruktur dargestellt. Die Inhalte unterscheiden sich nur über die Props.

---

### Aufgabe 5:

Mehrere Listen mit derselben Struktur anzeigen **Ziel:** Du nutzt bestehende Komponenten mehrfach und zeigst, dass deine Lösung wiederverwendbar ist.

**Arbeitsauftrag:**  
Erstelle eine zweite `ProductSection`, die nicht alle Produkte zeigt, sondern nur eine Teilmenge, z. B.:

- nur Produkte, die auf Lager sind
- nur Produkte einer bestimmten Kategorie
- nur Produkte unter einem bestimmten Preis

Bereite die gefilterte Liste in `App` vor und übergib sie an dieselben Komponenten wie in der ersten Section. Verwende für beide Bereiche dieselbe `ProductList` und dieselbe `ProductCard`.

**Erwartetes Ergebnis / Soll-Zustand:**  
Im Browser sind zwei getrennte Bereiche sichtbar, die beide dieselben wiederverwendbaren Komponenten nutzen, aber unterschiedliche Daten anzeigen.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Leere Liste sinnvoll behandeln

**Ziel:** Du machst deine Listen-Komponente robuster.

**Arbeitsauftrag:**  
Erweitere `ProductList` so, dass bei einer leeren Liste nicht einfach nichts erscheint. Zeige stattdessen eine gut lesbare Meldung an, z. B. „Keine Produkte gefunden“. Teste das mit einer bewusst leeren Section.

**Erwartetes Ergebnis / Soll-Zustand:**  
Deine Listen-Komponente zeigt sowohl gefüllte als auch leere Zustände sauber an.

---

### Erweiterungsaufgabe 2: Zusätzliche wiederverwendbare Status-Komponente

**Ziel:** Du zerlegst deine Oberfläche weiter in kleine, klar abgegrenzte Bausteine.

**Arbeitsauftrag:**  
Lagere die Anzeige des Lagerstatus aus `ProductCard` in eine eigene Komponente aus, z. B. `StockBadge`. Übergib nur die benötigten Informationen per Props und binde die neue Komponente in `ProductCard` ein.

**Erwartetes Ergebnis / Soll-Zustand:**  
`ProductCard` ist übersichtlicher geworden, und die Statusanzeige ist als eigenständige, wiederverwendbare Komponente umgesetzt.

---

### Erweiterungsaufgabe 3: Schlüssel prüfen und verbessern

**Ziel:** Du setzt `key`-Props korrekt ein und vermeidest typische Listenfehler.

**Arbeitsauftrag:**  
Überprüfe deine `map()`-Ausgabe in `ProductList`. Stelle sicher, dass jeder Listeneintrag einen stabilen, eindeutigen `key` erhält. Verwende nicht den Array-Index, wenn eine eindeutige `id` vorhanden ist. Dokumentiere in einem kurzen Kommentar direkt im Code, warum du dich für diesen `key` entschieden hast.

**Erwartetes Ergebnis / Soll-Zustand:**  
Jeder dynamisch gerenderte Eintrag besitzt einen sinnvollen `key`, und deine Listenstruktur ist technisch sauber umgesetzt.

## Wichtige Hinweise

- Arbeite schrittweise und teste nach jeder Aufgabe im Browser.
- Achte darauf, dass du Daten nur einmal zentral pflegst und dann per Props weitergibst.
- Verwende für Listen immer `map()`.
- Vergib für Listenelemente stabile `key`-Props auf Basis einer eindeutigen `id`.
- Halte Komponenten klein und klar verantwortlich.
- Wenn du CSS nutzt, halte das Styling einfach und konzentriere dich auf die React-Struktur.
- Benenne Props und Komponenten eindeutig und konsistent.

## Reflexionsfragen

- Welche Daten liegen in `App`, und warum ist das sinnvoll?
- An welchen Stellen gibst du Daten von Eltern- zu Kind-Komponenten weiter?
- Welche Komponente ist in deiner Lösung am besten wiederverwendbar?
- Warum ist `map()` für dynamisches Rendering in React nützlich?
- Warum ist die `key`-Prop bei Listen wichtig?
- Woran erkennst du, dass deine Komponentenhierarchie klar und wartbar ist?

---