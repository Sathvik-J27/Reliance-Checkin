const supabase = require('../config/supabase');

/**
 * Returns all staff members in their custom order (sort_order), with any
 * unpositioned rows last, alphabetically.
 * @returns {{ id: string, name: string }[]}
 */
async function getAllStaff() {
  const { data, error } = await supabase
    .from('staff_members')
    .select('id, name')
    .order('sort_order', { ascending: true, nullsFirst: false })
    .order('name', { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch staff: ${error.message}`);
  }

  return data || [];
}

/**
 * Adds a staff member at the end of the list. Throws with status 409 if the
 * name already exists (case-insensitive, enforced by a unique index on LOWER(name)).
 */
async function addStaff(name) {
  const { data: last, error: maxError } = await supabase
    .from('staff_members')
    .select('sort_order')
    .not('sort_order', 'is', null)
    .order('sort_order', { ascending: false })
    .limit(1);

  if (maxError) {
    throw new Error(`Failed to add staff member: ${maxError.message}`);
  }

  const nextOrder = (last?.[0]?.sort_order || 0) + 1;

  const { data, error } = await supabase
    .from('staff_members')
    .insert({ name, sort_order: nextOrder })
    .select('id, name')
    .single();

  if (error) {
    if (error.code === '23505') {
      const err = new Error(`"${name}" is already on the staff list`);
      err.status = 409;
      throw err;
    }
    throw new Error(`Failed to add staff member: ${error.message}`);
  }

  return data;
}

/**
 * Removes a staff member by ID. Existing check-ins keep the name they were
 * assigned/helped by — only the dropdown list changes.
 */
async function removeStaff(id) {
  const { error } = await supabase
    .from('staff_members')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to remove staff member: ${error.message}`);
  }
}

/**
 * Saves a new order. `ids` is the full list of staff IDs in the desired order;
 * IDs not in the table are ignored, and staff missing from `ids` keep their
 * relative order after the listed ones.
 */
async function reorderStaff(ids) {
  const current = await getAllStaff();
  const byId = new Map(current.map(s => [s.id, s]));

  const ordered = [
    ...ids.filter(id => byId.has(id)),
    ...current.map(s => s.id).filter(id => !ids.includes(id)),
  ];

  const rows = ordered.map((id, i) => ({ id, name: byId.get(id).name, sort_order: i + 1 }));

  const { error } = await supabase
    .from('staff_members')
    .upsert(rows, { onConflict: 'id' });

  if (error) {
    throw new Error(`Failed to reorder staff: ${error.message}`);
  }
}

module.exports = { getAllStaff, addStaff, removeStaff, reorderStaff };
