// ULTRA JANKY MAIS CA MARCHE ET LES GENS SONT DANS LE STORE.

import { useStudentsStore } from "../stores/students";

export async function modify_entity(entity, id) {
    console.log("Modify entity");

}

export async function delete_entity(place, entity_id) {
    console.log("Lapin");
    let response = fetch("http://127.0.0.1:8000/api/" + place + "/" + entity_id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((r) => r.json())
        .catch();
    console.log(response);
}