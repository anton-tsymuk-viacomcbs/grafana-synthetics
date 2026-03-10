import { group, sleep, check } from "k6";
import http from "k6/http";

export default function () {
  let params;
  let resp;
  let url;

  group("Default group", function () {
    params = {
      headers: {},
      cookies: {},
    };

    url = http.url`https://quickpaaizza.grafana.com/`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        authorization: `Token Gck7WTaMAB9NKlM1`,
      },
      cookies: {},
    };

    url = http.url`https://quickpizza.grafana.com/api/pizza`;
    resp = http.request(
      "POST",
      url,
      `{"maxCaloriesPerSlice":1000,"mustBeVegetarian":false,"excludedIngredients":[],"excludedTools":[],"maxNumberOfToppings":5,"minNumberOfToppings":2,"customName":""}`,
      params,
    );

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {},
      cookies: {},
    };

    url = http.url`https://quickpizza.grafana.com/api/ratings`;
    resp = http.request("POST", url, `{"pizza_id":24596,"stars":5}`, params);

    check(resp, { "status equals 401": (r) => r.status === 401 });
  });

  sleep(1);
}
