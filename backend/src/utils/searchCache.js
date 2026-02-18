/**
 * Lightweight in-memory TTL cache for search results.
 * Prevents repeat DB round-trips for common search terms.
 * Key format: "accounts:granite" | "materials:marble"
 * TTL: 5 minutes
 */

const TTL_MS = 5 * 60 * 1000; // 5 minutes
const store = new Map();

function get(key) {
  const entry = store.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    store.delete(key);
    return null;
  }
  return entry.results;
}

function set(key, results) {
  store.set(key, { results, expiresAt: Date.now() + TTL_MS });
}

// Prune expired entries (called on set to keep memory bounded)
function prune() {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.expiresAt) store.delete(key);
  }
}

module.exports = { get, set, prune };
