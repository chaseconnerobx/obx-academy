// js/modals.js
const Modals = {
  _assignTarget: null,

  openAssign(name) {
    Modals._assignTarget = name;
    document.getElementById('modalTitle').textContent = `Assign modules — ${name}`;
    document.getElementById('assignModal').style.display = 'flex';
  },

  closeAssign(event) {
    // Close on backdrop click or explicit call
    if (event && event.target !== document.getElementById('assignModal')) return;
    document.getElementById('assignModal').style.display = 'none';
    // Uncheck all
    document.querySelectorAll('#checkList input').forEach(i => {
      i.checked = false;
      i.closest('.check-item').classList.remove('checked');
    });
  },

  confirmAssign() {
    const checked = [...document.querySelectorAll('#checkList input:checked')];
    if (checked.length === 0) {
      App.toast('Select at least one module to assign.');
      return;
    }
    document.getElementById('assignModal').style.display = 'none';
    App.toast(`${checked.length} module${checked.length !== 1 ? 's' : ''} assigned to ${Modals._assignTarget}`);
    checked.forEach(i => {
      i.checked = false;
      i.closest('.check-item').classList.remove('checked');
    });
  },
};
