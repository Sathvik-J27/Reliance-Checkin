const supabase = require('../config/supabase');

/**
 * Returns all staff members, alphabetically by name.
 * @returns {{ id: string, name: string }[]}
 */
async function getAllStaff() {
  const { data, error } = await supabase
    .from('staff_members')
    .select('id, name')
    .order('name', { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch staff: ${error.message}`);
  }

  return data || [];
}

/**
 * Adds a staff member. Throws with status 409 if the name already exists
 * (case-insensitive, enforced by a unique index on LOWER(name)).
 */
async function addStaff(name) {
  const { data, error } = await supabase
    .from('staff_members')
    .insert({ name })
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

module.exports = { getAllStaff, addStaff, removeStaff };
