# Graph Report - .  (2026-06-08)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 39 nodes · 56 edges · 7 communities (6 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0e83f457`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]

## God Nodes (most connected - your core abstractions)
1. `saveCart()` - 6 edges
2. `addToCartWithSize()` - 5 edges
3. `renderCartSidebar()` - 5 edges
4. `applyFilters()` - 4 edges
5. `catLabel()` - 3 edges
6. `removeFromCart()` - 3 edges
7. `changeQty()` - 3 edges
8. `toggleWishlist()` - 3 edges
9. `showToast()` - 3 edges
10. `renderCard()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `addToCartWithSize()` --calls--> `saveCart()`  [EXTRACTED]
  script.js → script.js  _Bridges community 1 → community 2_

## Import Cycles
- None detected.

## Communities (7 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.15
Nodes (4): cart, filteredProducts, products, wishlist

### Community 1 - "Community 1"
Cohesion: 0.33
Nodes (6): addToCart(), addToCartDetail(), addToCartWithSize(), showToast(), toggleWishlist(), updateWishlistBadge()

### Community 2 - "Community 2"
Cohesion: 0.47
Nodes (6): changeQty(), removeFromCart(), renderCartSidebar(), saveCart(), toggleCart(), updateCartBadge()

### Community 3 - "Community 3"
Cohesion: 0.40
Nodes (4): fs, http, mime, path

### Community 4 - "Community 4"
Cohesion: 0.50
Nodes (4): applyFilters(), filterCat(), sortList(), sortProducts()

### Community 5 - "Community 5"
Cohesion: 0.67
Nodes (3): catLabel(), openProduct(), renderCard()

## Knowledge Gaps
- **8 isolated node(s):** `products`, `cart`, `wishlist`, `filteredProducts`, `http` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `saveCart()` connect `Community 2` to `Community 0`, `Community 1`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `addToCartWithSize()` connect `Community 1` to `Community 0`, `Community 2`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `renderCartSidebar()` connect `Community 2` to `Community 0`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `products`, `cart`, `wishlist` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._