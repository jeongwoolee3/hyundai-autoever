import { http, HttpResponse } from "msw";
import { CATEGORIES } from "./data/categories";
import { ITEMS } from "./data/items";
import { isValidTab } from "./types";

export const handlers = [
  http.get("/api/faq/category", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");

    if (!tab || !isValidTab(tab)) {
      return HttpResponse.json({ message: "not valid tab" }, { status: 404 });
    }

    return HttpResponse.json(CATEGORIES[tab]);
  }),

  http.get("/api/faq", ({ request }) => {
    const url = new URL(request.url);
    const limitStr = url.searchParams.get("limit");
    const offsetStr = url.searchParams.get("offset");
    const tab = url.searchParams.get("tab");

    if (!tab || !isValidTab(tab)) {
      return HttpResponse.json({ message: "not valid tab" }, { status: 400 });
    }

    if (!limitStr || !offsetStr) {
      return HttpResponse.json(
        { message: "not valid limit, offset" },
        { status: 400 }
      );
    }

    const limit = Number(limitStr);
    const offset = Number(offsetStr);

    const allItems = ITEMS[tab];
    const items = allItems.slice(offset, offset + limit);
    const pageInfo = {
      totalRecord: allItems.length,
      offset: offset,
      limit: limit,
      prevOffset: Math.max(offset - limit, 0),
      nextOffset: offset + limit,
    };

    return HttpResponse.json({ pageInfo, items });
  }),
];
