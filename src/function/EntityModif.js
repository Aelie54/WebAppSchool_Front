// ULTRA JANKY MAIS CA MARCHE ET LES GENS SONT DANS LE STORE.

import { useTokenStore } from "../stores/token";

import * as mykey from "./PeopleFetch";

export async function modify_entity(entity, id) {
    console.log("Modify entity");

}

export async function delete_entity(place, entity_id) {
    console.log("Lapin");
    const storeToken = useTokenStore();
    console.log(place);
    console.log(entity_id);
    console.log("http://127.0.0.1:8000/api/" + place + "/" + entity_id)
    let response = fetch("http://127.0.0.1:8000/api/" + place + "/" + entity_id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/ld+json"
                    // Authorization: `Bearer ${storeToken.token}`,
            }
        })
        .then()
        .catch();
    // console.log(response);
    // console.log(response);
}