/* scripts for tooltip and popover */

/*    const popoverEl = document.getElementById("popover");
  const popover = new bootstrap.Popover(popoverEl); */

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
