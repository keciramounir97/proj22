
## 🔁 **DÉROULEMENT GLOBAL DU PROGRAMME**

1. L’utilisateur tape une tâche dans l’input et clique sur "Add Task".
2. La tâche est ajoutée à la liste (`<ul>`) avec deux boutons : **Modifier** et **Supprimer**.
3. Le bouton **Modifier** ouvre une fenêtre pour changer le nom de la tâche.
4. Le bouton **Supprimer** enlève la tâche de la liste et du tableau `names`.

---

## 🧠 **EXPLICATION LIGNE PAR LIGNE EN FRANÇAIS**

```js
const names = [];
```

* On crée un **tableau vide** pour stocker toutes les tâches saisies.

```js
const form = document.getElementById("nameForm");
const input = document.getElementById("nameInput");
const list = document.getElementById("nameList");
```

* On récupère les éléments HTML par leur `id` :

  * `form` : le formulaire contenant l’input et le bouton.
  * `input` : le champ de texte où l’utilisateur écrit une tâche.
  * `list` : la liste `<ul>` où les tâches seront affichées.

---

```js
form.addEventListener("submit", function (event) {
  event.preventDefault();
```

* On écoute l'événement **submit** (quand on clique sur "Add Task").
* `preventDefault()` empêche que la page se **recharge** (comportement par défaut d’un formulaire).

---

```js
  const inputname = input.value.trim();
```

* On récupère la **valeur** saisie par l’utilisateur.
* `.trim()` enlève les **espaces inutiles** au début et à la fin.

---

```js
  if (inputname === "") return;
```

* Si le champ est vide, on **arrête le programme** (ne rien faire).

---

```js
  names.push(inputname);
```

* On ajoute la tâche dans le tableau `names`.

---

```js
  const item = document.createElement("li");
  item.textContent = inputname + " ";
  item.dataset.name = inputname;
```

* On crée un élément `<li>` pour représenter la tâche dans la page.
* On y met le texte de la tâche.
* On enregistre le nom dans `dataset.name`, une propriété personnalisée de l’élément (très utile pour le retrouver plus tard).

---

### 🔧 BOUTON MODIFIER (EDIT)

```js
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
```

* On crée un bouton "Edit" pour **modifier la tâche**.

```js
  editBtn.onclick = function () {
    const newName = prompt("Edit task:", item.dataset.name);
```

* Quand on clique dessus, on ouvre une **fenêtre `prompt()`** qui demande un nouveau nom.
* Le champ est pré-rempli avec le nom actuel (stocké dans `dataset.name`).

```js
    if (newName) {
      item.firstChild.textContent = newName + " ";
      names[names.indexOf(item.dataset.name)] = newName;
      item.dataset.name = newName;
    }
  };
```

* Si un nouveau nom est saisi :

  * On change le texte affiché dans le `<li>`.
  * On met à jour la valeur dans le tableau `names`.
  * On met à jour aussi le `dataset.name` pour que les prochaines actions utilisent le bon nom.

---

### 🗑️ BOUTON SUPPRIMER (DELETE)

```js
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
```

* On crée un bouton "Delete" pour **supprimer la tâche**.

```js
  deleteBtn.onclick = function () {
    list.removeChild(item);
    const index = names.indexOf(item.dataset.name);
    if (index > -1) names.splice(index, 1);
  };
```

* Quand on clique dessus :

  * On enlève le `<li>` de la page.
  * On retrouve la tâche dans le tableau `names` grâce à `dataset.name`.
  * On l’enlève du tableau avec `.splice()`.

---

### ➕ AJOUT DES BOUTONS À LA TÂCHE

```js
  const btnContainer = document.createElement("div");
  btnContainer.style.display = "inline-block";
  btnContainer.style.marginLeft = "10px";
```

* On crée un petit conteneur `<div>` pour mettre les deux boutons côte à côte.

```js
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);
```

* On ajoute les deux boutons dans ce conteneur.

---

### 📝 AJOUT FINAL DANS LA PAGE

```js
  item.appendChild(btnContainer);
  list.appendChild(item);
  input.value = "";
});
```

* On ajoute le conteneur de boutons dans l’élément `<li>`.
* On ajoute le `<li>` dans la liste `<ul>`.
* On vide le champ de texte pour que l’utilisateur puisse taper une nouvelle tâche.

---

## ✅ Résumé Visuel

| Élément         | Rôle                                      |
| --------------- | ----------------------------------------- |
| `names`         | Stocke toutes les tâches                  |
| `form`          | Déclenche l’ajout d’une tâche             |
| `inputname`     | Texte saisi par l’utilisateur             |
| `<li>`          | Affiche chaque tâche                      |
| `Edit` bouton   | Permet de modifier la tâche               |
| `Delete` bouton | Permet de supprimer la tâche              |
| `dataset.name`  | Sert de référence pour retrouver la tâche |

---
