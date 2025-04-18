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
    const faqCategoryID = url.searchParams.get("faqCategoryID");
    const question = url.searchParams.get("question")?.toLowerCase();

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

    let allItems = ITEMS[tab];
    const categoryIDtoNameMap: Record<string, string> = {};

    Object.values(CATEGORIES).forEach((list) => {
      list.forEach(({ categoryID, name }) => {
        categoryIDtoNameMap[categoryID] = name;
      });
    });

    if (faqCategoryID) {
      const name = categoryIDtoNameMap[faqCategoryID];
      const key = tab === "CONSULT" ? "subCategoryName" : "categoryName";
      allItems = allItems.filter((item) => item[key] === name);
    }

    if (question) {
      allItems = allItems.filter((item) => {
        return Object.values(item).some((value) => {
          if (typeof value !== "string") return false;
          return value.toLowerCase().includes(question.toLowerCase());
        });
      });
    }
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
